import { Module } from '@nestjs/common';
import { UsersRepositoryModule } from '../../shared/database/modules/users/usersRespository.module';
import { CreateUserController } from './useCases/createUser/CreateUser.controller';
import { CreateUserUseCase } from './useCases/createUser/CreateUserUseCase';
import { FindUserByEmailUseCase } from './useCases/findUserByEmailUseCase/FindUserByEmailUseCase';
import { ListAllUsersUseCase } from './useCases/listAllUsersUseCase/ListAllUsersUseCase';
import { ResetPasswordUseCase } from './useCases/resetPassword/ResetPassword';
import { ResetPasswordController } from './useCases/resetPassword/ResetPassword.controller';
import { UserInitializer } from './UserInitializer';

@Module({
  imports: [UsersRepositoryModule],
  controllers: [CreateUserController, ResetPasswordController],
  providers: [
    CreateUserUseCase,
    FindUserByEmailUseCase,
    ListAllUsersUseCase,
    ResetPasswordUseCase,
    UserInitializer,
  ],
})
export class UsersModule {}
