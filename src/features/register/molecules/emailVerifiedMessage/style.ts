import styled from 'styled-components';

export const VerifiedSuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 488px;
  gap: ${({ theme }) => theme.size[2]};
  margin: 0 auto;

  justify-items: center;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }
`;
