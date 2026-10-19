import { useEffect, useState } from 'react';

import ReactSelect from 'react-select';
import { useTheme } from 'styled-components';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';

import { Container, SelectContent, customStyles } from './style';
import type { ISelect } from './types';

export const Select = ({
  defaultValue,
  options,
  onChange,
  width,
  value,
  placeholder,
  label,
  isRequired,
  helperText,
  message,
  filterOption,
  placement = 'auto',
  disabled,
  id,
  isSearchable = true,
  isClearable = false,
  isLoading = false,
  allowContextSkeleton = true,
  useMenuPortal = false,
}: ISelect) => {
  const { isScreenSm, isScreenXs, loading } = useApp();
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);

  const theme = useTheme();

  const contextIsLoading = loading && allowContextSkeleton;
  const showSkeleton = isLoading || contextIsLoading;

  const style = customStyles(theme, isScreenSm, width ?? 80, !!message, showSkeleton);

  const defaultOption = options.find((o) => o.value === defaultValue);

  const { noOptions } = messages.texts;

  useEffect(() => {
    if (useMenuPortal) {
      setMenuPortalTarget(document.body);
    }
  }, [useMenuPortal]);

  return (
    <Container $width={width ?? 80}>
      {label && (
        <>
          <Text isBold size={isScreenXs ? 'md' : 'sm'} isLoading={showSkeleton}>
            {label}
            {isRequired && (
              <Text isBold textColor="error" size={isScreenXs ? 'md' : 'sm'}>
                *
              </Text>
            )}
          </Text>
        </>
      )}
      {helperText && <Text>{helperText}</Text>}
      <SelectContent id="select-content" $isLoading={showSkeleton} $isScreenSm={isScreenSm}>
        <ReactSelect
          id={id}
          defaultValue={defaultOption}
          options={options}
          onChange={onChange}
          value={options.find((option) => option.value === value)}
          styles={{
            ...style,
            ...(useMenuPortal && {
              menuPortal: (base) => ({
                ...base,
                zIndex: theme.zIndex.dropdownPortal,
              }),
            }),
          }}
          placeholder={placeholder}
          filterOption={filterOption}
          menuPlacement={placement}
          {...(useMenuPortal && {
            menuPortalTarget,
            menuShouldScrollIntoView: false,
          })}
          isDisabled={disabled || showSkeleton}
          isSearchable={isSearchable}
          isClearable={isClearable}
          noOptionsMessage={() => noOptions}
        />
      </SelectContent>
      {message && (
        <Text textColor={'error'}>
          <Icon icon="alertErrorBadge" color="error" size={4} />
          {message}
        </Text>
      )}
    </Container>
  );
};
