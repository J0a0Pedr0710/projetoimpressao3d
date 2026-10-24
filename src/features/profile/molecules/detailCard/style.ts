import styled from 'styled-components';

import type { IDetailCardWrapperProps } from './types';

export const DetailCardWrapper = styled.div<IDetailCardWrapperProps>`
  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  border-radius: ${({ theme }) => theme.size[2]};
  width: 100%;
  height: 100%;

  box-shadow: ${({ theme }) => theme.shadow[1]};

  padding: ${({ theme, $noPadding }) => theme.size[$noPadding ? 0 : 4]};
  gap: ${({ theme }) => theme.size[4]};

  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    padding: ${({ theme, $noPadding }) => theme.size[$noPadding ? 0 : 6]};
  }
`;

export const DetailCardHeader = styled.div<IDetailCardWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.size[2]};

  padding: ${({ theme, $noPadding }) => theme.size[$noPadding ? 4 : 0]};
  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    padding: ${({ theme, $noPadding }) => theme.size[$noPadding ? 6 : 0]};
  }
`;
