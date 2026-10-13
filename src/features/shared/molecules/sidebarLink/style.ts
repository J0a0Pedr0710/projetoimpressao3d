import styled from 'styled-components';

import type { IStyleSidebarButton } from './types';

export const StyleSidebarButton = styled.button<IStyleSidebarButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.3rem 0.5rem;
  width: 100%;
  pointer-events: ${({ $isActive }) => ($isActive ? 'none' : 'auto')};
  cursor: pointer;
`;

export const IconWrapper = styled.div<IStyleSidebarButton>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'start' : 'center')};

  padding: ${({ $isOpen }) => ($isOpen ? '0 0.6rem' : '0')};
  width: ${({ $isOpen }) => ($isOpen ? '12.8rem' : '40px')};
  height: 40px;
  gap: ${({ theme }) => theme.size[2]};

  border: ${({ $isActive, theme }) => ($isActive ? `2px solid ${theme.colors.blue800}` : '')};
  border-radius: 4px;
`;
