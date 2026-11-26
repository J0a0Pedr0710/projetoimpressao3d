import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Modal } from '@/features/shared/atoms/modal';
import { Title } from '@/features/shared/atoms/title';

import {
  ConfirmDeleteCloseButton,
  ConfirmDeleteContent,
  ConfirmDeleteFooter,
  ConfirmDeleteHeader,
  ConfirmDeleteWrapper,
} from './style';
import type { IConfirmDeleteModal } from './types';

export const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, title, message }: IConfirmDeleteModal) => {
  const { cancel, confirmDeleteAddress, confirmDeleteAddressMessage } = messages.texts;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ConfirmDeleteWrapper>
        <ConfirmDeleteHeader>
          <Title size="2xl" isBold>
            {title ?? confirmDeleteAddress}
          </Title>
          <ConfirmDeleteCloseButton onClick={onClose}>
            <Icon icon="x" color="neutral900" />
          </ConfirmDeleteCloseButton>
        </ConfirmDeleteHeader>

        <ConfirmDeleteContent>{message ?? confirmDeleteAddressMessage}</ConfirmDeleteContent>

        <ConfirmDeleteFooter>
          <Button variant="secondary" onClick={onClose} >
            {cancel}
          </Button>
          <Button onClick={onConfirm} >
            {messages.texts.exclude}
          </Button>
        </ConfirmDeleteFooter>
      </ConfirmDeleteWrapper>
    </Modal>
  );
};
