import { UsersRepository } from './repositories/implementations/UsersRepository';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../Prisma.service';

@Module({
  controllers: [],
  providers: [UsersRepository, PrismaService],
  exports: [UsersRepository],
})
export class UsersRepositoryModule {}
