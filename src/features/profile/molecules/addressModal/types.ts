import type { MouseEventHandler } from 'react';

export type IAddressSelectionModal = {
  isOpen: boolean;
  onClose: () => void;
  onDeliveryAddressClick: MouseEventHandler<HTMLButtonElement>;
  onBillingAddressClick: MouseEventHandler<HTMLButtonElement>;
};
