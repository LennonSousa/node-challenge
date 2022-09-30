import { Module } from '@nestjs/common';
import { GetStockBySymbolController } from './useCases/getStockBySymbolUseCase/GetStockBySymbol.controller';
import { GetStockBySymbolUseCase } from './useCases/getStockBySymbolUseCase/GetStockBySymbolUseCase';

@Module({
  controllers: [GetStockBySymbolController],
  providers: [GetStockBySymbolUseCase],
})
export class StocksModule {}
