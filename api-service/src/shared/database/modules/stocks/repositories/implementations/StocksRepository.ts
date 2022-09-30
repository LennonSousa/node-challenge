import { PrismaService } from '../../../../../database/Prisma.service';
import { CreateStockDto } from '../../dtos/CreateStock.dto';
import { Stock } from '../../entities/Stocks.entity';
import { IStocksRepository } from '../IStocksRepository';
import { Injectable } from '@nestjs/common';
import { StatDTO } from '../../dtos/Stats.dto';

@Injectable()
class StocksRepository implements IStocksRepository {
  constructor(private prisma: PrismaService) {}

  async createStock(data: CreateStockDto): Promise<Stock> {
    const stock = await this.prisma.stock.create({
      data,
    });

    return {
      ...stock,
      open: Number(stock.open),
      high: Number(stock.high),
      low: Number(stock.low),
      close: Number(stock.close),
    };
  }

  async findById(id: string): Promise<Stock> {
    throw new Error('Method not implemented.');
  }

  async listStocksByUserId(userId: string): Promise<Stock[]> {
    const stocks = await this.prisma.stock.findMany({ where: { userId } });

    return stocks.map((stock) => {
      return {
        ...stock,
        open: Number(stock.open),
        high: Number(stock.high),
        low: Number(stock.low),
        close: Number(stock.close),
      };
    });
  }

  async listStockStats(top = 5): Promise<StatDTO[]> {
    const stocks = await this.prisma.stock.groupBy({
      by: ['symbol'],
      _count: {
        symbol: true,
        _all: true,
      },
      orderBy: { _count: { symbol: 'desc' } },
      take: top,
    });

    return stocks.map((stock) => {
      return {
        ...stock,
        _count: Number(stock._count._all),
      };
    });
  }
}

export { StocksRepository };
