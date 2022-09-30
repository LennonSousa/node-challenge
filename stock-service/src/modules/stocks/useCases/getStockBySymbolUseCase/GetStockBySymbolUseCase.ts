import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { IApiProvider } from '../../../../shared/providers/apiProvider/IApiProvider';
import { AxiosApiProvider } from '../../../../shared/providers/apiProvider/implementations/AxiosApiProvider';
import { CsvToJson } from '../../../../shared/utils/csvToJson';
import { ParsedStookResponse } from '../../dto/ParsedStookResponse.dto';
import { StockDTO } from '../../dto/Stock.dto';

@Injectable()
class GetStockBySymbolUseCase {
  private apiProvider: IApiProvider;
  private readonly fromStringToJson: CsvToJson;

  constructor() {
    this.apiProvider = new AxiosApiProvider({}, 'https://stooq.com');
    this.fromStringToJson = new CsvToJson();
  }

  async execute(symbol: string): Promise<StockDTO> {
    let toJson: ParsedStookResponse[] = [];

    try {
      const stooqResponse = await this.apiProvider.get(
        `/q/l/?s=${symbol}&f=sd2t2ohlcvn&h&e=csv`,
      );

      toJson = await this.fromStringToJson.execute(stooqResponse.data);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong!');
    }

    if (!toJson.length) throw new NotFoundException('');

    try {
      return {
        symbol: toJson[0].Symbol,
        date: toJson[0].Date,
        time: toJson[0].Time,
        open: toJson[0].Open,
        high: toJson[0].High,
        low: toJson[0].Low,
        close: toJson[0].Close,
        volume: toJson[0].Volume,
        name: toJson[0].Name,
      };
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong!');
    }
  }
}

export { GetStockBySymbolUseCase };
