import styled from 'styled-components';

import type { IFlagStyleComponent } from './types';

export const Img = styled.img<IFlagStyleComponent>`
  width: ${({ $size, theme }) => theme.size[$size]};
`;
