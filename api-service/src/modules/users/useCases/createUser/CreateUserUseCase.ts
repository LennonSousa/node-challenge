import { CreateUserBodyDTO } from 'src/modules/users/useCases/createUser/dtos/CreateUserBody.dto';
import { UserDTO } from '../../../users/dto/User.dto';
import { UserRoleEnum } from '../../../users/enum/UserRoleEnum';
import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../../../shared/database/modules/users/repositories/IUsersRepository';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

@Injectable()
class CreateUserUseCase {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async execute(data: CreateUserBodyDTO): Promise<UserDTO> {
    const randomPassword = randomBytes(20).toString('hex');

    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(randomPassword, saltOrRounds);

    const { role, createdAt, updatedAt, ...newUser } =
      await this.usersRepository.createUser({
        ...data,
        password: hashPassword,
      });

    return {
      ...newUser,
      password: randomPassword,
      role: role as UserRoleEnum,
      createdAt: createdAt.toISOString(),
      updatedAt: updatedAt.toISOString(),
    };
  }
}

export { CreateUserUseCase };
