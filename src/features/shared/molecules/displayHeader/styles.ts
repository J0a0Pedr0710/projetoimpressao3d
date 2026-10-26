import styled from 'styled-components';

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.size.full};
  gap: ${({ theme }) => theme.size[4]};

  padding-bottom: ${({ theme }) => theme.size[2]};
  z-index: ${({ theme }) => theme.zIndex.xhigh};

  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral500};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${({ theme }) => theme.size[4]};
  }

  .input-and-button {
    display: flex;
    align-items: end;
    gap: ${({ theme }) => theme.size[2]};
  }
`;
