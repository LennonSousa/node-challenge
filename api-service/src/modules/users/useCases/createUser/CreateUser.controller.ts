import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserDTO } from '../../dto/User.dto';
import { CreateUserBodyDTO } from './dtos/CreateUserBody.dto';
import { CreateUserUseCase } from './CreateUserUseCase';
import { JwtAuthGuard } from '../../../auth/guards/jwtAuth.guard';

@ApiTags('users')
@Controller('register')
@UseGuards(JwtAuthGuard)
class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  @Post()
  @ApiOperation({
    summary: 'Create an user',
    description: 'This endpoint creates an user',
  })
  @ApiResponse({ status: 201, type: UserDTO })
  async createUser(@Body() data: CreateUserBodyDTO): Promise<UserDTO> {
    return this.createUserUseCase.execute(data);
  }
}

export { CreateUserController };
