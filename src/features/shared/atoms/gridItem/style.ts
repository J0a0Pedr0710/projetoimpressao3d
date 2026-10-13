import styled from 'styled-components';

import type { IStyleGridItem } from './types';

export const StyledGridItem = styled.div<IStyleGridItem>`
  display: ${({ $cols }) => ($cols === 0 ? 'none' : 'flex')};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-direction: ${({ $direction }) => $direction};

  grid-column: span ${({ $cols }) => $cols};
  grid-row: span ${({ $rows }) => $rows};

  gap: ${({ $spacing, theme }) => theme.size[$spacing]};

  z-index: ${({ $zIndex }) => $zIndex};
`;
