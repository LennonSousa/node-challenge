import { StockDTO } from './dto/Stock.dto';

interface IStockQuoteProvider {
  getStockQuote(symbol: string): Promise<StockDTO | undefined>;
}

export { IStockQuoteProvider };
