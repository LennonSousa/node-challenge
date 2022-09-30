import { CreateUserDto } from '../dtos/CreateUser.dto';
import { User } from '../entities/Users.entity';

interface IUsersRepository {
  createUser(data: CreateUserDto): Promise<User>;
  updatePassword(email: string, password: string): Promise<User>;
  listAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
