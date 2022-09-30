import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class GetStockQueriesDTO {
  @ApiProperty({
    type: String,
    description: 'Stock quote symbol',
    example: 'AAPL.US',
    required: true,
  })
  @IsString()
  q?: string;
}

export { GetStockQueriesDTO };
