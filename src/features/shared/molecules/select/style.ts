import type { CSSObjectWithLabel, StylesConfig } from 'react-select';
import type { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components';
import type { ISizesKeys } from 'theme';

import type { ISelectOption } from '@/features/shared/molecules/select/types';
import { SkeletonCss } from '@/styles/animations/skeleton/style';

import type { IStyleSelectContainer, IStyleSelectContent } from './types';

export const Container = styled.div<IStyleSelectContainer>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${({ $width, theme }) => theme.size[$width]};

  gap: ${({ theme }) => theme.size[0.5]};

  #select-content {
    z-index: ${({ theme }) => theme.zIndex.xhigh};
    width: 100%;
  }
`;

export const SelectContent = styled.div<IStyleSelectContent>`
  width: 100%;
  overflow: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
  ${({ $isLoading, $isScreenSm, theme }) =>
    $isLoading &&
    css`
      border-radius: ${theme.size[1]};
      height: ${$isScreenSm ? theme.size[11] : theme.size[9]};
      ${SkeletonCss(theme)}
    `}
`;

export const customStyles = (
  theme: DefaultTheme,
  isScreenSm: boolean,
  width: ISizesKeys,
  error: boolean,
  isLoading = false,
): StylesConfig<ISelectOption, false> => {
  const fontStyle: CSSObjectWithLabel = {
    color: theme.colors.neutral900,
    fontFamily: '"Source Sans 3", serif',
    fontOpticalSizing: 'auto',
    fontStyle: 'normal',
    fontSize: theme.size[4],
    lineHeight: isScreenSm ? '24px' : '21.6px',
  };
  return {
    control: (_, { isFocused, isDisabled }) => ({
      ...fontStyle,
      display: 'flex',
      alignItems: 'center',

      background: isDisabled ? theme.colors.disabledLight : theme.colors.neutral50,
      color: theme.colors.neutral500,

      border: isFocused ? '2px solid' : '1px solid',
      borderColor: isFocused ? theme.colors.primary500 : theme.colors.neutral500,
      borderRadius: theme.size[1],

      outline: error ? '2px' : '0',
      outlineStyle: error ? 'solid' : 'none',
      outlineOffset: theme.size['0.5'],
      outlineColor: theme.colors['error'],

      width: theme.size[width],
      height: isScreenSm ? theme.size[11] : theme.size[9],
      boxShadow: `0 0 0 0.5px ${theme.colors.neutral500}`,
      marginTop: isScreenSm ? 0 : theme.size[2],
      cursor: isDisabled ? 'not-allowed' : 'pointer',

      '&:hover': {
        borderColor: 'transparent',
        outlineColor: isDisabled || isLoading ? theme.colors.neutral500 : theme.colors.primary500,
        outlineWidth: isDisabled || isLoading ? '0' : '2px',
        boxShadow:
          isDisabled || isLoading
            ? `0 0 0 2px ${theme.colors.neutral500}`
            : `0 0 0 2px ${theme.colors.primary500}`,
      },
    }),

    indicatorsContainer: () => ({
      border: 'none',
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      color: theme.colors.neutral500,
      display: state.hasValue && state.selectProps.isClearable ? 'none' : 'flex',
    }),

    option: (_, { isFocused }) => ({
      ...fontStyle,
      backgroundColor: isFocused ? theme.colors.neutral100 : theme.colors.neutral50,
      padding: theme.size[3],
      cursor: 'pointer',
    }),

    clearIndicator: (base, state) => ({
      ...base,
      color: theme.colors.neutral500,
      display: state.hasValue ? 'flex' : 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.colors.primary500,
      },
    }),

    menu: (base) => ({
      ...base,
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid',
      borderRadius: theme.size[1],
      boxShadow: theme.shadow[2],
    }),
  };
};
