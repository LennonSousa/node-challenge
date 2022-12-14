import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StocksModule } from './modules/stocks/stocks.module';

@Module({
  imports: [StocksModule],
  controllers: [AppController],
})
export class AppModule {}
