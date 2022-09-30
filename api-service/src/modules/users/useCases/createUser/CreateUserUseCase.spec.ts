import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { UsersRepositoryModule } from '../../../../shared/database/modules/users/usersRespository.module';
import { FindUserByEmailUseCase } from '../findUserByEmailUseCase/FindUserByEmailUseCase';
import { CreateUserUseCase } from './CreateUserUseCase';
import { UserRoleEnum as PrismaUserRoleEnum } from '@prisma/client';
import { UserRoleEnum } from '../../enum/UserRoleEnum';

const fakeUser = {
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email',
  role: PrismaUserRoleEnum.ADMIN,
  password: 'valid_password',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('CreateUser UseCase', () => {
  let createUserUseCase: CreateUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersRepositoryModule],
      providers: [CreateUserUseCase, FindUserByEmailUseCase],
    }).compile();

    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
  });

  it('Should return 200 if valid data is provided"', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'createUser')
      .mockReturnValueOnce(Promise.resolve(fakeUser));

    const httpResponse = await createUserUseCase.execute({
      name: 'valid_name',
      email: 'valid_email',
      role: UserRoleEnum.ADMIN,
    });

    expect(httpResponse).toHaveProperty('id');
  });
});
