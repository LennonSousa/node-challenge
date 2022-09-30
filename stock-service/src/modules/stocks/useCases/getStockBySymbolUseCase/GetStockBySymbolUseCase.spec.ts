import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CsvToJson } from '../../../../shared/utils/csvToJson';
import { AxiosApiProvider } from '../../../../shared/providers/apiProvider/implementations/AxiosApiProvider';
import { GetStockBySymbolUseCase } from './GetStockBySymbolUseCase';

describe('GetStockBySymbol UseCase', () => {
  let getStockBySymbolUseCase: GetStockBySymbolUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetStockBySymbolUseCase],
    }).compile();

    getStockBySymbolUseCase = module.get<GetStockBySymbolUseCase>(
      GetStockBySymbolUseCase,
    );
  });

  it('Should be able to throw when fromStringToJson returns an empty array', async () => {
    jest
      .spyOn(CsvToJson.prototype, 'execute')
      .mockReturnValueOnce(Promise.resolve([]));

    await expect(
      getStockBySymbolUseCase.execute('valid_symbol'),
    ).rejects.toThrow(NotFoundException);
  });

  it('Should be able to throw when http request throws', async () => {
    jest
      .spyOn(AxiosApiProvider.prototype, 'get')
      .mockReturnValueOnce(Promise.reject(new Error()));

    await expect(
      getStockBySymbolUseCase.execute('valid_symbol'),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('Should return 200 if valid data is provided"', async () => {
    const fakeCsvResponse =
      'Symbol,Date,Time,Open,High,Low,Close,Volume,Name\r\n' +
      'valid_symbol,valid_date,valid_time,valid_open,valid_high,valid_low,valid_close,valid_volume,valid_name\r\n';

    jest.spyOn(AxiosApiProvider.prototype, 'get').mockReturnValueOnce(
      Promise.resolve({
        data: fakeCsvResponse,
      }),
    );

    const httpResponse = await getStockBySymbolUseCase.execute('valid_symbol');

    expect(httpResponse).toEqual({
      symbol: 'valid_symbol',
      date: 'valid_date',
      time: 'valid_time',
      open: 'valid_open',
      high: 'valid_high',
      low: 'valid_low',
      close: 'valid_close',
      volume: 'valid_volume',
      name: 'valid_name',
    });
  });
});
