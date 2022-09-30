import { IApiProvider } from '../../apiProvider/IApiProvider';
import { AxiosApiProvider } from '../../apiProvider/implementations/AxiosApiProvider';
import { StockDTO } from '../dto/Stock.dto';
import { StockServiceResponseDTO } from '../dto/StockServiceResponse.dto';
import { IStockQuoteProvider } from '../IStockQuoteProvider';

class StockServiceProvider implements IStockQuoteProvider {
  private apiProvider: IApiProvider;
  private readonly baseUrl =
    process.env.STOCK_SERVICE_API ?? 'http://localhost:3001';

  constructor() {
    this.apiProvider = new AxiosApiProvider({}, this.baseUrl);
  }

  async getStockQuote(symbol: string): Promise<StockDTO | undefined> {
    const stockServiceResponse = await this.apiProvider.get(
      `/stocks/${symbol}`,
    );

    const stockServiceData: StockServiceResponseDTO = stockServiceResponse.data;

    if (stockServiceData.open === 'N/D') return undefined;

    return {
      name: stockServiceData.name,
      symbol: stockServiceData.symbol,
      open: Number(stockServiceData.open),
      high: Number(stockServiceData.high),
      low: Number(stockServiceData.low),
      close: Number(stockServiceData.close),
    };
  }
}

export { StockServiceProvider };
