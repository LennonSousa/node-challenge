import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

class StatDTO {
  @ApiProperty({
    type: String,
    description: 'Stock quote symbol',
    example: 'msft.us',
    required: true,
  })
  @IsString()
  stock!: string;

  @ApiProperty({
    type: Number,
    description: 'Stock quote time requested',
    example: 5,
    required: true,
  })
  @IsNumber()
  timesRequested!: number;
}

export { StatDTO };
