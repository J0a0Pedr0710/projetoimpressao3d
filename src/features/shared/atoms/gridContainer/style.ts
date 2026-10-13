import styled from 'styled-components';

import type { IStyleGrid } from './types';

export const StyledGrid = styled.div<IStyleGrid>`
  display: grid;
  grid-template-columns: repeat(${({ $size }) => $size}, 1fr);
  gap: ${({ $spacing, theme }) => theme.size[$spacing]};
`;
