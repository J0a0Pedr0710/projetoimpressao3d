import styled from 'styled-components';

export const MyDataInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.size[4]};

  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  border-radius: ${({ theme }) => theme.size[2]};
  width: 100%;
  min-height: 1rem;

  box-shadow: ${({ theme }) => theme.shadow[1]};

  padding: ${({ theme }) => theme.size[4]};
  padding-top: ${({ theme }) => theme.size[8]};
  position: relative;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: calc(50% - ${({ theme }) => theme.size[3]});
  }

  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    width: calc(33.333% - ${({ theme }) => theme.size[3]});
  }

  @media (min-width: ${({ theme }) => theme.screen.xl2}) {
    width: calc(25% - ${({ theme }) => theme.size[3]});
  }
`;
