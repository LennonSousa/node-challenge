import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

class StockDTO {
  @ApiProperty({
    type: String,
    description: 'Stocke quote name',
    example: 'APPLE',
    required: true,
  })
  @IsString()
  name!: string;

  @ApiProperty({
    type: String,
    description: 'Stock quote symbol',
    example: 'AAPL.US',
    required: true,
  })
  @IsString()
  symbol!: string;

  @ApiProperty({
    type: Number,
    description: 'Stock quote open',
    example: 123.66,
    required: true,
  })
  @IsNumber()
  open!: number;

  @ApiProperty({
    type: Number,
    description: 'Stock quote high',
    example: 123.66,
    required: true,
  })
  @IsNumber()
  high!: number;

  @ApiProperty({
    type: Number,
    description: 'Stock quote low',
    example: 122.49,
    required: true,
  })
  @IsNumber()
  low!: number;

  @ApiProperty({
    type: Number,
    description: 'Stock quote close',
    example: 123,
    required: true,
  })
  @IsNumber()
  close!: number;
}

export { StockDTO };
