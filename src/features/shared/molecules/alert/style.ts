import styled from 'styled-components';

import type { IStyleAlert } from './types';

export const AlertStyle = styled.div<IStyleAlert>`
  display: flex;
  flex-direction: flex;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.size[2]};

  width: ${({ $isFullWitdh }) => ($isFullWitdh ? '100%' : 'fit-content')};

  background: ${({ theme, $type }) => theme.colors[`${$type}Light`]};
  border: 1px solid ${({ theme, $type }) => theme.colors[$type]};
  padding: ${({ theme }) => theme.size[3]};
  box-shadow: ${({ theme }) => theme.shadow[2]};
`;

export const Content = styled.div`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.size[4]};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    gap: ${({ theme }) => theme.size[2]};
    align-items: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.size[4]};
  justify-content: center;
  gap: ${({ theme }) => theme.size[2]};
`;
