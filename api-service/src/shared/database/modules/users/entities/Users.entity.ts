import { UserRoleEnum } from '@prisma/client';

class User {
  id!: string;
  name!: string;
  email!: string;
  role!: UserRoleEnum;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

export { User };
