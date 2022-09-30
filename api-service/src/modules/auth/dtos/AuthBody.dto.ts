import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class AuthBodyDTO {
  @ApiProperty({
    type: String,
    description: 'User e-mail',
    example: 'user@email.com',
    required: true,
  })
  @IsString()
  username!: string;

  @ApiProperty({
    type: String,
    description: 'User password',
    example: 'my@password-123',
    required: true,
  })
  @IsString()
  password!: string;
}

export { AuthBodyDTO };
