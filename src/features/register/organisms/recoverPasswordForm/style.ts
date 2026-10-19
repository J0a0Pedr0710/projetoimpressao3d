import styled from 'styled-components';

export const RecoverPasswordContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: calc(80vh - 66px);

  gap: ${({ theme }) => theme.size[4]};
  width: 40%;
  justify-items: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 90%;
    padding-top: ${({ theme }) => theme.size[14]};
  }
`;
