import styled from 'styled-components';

import type { IMainTemplateContentStyle } from './types';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div<IMainTemplateContentStyle>`
  padding: 4.5rem 1rem 2.5rem 1rem;

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    padding-top: ${({ $hideBreadCrumb }) => ($hideBreadCrumb ? '4rem' : '5.5rem')};
    padding-bottom: 0;
    padding-right: 2rem;

    padding-left: ${({ $isSideBarOpen }) =>
      $isSideBarOpen ? `calc(12.852rem + 2rem)` : `calc(3.6rem + 2rem)`};
  }

  min-height: calc(100vh - 4.125rem);
  z-index: ${({ theme }) => theme.zIndex.lower};
`;

export const Page = styled.div`
  padding: 1rem 0 2.5rem 0;

  min-height: calc(100vh - 147.6px);

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    padding: 1rem 0;
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 100vw;
  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    width: calc(100vw - ${({ theme }) => theme.size[16]});
    left: ${({ theme }) => theme.size[16]};
  }
  height: calc(100vh - 66px);

  top: 66px;

  background: ${({ theme }) => theme.colors.neutral50};

  z-index: ${({ theme }) => theme.zIndex.loading};
`;
