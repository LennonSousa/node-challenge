import { UserDTO } from 'src/modules/users/dto/User.dto';
import { UserRoleEnum } from '../../../users/enum/UserRoleEnum';
import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../../../shared/database/modules/users/repositories/IUsersRepository';

@Injectable()
class FindUserByEmailUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async execute(email: string): Promise<UserDTO> {
    const { role, createdAt, updatedAt, ...user } =
      await this.usersRepository.findByEmail(email);

    return {
      ...user,
      role: role as UserRoleEnum,
      createdAt: createdAt.toISOString(),
      updatedAt: updatedAt.toISOString(),
    };
  }
}

export { FindUserByEmailUseCase };
