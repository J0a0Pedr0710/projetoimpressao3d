import styled from 'styled-components';

export const TopBarMenuWrapper = styled.header`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;

  width: ${({ theme }) => theme.size.fullw};
  height: 65px;
  padding: 0 ${({ theme }) => theme.size[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral50};

  & #menu {
    display: flex;

    @media (min-width: ${({ theme }) => theme.screen.xs}) {
      display: none;
    }
  }

  button {
    width: fit-content;
    height: fit-content;
  }

  img {
    width: 103.73px;
  }

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    width: 40vw;
    padding: ${({ theme }) => theme.size[4]};

    border: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
