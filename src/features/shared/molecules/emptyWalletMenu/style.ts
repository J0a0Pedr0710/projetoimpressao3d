import styled from 'styled-components';

export const EmptyWalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20rem;

  height: 15rem;

  button {
    min-height: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    height: 20rem;
  }

  gap: ${({ theme }) => theme.size[2]};

  .middleText {
    width: 30rem;
    text-align: center;

    width: 215px;

    @media (min-width: ${({ theme }) => theme.screen.xxs}) {
      width: 300px;
    }
    @media (min-width: ${({ theme }) => theme.screen.xs}) {
      width: 480px;
    }
    @media (min-width: ${({ theme }) => theme.screen.lg}) {
      width: 30rem;
    }
  }
`;
