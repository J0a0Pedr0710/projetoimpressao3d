import { type ChangeEvent, useRef } from 'react';

import { Code, Container } from '@/features/register/atoms/codeInput/style';
import type { ICodeInput } from '@/features/register/atoms/codeInput/types';
import { formatStringSize } from '@/utils/format/formatStringSize';

export const CodeInput = ({ length, onChange, value, error, ...props }: ICodeInput) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => inputRef.current?.focus();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatedValue = formatStringSize({ text: e.target.value, size: length });
    const event = { ...e, target: { ...e.target, value: formatedValue } };
    if (onChange) onChange(event);
  };

  return (
    <Container>
      {Array.from(Array(length).keys()).map((n) => (
        <Code onClick={focusInput} type="button" key={n} $error={error}>
          {value && value[n]}
        </Code>
      ))}

      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        maxLength={length}
        inputMode="numeric"
        autoComplete="one-time-code"
        {...props}
      />
    </Container>
  );
};
