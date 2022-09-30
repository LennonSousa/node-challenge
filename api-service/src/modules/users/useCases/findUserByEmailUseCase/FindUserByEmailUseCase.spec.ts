import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { UsersRepositoryModule } from '../../../../shared/database/modules/users/usersRespository.module';
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';
import { UserRoleEnum as PrismaUserRoleEnum } from '@prisma/client';

const fakeUser = {
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email',
  role: PrismaUserRoleEnum.ADMIN,
  password: 'valid_password',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('FindUserByEmail UseCase', () => {
  let findUserByEmailUseCase: FindUserByEmailUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersRepositoryModule],
      providers: [FindUserByEmailUseCase, FindUserByEmailUseCase],
    }).compile();

    findUserByEmailUseCase = module.get<FindUserByEmailUseCase>(
      FindUserByEmailUseCase,
    );
  });

  it('Should be able to throw when UsersRepository throws', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByEmail')
      .mockReturnValueOnce(Promise.reject(new Error()));

    await expect(
      findUserByEmailUseCase.execute('invalid_email'),
    ).rejects.toThrow();
  });

  it('Should return 200 if valid data is provided"', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByEmail')
      .mockReturnValueOnce(Promise.resolve(fakeUser));

    const httpResponse = await findUserByEmailUseCase.execute('valid_email');

    expect(httpResponse).toHaveProperty('id');
  });
});
