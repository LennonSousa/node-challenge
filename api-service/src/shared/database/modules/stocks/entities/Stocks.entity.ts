import { User } from '../../users/entities/Users.entity';

class Stock {
  id!: string;
  name!: string;
  symbol!: string;
  open!: number;
  high!: number;
  low!: number;
  close!: number;
  date!: Date;
  userId!: string;
  User?: User;
}

export { Stock };
