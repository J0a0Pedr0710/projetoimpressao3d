import styled from 'styled-components';

export const StyledBannerImg = styled.img`
  margin-top: 66px;
  height: 90vh;
  border-radius: ${({ theme }) => theme.size[2]};
  @media (max-width: ${({ theme }) => theme.screen.lg}) {
    width: 100%;
    height: auto;
  }
`;
