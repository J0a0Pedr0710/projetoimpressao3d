import styled from 'styled-components';

import type { IGetBottomBorderRadius, IStyleChip } from './types';

const getTopBorderRadius = ({ theme, $isAttached }: IGetBottomBorderRadius) => {
  if ($isAttached) return 0;
  return theme.size[5];
};

const getBottomBorderRadius = ({ theme, $isAttached }: IGetBottomBorderRadius) => {
  if ($isAttached) return theme.size[1];
  return theme.size[5];
};

export const StyleChip = styled.div<IStyleChip>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.size[5]};
  padding: ${({ theme }) => theme.size[3.5]} ${({ theme }) => theme.size[2]};

  border-top-left-radius: ${getTopBorderRadius};
  border-top-right-radius: ${getTopBorderRadius};
  border-bottom-left-radius: ${getBottomBorderRadius};
  border-bottom-right-radius: ${getBottomBorderRadius};
  background: ${({ $backgroundColor, theme }) => theme.colors[$backgroundColor]};
  border: 1px solid ${({ $borderColor, theme }) => theme.colors[$borderColor]};
  white-space: nowrap;

  @media (max-width: 400px) {
    display: none;
  }
`;
