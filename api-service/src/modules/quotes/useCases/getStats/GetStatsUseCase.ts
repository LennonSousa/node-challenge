import { Inject, Injectable } from '@nestjs/common';
import { StocksRepository } from '../../../../shared/database/modules/stocks/repositories/implementations/StocksRepository';
import { IStocksRepository } from '../../../../shared/database/modules/stocks/repositories/IStocksRepository';
import { StatDTO } from './dtos/Stat.dto';

@Injectable()
class GetStatsUseCase {
  constructor(
    @Inject(StocksRepository)
    private readonly usersRepository: IStocksRepository,
  ) {}

  async execute(): Promise<StatDTO[]> {
    const stats = await this.usersRepository.listStockStats();

    return stats.map((stat) => {
      return {
        stock: stat.symbol,
        timesRequested: stat._count,
      };
    });
  }
}

export { GetStatsUseCase };
