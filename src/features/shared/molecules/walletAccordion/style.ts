import styled, { css } from 'styled-components';

import type { IWalletAccordionWrapperProps } from './types';

export const WalletAccordionWrapper = styled.div<IWalletAccordionWrapperProps>`
  border-radius: ${({ theme }) => theme.size[2]};
  border: ${({ $borderColor }) => $borderColor && `1px solid ${$borderColor}`};

  background: ${({ $backgroundColor }) => $backgroundColor};

  padding: ${({ theme }) => `${theme.size[3]} ${theme.size[2]}`};

  width: 100%;

  ${({ $isFocused }) =>
    $isFocused &&
    css`
      outline: 2px solid ${({ theme }) => theme.colors.primary500};
      outline-offset: 2px;
    `}
`;

export const WalletAccordionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  cursor: pointer;

  gap: ${({ theme }) => theme.size[4]};
`;

export const WalletAccordionHeaderSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[4]};

  .headerButton {
    height: 2rem;
  }

  &.first {
    display: flex;
  }
`;

export const WalletAccordionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[2]};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.size[4]};
  }
`;

export const WalletAccordionIconWrapper = styled.div`
  align-self: center;
`;
