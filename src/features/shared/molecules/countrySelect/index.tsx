import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { countryOptions } from '@/features/shared/molecules/countryOptions';
import { Select } from '@/features/shared/molecules/select';
import { advancedInclude } from '@/utils/services/advancedInclude';

import type { ICountrySelect } from './types';

export const CountrySelect = ({
  onChange,
  value,
  width,
  message,
  label,
  placeholder,
  ...props
}: ICountrySelect) => {
  const { isScreenSm } = useApp();
  const { country: countryLabel } = messages.label;
  return (
    <Select
      {...props}
      label={label || countryLabel}
      width={width || (isScreenSm ? 'full' : undefined)}
      message={message}
      value={value}
      options={countryOptions}
      onChange={onChange}
      placeholder={placeholder}
      isRequired
      filterOption={(option, inputValue) => {
        if (typeof option.label !== 'string' && typeof option.label !== 'number') {
          if (advancedInclude({ value: option.label.props.children[1], search: inputValue })) {
            return true;
          }
        }
        return false;
      }}
    />
  );
};
