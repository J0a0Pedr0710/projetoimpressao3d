import { useState } from 'react';

import type { IWalletInput } from 'props';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp, useCart } from '@/contexts';
import { calculatorController } from '@/controllers/calculatorController';
import { formatFloat, formatIntegerToNumber } from '@/utils/format/formatInteger';

export const useWallet = (onClose: () => void) => {
  const [isLoadingWallet, setIsLoadingWallet] = useState(false);
  const [showMinimumValueError, setShowMinimumValueError] = useState(false);

  const { openAlert } = useApp();
  const { setCart } = useCart();
  const navigate = useNavigate();

  const { errorAddCreditWallet } = messages.error;
  const { successAddCreditWallet } = messages.success;

  const { control, handleSubmit, watch, setValue } = useForm<IWalletInput>({
    mode: 'onChange',
    defaultValues: { value: '' },
  });

  const value = watch('value');

  const numericValue = formatIntegerToNumber(value);
  const shouldShowError = showMinimumValueError && numericValue < 100;

  if (numericValue >= 100 && showMinimumValueError) {
    setShowMinimumValueError(false);
  }

  const onAddCreditWallet = handleSubmit((data) => {
    const numericValue = formatIntegerToNumber(data.value);
    if (numericValue < 100) {
      setShowMinimumValueError(true);
      return;
    }

    setIsLoadingWallet(true);
    calculatorController
      .addCreditWallet(numericValue)
      .then((response) => {
        setCart(response.cart);
        openAlert(successAddCreditWallet, 'success');
        navigate('/cart');
        onClose();
      })
      .catch((error) => {
        onClose();
        openAlert(error ?? errorAddCreditWallet, 'error');
      })
      .finally(() => {
        setIsLoadingWallet(false);
      });
  });

  return {
    control,
    value,
    setValue,
    onAddCreditWallet,
    isLoadingWallet,
    isValid: value.trim() !== '',
    formatFloat,
    shouldShowError,
  };
};
