import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserRoleEnum } from './enum/UserRoleEnum';
import { CreateUserUseCase } from './useCases/createUser/CreateUserUseCase';
import { ListAllUsersUseCase } from './useCases/listAllUsersUseCase/ListAllUsersUseCase';

@Injectable()
class UserInitializer implements OnApplicationBootstrap {
  constructor(
    private readonly listAllUsersUseCase: ListAllUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  async onApplicationBootstrap() {
    const foundUsers = await this.listAllUsersUseCase.execute();

    if (!foundUsers.length) {
      const firstUser = await this.createUserUseCase.execute({
        name: 'First User',
        email: 'first@user.com',
        role: UserRoleEnum.ADMIN,
      });

      console.log(firstUser);
    }
  }
}

export { UserInitializer };
