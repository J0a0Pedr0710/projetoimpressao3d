import { useProfile } from '@/contexts';
import { AddressCard } from '@/features/profile/molecules/addressCard';
import { sortAddresses } from '@/utils/services/getDefaultProfileAddress';

export const LastOrders = () => {
  const { profile } = useProfile();

  const addresses = sortAddresses(
    profile.addresses ??
      (profile.address
        ? [
            {
              ...profile.address,
              isDefault: true,
            },
          ]
        : []),
  );

  const defaultAddress =
    addresses.find((address) => address.isDefault) ?? addresses[0];

  if (!defaultAddress) return null;

  return (
    <AddressCard
      address={defaultAddress}
      profile={profile}
      isDefault
      hideActions
      hideDeliveryInstructions
    />
  );
};