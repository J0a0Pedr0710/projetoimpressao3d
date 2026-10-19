import styled from 'styled-components';

export const LoginTemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LoginTemplateLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 100vw;

  height: calc(100vh - 66px);

  top: 66px;

  background: ${({ theme }) => theme.colors.neutral50};

  z-index: ${({ theme }) => theme.zIndex.loading};
`;
