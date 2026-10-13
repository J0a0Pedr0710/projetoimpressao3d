import styled from 'styled-components';

export const Container = styled.footer`
  display: none;

  flex-direction: column;
  align-items: start;

  width: ${({ theme }) => theme.size.full};
  padding: ${({ theme }) => theme.size[4]};
  padding-left: ${({ theme }) => theme.size[16]};

  background: ${({ theme }) => theme.colors.neutral50};
  border-top: 2px solid ${({ theme }) => theme.colors.neutral200};

  z-index: ${({ theme }) => theme.zIndex.xhigh};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    display: flex;
  }
`;
