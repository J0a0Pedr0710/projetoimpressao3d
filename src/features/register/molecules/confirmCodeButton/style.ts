import styled from 'styled-components';

export const ConfirmButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[4]};
  width: 324px;
`;
