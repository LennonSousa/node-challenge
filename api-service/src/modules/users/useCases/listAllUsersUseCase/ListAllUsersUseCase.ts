import { UserDTO } from 'src/modules/users/dto/User.dto';
import { UserRoleEnum } from '../../enum/UserRoleEnum';
import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../../../shared/database/modules/users/repositories/IUsersRepository';

@Injectable()
class ListAllUsersUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<UserDTO[]> {
    const users = await this.usersRepository.listAll();

    return users.map(({ role, createdAt, updatedAt, ...user }) => {
      return {
        ...user,
        role: role as UserRoleEnum,
        createdAt: createdAt.toISOString(),
        updatedAt: updatedAt.toISOString(),
      };
    });
  }
}

export { ListAllUsersUseCase };
