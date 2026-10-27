import styled from 'styled-components';

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: ${({ theme }) => theme.size[2]};
`;
