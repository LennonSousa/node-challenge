import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { StockDTO } from '../../dto/Stock.dto';
import { GetHistoryUseCase } from './GetHistoryUseCase';
import { JwtAuthGuard } from '../../../auth/guards/jwtAuth.guard';
import { GetUnstructuredToken } from '../../../../shared/decorators/GetUnstructuredToken.decurator';
import { JwtPayloadDTO } from '../../../auth/dtos/JwtPayload.dto';

@ApiTags('stock')
@Controller('history')
@UseGuards(JwtAuthGuard)
class GetHistoryController {
  constructor(private readonly getHistoryUseCase: GetHistoryUseCase) {}

  @Get()
  @ApiOperation({
    summary: 'Get a stock quote history',
    description: 'User can get their history',
  })
  @ApiResponse({ status: 200, type: StockDTO, isArray: true })
  async getHistory(
    @GetUnstructuredToken() { id }: JwtPayloadDTO,
  ): Promise<StockDTO[]> {
    return this.getHistoryUseCase.execute(id);
  }
}

export { GetHistoryController };
