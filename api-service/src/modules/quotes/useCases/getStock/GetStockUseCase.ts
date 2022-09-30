import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { JwtPayloadDTO } from '../../../auth/dtos/JwtPayload.dto';
import { StocksRepository } from '../../../../shared/database/modules/stocks/repositories/implementations/StocksRepository';
import { IStocksRepository } from '../../../../shared/database/modules/stocks/repositories/IStocksRepository';
import { StockServiceProvider } from '../../../../shared/providers/stockQuoteProvider/implementations/StockServiceProvider';
import { StockDTO } from '../../dto/Stock.dto';

@Injectable()
class GetStockUseCase {
  constructor(
    @Inject(StocksRepository)
    private readonly usersRepository: IStocksRepository,
    private readonly stockQuoteProvider: StockServiceProvider,
  ) {}

  async execute({ id }: JwtPayloadDTO, symbol?: string): Promise<StockDTO> {
    if (!symbol)
      throw new BadRequestException('The query {?q} stock symbol is required');

    const stockQuote = await this.stockQuoteProvider.getStockQuote(symbol);

    if (!stockQuote)
      throw new NotFoundException(`Cannot find symbol ${symbol}`);

    await this.usersRepository.createStock({
      ...stockQuote,
      userId: id,
    });

    return stockQuote;
  }
}

export { GetStockUseCase };
