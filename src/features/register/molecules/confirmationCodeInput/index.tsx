import type { ChangeEvent } from 'react';

import { CodeInput } from '@/features/register/atoms/codeInput';
import { ErrorMessage } from '@/features/register/atoms/errorMessage';
import { Wrapper } from '@/features/register/molecules/confirmationCodeInput/style';
import type { IConfirmationCodeInput } from '@/features/register/molecules/confirmationCodeInput/types';
import { formatStringSize } from '@/utils/format/formatStringSize';

export const ConfirmationCodeInput = ({
  length,
  onChange,
  value,
  error,
  errorMessage,
}: IConfirmationCodeInput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatedValue = formatStringSize({ text: e.target.value, size: length });
    const event = { ...e, target: { ...e.target, value: formatedValue } };
    if (onChange) onChange(event);
  };
  return (
    <Wrapper>
      <CodeInput length={length} value={value} onChange={handleChange} error={error || false} />
      {errorMessage && <ErrorMessage error={!!error} errorMessage={errorMessage || ''} />}
    </Wrapper>
  );
};
