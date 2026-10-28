import { messages } from '@/assets/messages';
import { useProfile } from '@/contexts';
import { AddressCard } from '@/features/profile/molecules/addressCard';
import { ProfileSummarySection } from '@/features/profile/molecules/profileSummarySection';
import { getDefaultProfileAddress } from '@/utils/services/getDefaultProfileAddress';
import { useNavigations } from '@/utils/services/getNavigation';

import { AddressSummaryCards } from './style';

export const LastOrders = () => {
  const { profile } = useProfile();
  const { handleAddressesNavigation } = useNavigations();

  const addresses =
    profile.addresses ??
    (profile.address
      ? [
          {
            ...profile.address,
            isDefault: true,
          },
        ]
      : []);
  const defaultAddress = getDefaultProfileAddress(addresses);

  if (!defaultAddress) return null;

  return (
    <ProfileSummarySection
      actionLabel={messages.texts.viewAll}
      icon="location"
      onAction={handleAddressesNavigation}
      title={messages.texts.addressess}
    >
      <AddressSummaryCards>
        <AddressCard
          key={defaultAddress.id ?? `${defaultAddress.cep}-${defaultAddress.street}`}
          address={defaultAddress}
          profile={profile}
          isDefault
          hideActions
          hideDeliveryInstructions
        />
      </AddressSummaryCards>
    </ProfileSummarySection>
  );
};
