import type { ETransactionStatus } from '@/types/enum';
import type { IElement } from '@/types/props';

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

export type IWalletAccordionWrapperProps = {
  $borderColor?: string;
  $backgroundColor?: string;
  $isFocused?: boolean;
};
