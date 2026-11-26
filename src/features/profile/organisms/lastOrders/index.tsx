import { useState } from 'react';

import { messages } from '@/assets/messages';
import { useBillingAddress, useProfile } from '@/contexts';
import { AddressCard } from '@/features/profile/molecules/addressCard';
import { AddressSelectionModal } from '@/features/profile/molecules/addressModal';
import { ProfileSummarySection } from '@/features/profile/molecules/profileSummarySection';
import { getDefaultProfileAddress } from '@/utils/services/getDefaultProfileAddress';
import { useNavigations } from '@/utils/services/getNavigation';

import { AddressSummaryCards } from './style';

export const LastOrders = () => {
  const { profile } = useProfile();
  const { billingAddresses } = useBillingAddress();
  const { handleAddressesNavigation, handleBillingAddressesNavigation } = useNavigations();

  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const defaultBillingAddress = billingAddresses.find((a) => a.isDefault) ?? billingAddresses[0];

  if (!defaultAddress && !defaultBillingAddress) return null;

  return (
    <>
      <ProfileSummarySection
        actionLabel={messages.texts.viewAll}
        icon="location"
        onAction={() => setIsModalOpen(true)}
        title={messages.texts.addressess}
      >
        <AddressSummaryCards>
          {defaultAddress && (
            <AddressCard
              key={defaultAddress.id ?? `${defaultAddress.cep}-${defaultAddress.street}`}
              address={defaultAddress}
              profile={profile}
              isDefault
              hideActions
              hideDeliveryInstructions
            />
          )}
          {defaultBillingAddress && (
            <AddressCard
              key={defaultBillingAddress.id ?? 'billing-default'}
              address={{
                id: defaultBillingAddress.id ?? undefined,
                cep: defaultBillingAddress.cep ?? '',
                street: defaultBillingAddress.street ?? '',
                number: defaultBillingAddress.number ?? '',
                complement: defaultBillingAddress.complement ?? '',
                neighborhood: defaultBillingAddress.neighborhood ?? '',
                city: defaultBillingAddress.city ?? '',
                state: defaultBillingAddress.state ?? '',
                shortState: defaultBillingAddress.state ?? '',
                country: defaultBillingAddress.country ?? '',
                isDefault: true,
              }}
              profile={{
                firstName: defaultBillingAddress.name ?? '',
                lastName: '',
                telephone: defaultBillingAddress.telephone ?? '',
              }}
              isDefault
              hideActions
              hideDeliveryInstructions
              overrideLabel={messages.titles.billingAddress}
            />
          )}
        </AddressSummaryCards>
      </ProfileSummarySection>
      <AddressSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDeliveryAddressClick={handleAddressesNavigation}
        onBillingAddressClick={handleBillingAddressesNavigation}
      />
    </>
  );
};
