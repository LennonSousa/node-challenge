import { Inject, Injectable } from '@nestjs/common';
import { StocksRepository } from '../../../../shared/database/modules/stocks/repositories/implementations/StocksRepository';
import { IStocksRepository } from '../../../../shared/database/modules/stocks/repositories/IStocksRepository';
import { StockDTO } from '../../dto/Stock.dto';

@Injectable()
class GetHistoryUseCase {
  constructor(
    @Inject(StocksRepository)
    private readonly usersRepository: IStocksRepository,
  ) {}

  async execute(userId: string): Promise<StockDTO[]> {
    return this.usersRepository.listStocksByUserId(userId);
  }
}

export { GetHistoryUseCase };
