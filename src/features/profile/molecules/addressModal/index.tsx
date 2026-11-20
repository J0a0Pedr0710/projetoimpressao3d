import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Modal } from '@/features/shared/atoms/modal';
import { Title } from '@/features/shared/atoms/title';

import { CloseButton, Content, Footer, Header, Wrapper } from './style';
import type { IAddressSelectionModal } from './types';

export const AddressSelectionModal = ({
  isOpen,
  onClose,
  onDeliveryAddressClick,
  onBillingAddressClick,
}: IAddressSelectionModal) => {
  const { cancel, selectAddress } = messages.texts;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <Header>
          <Title size="2xl" isBold>
            {messages.titles.addressess}
          </Title>
          <CloseButton onClick={onClose}>
            <Icon icon="x" color="neutral900" />
          </CloseButton>
        </Header>

        <Content>{selectAddress}</Content>

        <Footer>
          <Button variant="secondary" onClick={onClose} >
            {cancel}
          </Button>
          <Button onClick={onDeliveryAddressClick} >
            {messages.titles.deliveryAddress}
          </Button>
          <Button onClick={onBillingAddressClick} >
            {messages.titles.billingAddress}
          </Button>
        </Footer>
      </Wrapper>
    </Modal>
  );
};
