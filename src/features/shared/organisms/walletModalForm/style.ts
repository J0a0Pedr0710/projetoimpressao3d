import styled from 'styled-components';

export const WalletModalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[4]};

  background: ${({ theme }) => theme.colors.neutral50};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};

  padding: ${({ theme }) => theme.size[6]};
  width: 21.875rem;

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    width: 27.5rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    width: 35.75rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[4]};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    padding: 0 ${({ theme }) => theme.size[4]};
  }
  z-index: ${({ theme }) => theme.zIndex.high};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }

  gap: ${({ theme }) => theme.size[2]};
  z-index: ${({ theme }) => theme.zIndex.medium};
`;
