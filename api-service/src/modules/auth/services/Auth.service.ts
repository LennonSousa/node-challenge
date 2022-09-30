import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserByEmailUseCase } from '../../users/useCases/findUserByEmailUseCase/FindUserByEmailUseCase';
import { AuthBodyDTO } from '../dtos/AuthBody.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private findUserByEmail: FindUserByEmailUseCase,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.findUserByEmail.execute(email);

      const isMatchPassword = await bcrypt.compare(pass, user.password);

      if (user && isMatchPassword) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;

        return result;
      }

      return null;
    } catch {
      return null;
    }
  }

  async login({ username }: AuthBodyDTO) {
    const user = await this.findUserByEmail.execute(username);

    const payload = { email: username, id: user.id, role: user.role };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
