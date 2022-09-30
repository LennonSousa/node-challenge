import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { UserRoleEnum } from '../enum/UserRoleEnum';
import { Exclude } from 'class-transformer';

class UserDTO {
  @ApiProperty({
    type: String,
    description: 'User ID',
    example: '9b4998fe-fae0-4f91-aab0-d1323d25da10',
    required: true,
  })
  @IsString()
  id!: string;

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

  @ApiProperty({
    type: String,
    description: 'User password',
    example: 'abc@123',
    required: true,
  })
  @Exclude({ toPlainOnly: true })
  @IsString()
  password!: string;

  @ApiProperty({
    type: String,
    description: 'User created at',
    example: '2022-09-27T03:45:10.904Z',
    required: true,
  })
  @IsString()
  createdAt!: string;

  @ApiProperty({
    type: String,
    description: 'User updated at',
    example: '2022-09-27T03:45:10.904Z',
    required: true,
  })
  @IsString()
  updatedAt!: string;
}

export { UserDTO };
