import type { IProfile } from 'models';

export type IAddressProfileInformation = {
  person: Pick<IProfile, 'firstName' | 'lastName' | 'telephone'>;
  address: IProfile['address'];
};
