import styled from 'styled-components';

export const RecoverPassContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 66px);
  width: 488px;

  gap: ${({ theme }) => theme.size[8]};
  width: 40%;

  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 90%;
  }
`;

export const CancelWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.size[2]};
`;

export const RecoverPasswordWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.size[4]};
`;

export const ActionsButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column-reverse;
  }
`;
