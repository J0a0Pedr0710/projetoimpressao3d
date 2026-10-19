import styled from 'styled-components';

export const SignUpContainer = styled.form`
  padding: ${({ theme }) => theme.size[6]};
  padding-top: ${({ theme }) => theme.size[28]};
  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    width: 40%;
    margin: 0 auto;
  }
`;
