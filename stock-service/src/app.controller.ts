import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('v1/status')
  getHello() {
    return { status: 'ok' };
  }
}
