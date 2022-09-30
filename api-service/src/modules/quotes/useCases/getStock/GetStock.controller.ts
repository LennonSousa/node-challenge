import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  HttpException,
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { StockDTO } from '../../dto/Stock.dto';
import { GetStockUseCase } from './GetStockUseCase';
import { GetStockQueriesDTO } from './dtos/GetStockQueries.dto';
import { JwtAuthGuard } from '../../../auth/guards/jwtAuth.guard';
import { GetUnstructuredToken } from '../../../../shared/decorators/GetUnstructuredToken.decurator';
import { JwtPayloadDTO } from '../../../auth/dtos/JwtPayload.dto';

@ApiTags('stock')
@Controller('stock')
@UseGuards(JwtAuthGuard)
class GetStockController {
  constructor(private readonly getStockUseCase: GetStockUseCase) {}
  @Get()
  @ApiOperation({
    summary: 'Get a stock quote',
    description: 'User requests a stock quote',
  })
  @ApiResponse({ status: 200, type: StockDTO })
  @ApiResponse({ status: 400, type: HttpException })
  @ApiResponse({ status: 404, type: HttpException })
  @ApiResponse({ status: 500, type: HttpException })
  async getStock(
    @GetUnstructuredToken() payload: JwtPayloadDTO,
    @Query() { q }: GetStockQueriesDTO,
  ): Promise<StockDTO> {
    return this.getStockUseCase.execute(payload, q);
  }
}

export { GetStockController };
