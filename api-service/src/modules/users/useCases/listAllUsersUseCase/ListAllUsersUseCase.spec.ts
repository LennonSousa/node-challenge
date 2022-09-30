import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { UsersRepositoryModule } from '../../../../shared/database/modules/users/usersRespository.module';
import { ListAllUsersUseCase } from './ListAllUsersUseCase';

describe('FindUserByEmail UseCase', () => {
  let findUserByEmailUseCase: ListAllUsersUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersRepositoryModule],
      providers: [ListAllUsersUseCase, ListAllUsersUseCase],
    }).compile();

    findUserByEmailUseCase =
      module.get<ListAllUsersUseCase>(ListAllUsersUseCase);
  });

  it('Should be able to throw when UsersRepository throws', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'listAll')
      .mockReturnValueOnce(Promise.reject(new Error()));

    await expect(findUserByEmailUseCase.execute()).rejects.toThrow();
  });
});
