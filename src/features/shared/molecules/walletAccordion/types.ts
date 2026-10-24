import type { IElement } from '@/types/props';

import type { ETransactionStatus } from '@/types/enum';

export type IWalletAccordionType =
  'default' | 'error' | 'canceled' | 'refunded' | 'pending' | 'success';

export type IWalletButtonBase = {
  title: string;
  type: IWalletAccordionType;
  value: string;
  transactionStatus: ETransactionStatus;
  to?: string;
  headerButton?: {
    onClick: () => void;
    label: string;
  };
  walletId?: string;
};

export type IWalletAccordion = IWalletButtonBase &
  IElement & {
    selectedWalletId?: string;
    isScreenMd: boolean;
  };

export interface IWalletAccordionWrapperProps {
  $borderColor?: string;
  $backgroundColor?: string;
  $isFocused?: boolean;
}
