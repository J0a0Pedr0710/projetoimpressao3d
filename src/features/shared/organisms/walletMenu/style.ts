import styled from 'styled-components';

import type { IWalletStyled } from './types';

export const WalletMenuButtonWrapper = styled.div<IWalletStyled>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[2]};

  cursor: pointer;

  .price {
    margin-top: 2px;
  }

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.neutral100};
  }

  padding: ${({ theme }) => theme.size[1.5]};

  border-radius: ${({ theme }) => theme.size[1]};
  border: ${({ $isOpen, theme }) => ($isOpen ? `2px solid ${theme.colors.blue700}` : 'none')};
`;

export const WalletMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: ${({ theme }) => theme.size[2]};
  padding: ${({ theme }) => theme.size[4]};

  background: ${({ theme }) => theme.colors.neutral50};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};

  margin-left: -1.2rem;
  margin-bottom: 1rem;

  width: 90vw;

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    width: 85vw;
    margin-bottom: 0;
    margin-top: 0.5rem;
    margin-left: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    width: 724px;
    margin-left: 0rem;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  gap: ${({ theme }) => theme.size[2]};
  padding: ${({ theme }) => theme.size[2]};
  border-radius: ${({ theme }) => theme.size[2]};

  background: ${({ theme }) => theme.colors.neutral100};
`;
