import { Controller, Get, Param } from '@nestjs/common';
import { StockDTO } from '../../dto/Stock.dto';
import { GetStockBySymbolUseCase } from './GetStockBySymbolUseCase';

@Controller('stocks')
export class GetStockBySymbolController {
  constructor(private readonly stocksService: GetStockBySymbolUseCase) {}

  @Get(':symbol')
  findOne(@Param('symbol') symbol: string): Promise<StockDTO> {
    return this.stocksService.execute(symbol);
  }
}
