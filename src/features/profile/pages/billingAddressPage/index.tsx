import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { AddAddress } from '@/features/profile/molecules/addAddress';
import { BillingAddressCard } from '@/features/profile/organisms/billingAddressCard';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';
import { AddressesList, Divider, RegisterAddressesStyle, Teste } from './style';


export const BillingAddressPage = () => {
  const navigate = useNavigate();

  return (
    <Teste>
      <RegisterAddressesStyle>
        <Icon icon="wallet" size={7} color="primary600" />
        <Title isBold>{messages.titles.billingAddresses}</Title>
      </RegisterAddressesStyle>

      <Divider />
      <AddressesList>
        <AddAddress
          onClick={() => navigate('/profile/addBillingAddress')}
          title={messages.texts.addNewBillingAddress}
        />
        <BillingAddressCard />
      </AddressesList>
    </Teste>
  );
};
