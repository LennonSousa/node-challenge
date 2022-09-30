import { UserRoleEnum } from '@prisma/client';

class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
  role!: UserRoleEnum;
}

export { CreateUserDto };
