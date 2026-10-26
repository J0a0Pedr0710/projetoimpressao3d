import type { IProfileResponse } from 'response';

type IProfileResponseAddresses = Pick<IProfileResponse, 'address' | 'addresses'>;

export const getProfileAddresses = ({ address, addresses }: IProfileResponseAddresses) => {
  if (addresses !== undefined) {
    return addresses.map((profileAddress) => ({
      ...profileAddress,
      id:
        profileAddress.id ??
        (typeof profileAddress._id === 'string'
          ? profileAddress._id
          : profileAddress._id?.$oid),
    }));
  }

  return address ? [{ ...address, isDefault: true }] : [];
};

export const getDefaultProfileAddress = <T extends { isDefault?: boolean }>(addresses: T[]) => {
  if (addresses.length === 1) {
    return addresses[0];
  }

  return addresses.find(({ isDefault }) => isDefault);
};
