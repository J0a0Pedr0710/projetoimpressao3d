import styled from 'styled-components';

export const ConfirmEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 66px);
  width: 488px;

  gap: ${({ theme }) => theme.size[2]};

  justify-items: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[4]};
  width: 324px;
`;
