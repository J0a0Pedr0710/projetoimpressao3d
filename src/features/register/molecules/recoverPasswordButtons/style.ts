import styled from 'styled-components';

export const OptionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: ${({ theme }) => theme.size[2]};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;
