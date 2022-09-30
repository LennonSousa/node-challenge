import { PrismaService } from '../../../../Prisma.service';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { User } from '../../entities/Users.entity';
import { IUsersRepository } from '../IUsersRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  updatePassword(email: string, password: string): Promise<User> {
    return this.prisma.user.update({
      where: { email },
      data: { password },
    });
  }

  async listAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirstOrThrow({
      where: { email },
    });
  }
}

export { UsersRepository };
