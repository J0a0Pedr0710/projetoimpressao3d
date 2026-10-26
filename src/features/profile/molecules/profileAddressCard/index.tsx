import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useProfile } from '@/contexts';
import { PersonInformation } from '@/features/profile/molecules/addressProfileInformation';
import {
  AddressCard,
  AddressCardActions,
  DefaultAddressLabel,
  DeleteWrapper,
  Divider,
  ProfileAddressCardWrapper,
  SetAsDefaultWrapper,
  ToAlterWrapepr,
} from '@/features/profile/molecules/profileAddressCard/styles';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { sortAddresses } from '@/utils/services/getDefaultProfileAddress';

export const ProfileAddressCard = () => {
  const { profile, setDefaultAddress, removeAddress } = useProfile();
  const { defaultAddress, defineDefaultAddress, exclude, toAlter } = messages.texts;
  const navigate = useNavigate();

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>, addressId?: string) => {
    const to = addressId ? `/profile/address/${addressId}` : '/profile/address';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

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

  const handleSetDefault = async (addressId: string) => {
    if (!addressId) return;
    await setDefaultAddress(addressId);
  };

  const handleRemove = async (addressId: string) => {
    if (!addressId) return;
    await removeAddress(addressId);
  };

  return (
    <ProfileAddressCardWrapper>
      {addresses.map((address, index) => {
        const isDefault = address.isDefault || addresses.length === 1;

        return (
          <AddressCard key={address.id ?? `${address.cep}-${address.street}-${index}`}>
            {isDefault && <DefaultAddressLabel>{defaultAddress}</DefaultAddressLabel>}

            <PersonInformation person={profile} address={address} />

            <GridItem>
              <AddressCardActions>
                <ToAlterWrapepr>
                  <button type="button" onClick={(e) => handleNavigation(e, address.id)}>
                    {toAlter}
                  </button>
                </ToAlterWrapepr>

                <Divider />

                <DeleteWrapper>
                  <button type="button" onClick={() => address.id && handleRemove(address.id)}>
                    {exclude}
                  </button>
                </DeleteWrapper>

                {!isDefault && (
                  <>
                    <Divider />
                    <SetAsDefaultWrapper>
                      <button
                        type="button"
                        onClick={() => address.id && handleSetDefault(address.id)}
                      >
                        {defineDefaultAddress}
                      </button>
                    </SetAsDefaultWrapper>
                  </>
                )}
              </AddressCardActions>
            </GridItem>
          </AddressCard>
        );
      })}
    </ProfileAddressCardWrapper>
  );
};
