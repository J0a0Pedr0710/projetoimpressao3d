import styled from 'styled-components';

export const AddressSummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: ${({ theme }) => theme.size[3]};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
