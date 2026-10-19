import styled from 'styled-components';

export const VerifiedSuccessContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 66px);
  width: 488px;
  gap: ${({ theme }) => theme.size[2]};
  margin: 0 auto;

  justify-items: center;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
    padding: ${({ theme }) => theme.size[4]};
  }
`;
