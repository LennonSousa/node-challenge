import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from 'src/modules/users/enum/UserRoleEnum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRoleEnum[]) =>
  SetMetadata(ROLES_KEY, roles);
