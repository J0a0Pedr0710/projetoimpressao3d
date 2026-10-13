import type { IUser } from "models";
import { projectFaker } from "../common/faker";

export const mockUser: IUser = {
    isActive: true,
    isMain: true,
    email: projectFaker.internet.email(),
    fullName: projectFaker.person.fullName(),
    permissions: ['USER'],
    registerNumber: projectFaker.string.alphanumeric(10),
    userId: projectFaker.string.uuid(),
    iat: projectFaker.number.int(),
    exp: projectFaker.number.int(),
  };