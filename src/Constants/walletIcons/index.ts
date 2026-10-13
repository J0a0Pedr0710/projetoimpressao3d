import { ETransactionStatus } from '@/types/enum';

export const walletIcons = {
  [ETransactionStatus.PAYMENT_CONFIRMED]: 'downloadSimple',
  [ETransactionStatus.PAYMENT_NOT_CONFIRMED]: 'upload',
  [ETransactionStatus.WAITING_PAYMENT]: 'wait',
  [ETransactionStatus.PAYMENT_CANCELLED]: 'paymentCancelled',
  [ETransactionStatus.PAYMENT_ERROR]: 'triangleExclamationFilled',
  [ETransactionStatus.REFUNDED]: 'paymentRefounded',
};
