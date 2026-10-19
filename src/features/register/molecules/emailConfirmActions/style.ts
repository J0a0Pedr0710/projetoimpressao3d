import styled from 'styled-components';

export const OptionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: ${({ theme }) => theme.size[4]};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const BackButton = styled.div`
  width: 55%;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 90%;
  }
`;

export const SubmitButton = styled.div`
  width: 100%;

  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 90%;
  }
`;
