import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { AddAddress } from '@/features/profile/molecules/addAddress';
import { ProfileAddressCard } from '@/features/profile/organisms/profileAddressCard';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import { AddressesList, Divider, RegisterAddressesStyle, Teste } from './style';

export const RegisterAddresses = () => {
  const { registeredAddresses } = messages.titles;

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>, addressId?: string) => {
    const to = addressId ? `/profile/address/${addressId}` : '/profile/addAddress';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  const navigate = useNavigate();

  return (
    <Teste>
      <RegisterAddressesStyle>
        <Icon icon="location" size={7} color="primary600" />
        <Title isBold>{registeredAddresses}</Title>
      </RegisterAddressesStyle>

      <Divider />
      <AddressesList>
        <AddAddress
          onClick={() => handleNavigation(undefined, undefined)}
          title="Adicionar endereço"
        />
        <ProfileAddressCard />
      </AddressesList>
    </Teste>
  );
};
