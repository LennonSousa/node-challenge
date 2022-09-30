import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { UserRoleEnum } from '../../../enum/UserRoleEnum';

class CreateUserBodyDTO {
  @ApiProperty({
    type: String,
    description: 'User name',
    example: 'John',
    required: true,
  })
  @IsString()
  name!: string;

  @ApiProperty({
    type: String,
    description: 'User e-mail',
    example: 'john@email.com',
    required: true,
  })
  @IsString()
  email!: string;

  @ApiProperty({
    enum: UserRoleEnum,
    description: 'User role',
    example: 'USER',
    required: true,
  })
  @IsEnum(UserRoleEnum)
  role!: UserRoleEnum;
}

export { CreateUserBodyDTO };
