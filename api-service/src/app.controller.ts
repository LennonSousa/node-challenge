import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthBodyDTO } from './modules/auth/dtos/AuthBody.dto';
import { LocalAuthGuard } from './modules/auth/guards/localAuth.guard';
import { AuthService } from './modules/auth/services/Auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get('v1/status')
  getHello() {
    return { status: 'ok' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() { username, password }: AuthBodyDTO) {
    return this.authService.login({ username, password });
  }
}
