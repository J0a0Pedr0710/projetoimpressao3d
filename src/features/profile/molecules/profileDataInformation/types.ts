import type { IProfile } from 'models';

export type IProfileDataInformation = {
  person: Pick<IProfile, 'firstName' | 'lastName' | 'email'>;
};
