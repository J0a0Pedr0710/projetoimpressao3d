import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.size.fullw};
  height: 66px;

  position: fixed;
  z-index: 20;

  background: ${({ theme }) => theme.colors.neutral50};

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    flex-direction: row;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  }
`;

export const UserSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.size[4]};
  padding: ${({ theme }) => theme.size[2]} ${({ theme }) => theme.size[4]};
  position: fixed;
  bottom: 0;

  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral50};
  width: ${({ theme }) => theme.size.fullw};

  img {
    height: ${({ theme }) => theme.size[6]};

    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: 100%;
  }

  button {
    width: fit-content;
    height: fit-content;
  }

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    justify-content: end;

    padding: ${({ theme }) => theme.size[4]};
    height: ${({ theme }) => theme.size[8]};
    width: 60vw;

    position: relative;
    border: none;
  }

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    gap: ${({ theme }) => theme.size[5]};
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: ${({ theme }) => theme.size[10]};

  background: ${({ theme }) => theme.colors.neutral500};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    height: ${({ theme }) => theme.size[8]};
    background: ${({ theme }) => theme.colors.neutral200};
  }
`;
