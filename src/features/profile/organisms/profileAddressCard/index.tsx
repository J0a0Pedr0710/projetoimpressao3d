import { useNavigate } from 'react-router-dom';

import { useProfile } from '@/contexts';
import { AddAddress } from '@/features/profile/molecules/addAddress';
import { AddressCard } from '@/features/profile/molecules/addressCard';
import { ProfileAddressCardWrapper } from '@/features/profile/organisms/profileAddressCard/style';
import { sortAddresses } from '@/utils/services/getDefaultProfileAddress';

export const ProfileAddressCard = () => {
  const { profile, setDefaultAddress, removeAddress } = useProfile();
  const navigate = useNavigate();

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>, addressId?: string) => {
    const to = addressId ? `/profile/address/${addressId}` : '/profile/addAddress';
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

  const handleEdit = (addressId?: string) => {
    handleNavigation(undefined, addressId);
  };

  return (
    <ProfileAddressCardWrapper>
      <AddAddress
        onClick={() => handleNavigation(undefined, undefined)}
        title="Adicionar endereço"
      />
      {addresses.map((address, index) => {
        const isDefault = address.isDefault || addresses.length === 1;

        return (
          <AddressCard
            key={address.id ?? `${address.cep}-${address.street}-${index}`}
            address={address}
            profile={profile}
            isDefault={isDefault}
            onEdit={handleEdit}
            onDelete={handleRemove}
            onSetDefault={handleSetDefault}
          />
        );
      })}
    </ProfileAddressCardWrapper>
  );
};
