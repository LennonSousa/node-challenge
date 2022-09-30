import { UsersRepository } from '../../../../shared/database/modules/users/repositories/implementations/UsersRepository';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUsersRepository } from '../../../../shared/database/modules/users/repositories/IUsersRepository';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { ResetPasswordBody } from './dtos/ResetPasswordBody.dto';
import { MailAdapter } from '../../../../shared/adapters/mail/mailAdapter';
import { NodemailerAdapter } from '../../../../shared/adapters/mail/implementations/nodemailerAdapter';

@Injectable()
class ResetPasswordUseCase {
  private readonly mailAdapter: MailAdapter;
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {
    this.mailAdapter = new NodemailerAdapter();
  }

  async execute({ email }: ResetPasswordBody): Promise<void> {
    try {
      await this.usersRepository.findByEmail(email);
    } catch {
      throw new NotFoundException('User e-mail not found!');
    }

    const randomPassword = randomBytes(20).toString('hex');

    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(randomPassword, saltOrRounds);

    const { name } = await this.usersRepository.updatePassword(
      email,
      hashPassword,
    );

    await this.mailAdapter.sendMail({
      to: email,
      subject: 'New password',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Hi: ${name}</p>`,
        `<p>Your new password: ${randomPassword}</p>`,
        '</div>',
      ].join('\n'),
    });
  }
}

export { ResetPasswordUseCase };
