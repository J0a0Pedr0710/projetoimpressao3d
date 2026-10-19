import styled from 'styled-components';

export const ContainerData = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[6]};
  width: 70%;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    margin: 0 auto;
    width: 90%;
  }
  .accessTitle {
    margin-top: 80px;
  }
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.size[2]};
  .accessTitle {
    margin-top: 80px;
  }
`;

export const LoginButtonsWrapper = styled(ForgotPasswordWrapper)`
  width: 100%;
  gap: ${({ theme }) => theme.size[4]};
`;
