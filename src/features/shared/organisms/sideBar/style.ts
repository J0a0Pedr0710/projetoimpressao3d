import styled from 'styled-components';

import type { ISidebarStyle } from './types';

export const Container = styled.aside<ISidebarStyle>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;

  height: ${({ theme }) => theme.size.fullh};

  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.neutral50};
  border-right: 2px solid ${({ theme }) => theme.colors.neutral200};
  box-shadow: ${({ theme }) => theme.shadow[1]};

  .space {
    height: 100%;
  }

  .offButton {
    display: flex;
    align-items: center;
    justify-content: start;

    height: fit-content;
    width: 100%;
    padding: ${({ theme }) => theme.size[4]};

    text-decoration: none;

    gap: ${({ theme }) => theme.size[2]};

    &:hover {
      background: ${({ theme }) => theme.colors.neutral100};
    }
  }

  .sideText {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }

  .switchSidebar {
    display: flex;
    align-items: center;
    justify-content: end;

    height: fit-content;
    padding: ${({ theme }) => theme.size[4]};

    text-decoration: none;

    gap: ${({ theme }) => theme.size[2]};

    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral200};
    background: ${({ theme }) => theme.colors.neutral100};

    &:hover {
      background: ${({ theme }) => theme.colors.neutral200};
    }
  }
  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    display: flex;

    top: 66px;
    left: 0;
    height: calc(${({ theme }) => theme.size.fullh} - 66px);
  }
`;

export const Overflow = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  background: #4a445852;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  z-index: ${({ theme }) => theme.zIndex.layout};
`;
