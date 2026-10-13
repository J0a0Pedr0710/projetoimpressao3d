import styled from 'styled-components';

import type { IWalletButtonWrapperStyle } from './types';

export const ButtonWrapper = styled.div<IWalletButtonWrapperStyle>`
  border-radius: ${({ theme }) => theme.size[2]};
  border: ${({ $borderColor }) => $borderColor && `1px solid ${$borderColor}`};

  background: ${({ $backgroundColor }) => $backgroundColor && `1px solid ${$backgroundColor}`};

  padding: ${({ theme }) => `${theme.size[3]} ${theme.size[2]}`};
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: ${({ theme }) => theme.size[4]};
`;

export const ButtonSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[1.5]};
  min-width: 0;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    gap: ${({ theme }) => theme.size[2]};
  }
`;

export const ValueSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const IconWrapper = styled.div`
  align-self: center;
`;
