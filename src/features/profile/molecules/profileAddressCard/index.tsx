import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useProfile } from '@/contexts';
import { PersonInformation } from '@/features/profile/molecules/addressProfileInformation';
import { DetailCard } from '@/features/profile/molecules/detailCard';
import {
  AddressCard,
  AddressCardActions,
  DefaultAddressLabel,
  DeleteWrapper,
  ProfileAddressCardWrapper,
  SetAsDefaultWrapper,
  ToAlterWrapepr,
} from '@/features/profile/molecules/profileAddressCard/styles';
import { GridItem } from '@/features/shared/molecules/gridItem';

export const ProfileAddressCard = () => {
  const { profile } = useProfile();
  const { defaultAddressTitle } = messages.titles;
  const { defaultAddress, defineDefaultAddress, exclude, toAlter } = messages.texts;
  const navigate = useNavigate();

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/profile/address';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

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

  return (
    <DetailCard title={defaultAddressTitle}>
      <ProfileAddressCardWrapper>
        {addresses.map((address, index) => {
          const isDefault = address.isDefault || addresses.length === 1;

          return (
            <AddressCard key={address.id ?? `${address.cep}-${address.street}-${index}`}>
              <PersonInformation person={profile} address={address} />
              <AddressCardActions>
                {isDefault ? (
                  <DefaultAddressLabel>{defaultAddress}</DefaultAddressLabel>
                ) : (
                  <SetAsDefaultWrapper>
                    <button type="button">{defineDefaultAddress}</button>
                  </SetAsDefaultWrapper>
                )}
              </AddressCardActions>
            </AddressCard>
          );
        })}
      </ProfileAddressCardWrapper>

      <GridItem>
        <ToAlterWrapepr>
          <button type="button" onClick={handleNavigation}>
            {toAlter}
          </button>
        </ToAlterWrapepr>
      </GridItem>

      <GridItem>
        <DeleteWrapper>
          <button>{exclude}</button>
        </DeleteWrapper>
      </GridItem>
    </DetailCard>
  );
};
