import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const GetUnstructuredToken = createParamDecorator(
  (_data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);

export { GetUnstructuredToken };
