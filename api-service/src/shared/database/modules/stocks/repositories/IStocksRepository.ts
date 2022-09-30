import { CreateStockDto } from '../dtos/CreateStock.dto';
import { StatDTO } from '../dtos/Stats.dto';
import { Stock } from '../entities/Stocks.entity';

interface IStocksRepository {
  createStock(data: CreateStockDto): Promise<Stock>;
  findById(id: string): Promise<Stock>;
  listStocksByUserId(userId: string): Promise<Stock[]>;
  listStockStats(top?: number): Promise<StatDTO[]>;
}

export { IStocksRepository };
