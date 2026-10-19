import type { IUser } from 'models';

import { projectFaker } from '../common/faker';

export const mockUser: IUser = {
  isActive: true,
  isMain: true,
  email: projectFaker.internet.email(),
  firstName: projectFaker.person.firstName(),
  lastName: projectFaker.person.lastName(),
  permissions: ['USER'],
  registerNumber: projectFaker.string.alphanumeric(10),
  userId: projectFaker.string.uuid(),
  iat: projectFaker.number.int(),
  exp: projectFaker.number.int(),
};
