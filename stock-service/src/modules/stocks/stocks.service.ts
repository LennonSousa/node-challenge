import { Injectable } from '@nestjs/common';

@Injectable()
export class StocksService {
  findOne(symbol: string) {
    return `This action returns a #${symbol} stock`;
  }
}
