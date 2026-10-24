import styled from 'styled-components';

export const StyledNameAbbreviation = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary800};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    width: 100px;
    height: 100px;
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 80px;
    height: 80px;
    font-size: 32px;
  }
`;
