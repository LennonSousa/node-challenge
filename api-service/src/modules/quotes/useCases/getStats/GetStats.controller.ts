import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatDTO } from './dtos/Stat.dto';
import { GetStatsUseCase } from './GetStatsUseCase';
import { JwtAuthGuard } from '../../../auth/guards/jwtAuth.guard';
import { Roles } from '../../../../shared/decorators/roles.decorator';
import { UserRoleEnum } from '../../../users/enum/UserRoleEnum';
import { RolesGuard } from '../../../auth/guards/roles.guard';

@ApiTags('stock')
@Controller('stats')
@Roles(UserRoleEnum.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
class GetStatsController {
  constructor(private readonly getStatsUseCase: GetStatsUseCase) {}

  @Get()
  @ApiOperation({
    summary: 'Get a stock quote stats',
    description: 'Admin requests a stock quote stats',
  })
  @ApiResponse({ status: 200, type: StatDTO, isArray: true })
  async getStats(): Promise<StatDTO[]> {
    return this.getStatsUseCase.execute();
  }
}

export { GetStatsController };
