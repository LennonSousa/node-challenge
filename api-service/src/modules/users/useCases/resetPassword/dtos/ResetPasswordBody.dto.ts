import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class ResetPasswordBody {
  @ApiProperty({
    type: String,
    description: 'User e-mail',
    example: 'john@email.com',
    required: true,
  })
  @IsString()
  email!: string;
}

export { ResetPasswordBody };
