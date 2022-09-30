import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './services/Auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/auth.constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { FindUserByEmailUseCase } from '../users/useCases/findUserByEmailUseCase/FindUserByEmailUseCase';
import { UsersRepositoryModule } from '../../shared/database/modules/users/usersRespository.module';
import { LocalStrategy } from './strategies/local.strategy';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7h' },
    }),
    UsersRepositoryModule,
  ],
  controllers: [],
  providers: [
    AuthService,
    FindUserByEmailUseCase,
    JwtStrategy,
    LocalStrategy,
    RolesGuard,
  ],
  exports: [AuthService],
})
export class AuthModule {}
