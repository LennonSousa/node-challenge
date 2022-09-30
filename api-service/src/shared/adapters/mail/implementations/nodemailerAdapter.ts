import { MailAdapter, SendMailData } from '../mailAdapter';
import nodemailer from 'nodemailer';

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ to, subject, body }: SendMailData) {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Node challenge <node@challenge.com>',
      to,
      subject,
      html: body,
    });
  }
}
