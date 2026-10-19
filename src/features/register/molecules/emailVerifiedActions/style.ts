import styled from 'styled-components';

export const AccessButton = styled.div`
  display: flex;
  width: 70%;

  gap: ${({ theme }) => theme.size[4]};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: flex;
    width: 90%;
    flex-direction: column-reverse;
  }
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
