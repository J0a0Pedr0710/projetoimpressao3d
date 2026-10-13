import styled from 'styled-components';

export const WalletFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: ${({ theme }) => theme.size[2]};

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.size[2]};
  width: 100%;
  .fullBtn {
    width: 100%;
    min-height: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    width: auto;
    .fullBtn {
      width: auto;
    }
  }
`;
