import { Module } from '@nestjs/common';
import { StocksRepositoryModule } from '../../shared/database/modules/stocks/stocksRespository.module';
import { StockServiceProvider } from '../../shared/providers/stockQuoteProvider/implementations/StockServiceProvider';
import { GetHistoryController } from './useCases/getHistory/GetHistory.controller';
import { GetHistoryUseCase } from './useCases/getHistory/GetHistoryUseCase';
import { GetStatsController } from './useCases/getStats/GetStats.controller';
import { GetStatsUseCase } from './useCases/getStats/GetStatsUseCase';
import { GetStockController } from './useCases/getStock/GetStock.controller';
import { GetStockUseCase } from './useCases/getStock/GetStockUseCase';

@Module({
  imports: [StocksRepositoryModule],
  controllers: [GetStatsController, GetStockController, GetHistoryController],
  providers: [
    GetHistoryUseCase,
    GetStatsUseCase,
    GetStockUseCase,
    StockServiceProvider,
  ],
})
export class StocksModule {}
