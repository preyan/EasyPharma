import { SetMetadata } from '@nestjs/common';
import type { Role } from '@easy-pharma/shared-prisma';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
