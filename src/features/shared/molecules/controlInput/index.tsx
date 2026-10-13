import type { ChangeEvent, FocusEvent } from 'react';

import { Controller } from 'react-hook-form';

import { Input } from '@/features/shared/molecules/input';

import type { IControlInput } from './types';

export const ControlInput = ({
  control,
  name,
  errorMessage,
  prefix,
  onBlur,
  onChange,
  maxLength,
  showCounter,
  placeholderPosition,
  ...props
}: IControlInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onBlur: renderOnBlur, onChange: renderOnChange, value } }) => {
        const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
          renderOnBlur();
          if (onBlur) onBlur(e);
        };

        const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
          renderOnChange(e);
          if (onChange) onChange(e);
        };

        const currentLen =
          typeof value === 'string' ? value.length : value != null ? String(value).length : 0;

        const computedMessage: string | undefined =
          errorMessage ?? (showCounter && maxLength ? `${currentLen}/${maxLength}` : undefined);

        return (
          <Input
            message={computedMessage}
            data-testid={`${name}-controll-input`}
            status={errorMessage ? 'error' : 'default'}
            placeholderPosition={placeholderPosition}
            {...props}
            name={name}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            value={value ?? ''}
            prefix={prefix}
            maxLength={maxLength}
          />
        );
      }}
    />
  );
};
