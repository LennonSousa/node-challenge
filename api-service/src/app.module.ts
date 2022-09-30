import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { StocksModule } from './modules/quotes/stocks.module';
import { UsersModule } from './modules/users/users.module';
import { StocksRepositoryModule } from './shared/database/modules/stocks/stocksRespository.module';
import { UsersRepositoryModule } from './shared/database/modules/users/usersRespository.module';

@Module({
  imports: [
    AuthModule,
    StocksModule,
    UsersModule,
    StocksRepositoryModule,
    UsersRepositoryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
