import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { ResetPasswordBody } from './dtos/ResetPasswordBody.dto';
import { ResetPasswordUseCase } from './ResetPassword';

@ApiTags('users')
@Controller('reset')
class ResetPasswordController {
  constructor(private readonly createUserUseCase: ResetPasswordUseCase) {}
  @Post()
  @ApiOperation({
    summary: 'Resets an user password',
    description: 'This endpoint resets an user password',
  })
  @ApiResponse({ status: 204 })
  async createUser(@Body() data: ResetPasswordBody): Promise<void> {
    return this.createUserUseCase.execute(data);
  }
}

export { ResetPasswordController };
