import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[6]};
  background: ${({ theme }) => theme.colors.neutral50};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  padding: ${({ theme }) => theme.size[6]};

  width: 90vw;

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    width: 25.875rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    width: 40.725rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 50.875rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[3]};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[2]};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.size[1]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
