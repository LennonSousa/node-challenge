import { StocksRepository } from './repositories/implementations/StocksRepository';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../Prisma.service';

@Module({
  controllers: [],
  providers: [StocksRepository, PrismaService],
  exports: [StocksRepository],
})
export class StocksRepositoryModule {}
