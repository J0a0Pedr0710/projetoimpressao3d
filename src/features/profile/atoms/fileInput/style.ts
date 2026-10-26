import styled from 'styled-components';

import type { GetImageIconSVG } from '@/features/profile/atoms/fileInput/types';

const getImageIconSVG: GetImageIconSVG = (color) => {
  const svgContent = ` <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 16 16">
      <path fill="${color}" d="M2 2C1.4375 2 1 2.46875 1 3V10.3125L3.09375 8.1875C3.59375 7.71875 4.375 7.71875 4.875 8.1875L7 10.3125L11.0938 6.1875C11.5938 5.71875 12.375 5.71875 12.875 6.1875L15 8.3125V3C15 2.46875 14.5312 2 14 2H2ZM1 11.7188V13C1 13.5625 1.4375 14 2 14H3.28125L6.28125 11L4.15625 8.90625C4.0625 8.8125 3.90625 8.8125 3.8125 8.90625L1 11.7188ZM12.1562 6.90625C12.0625 6.8125 11.9062 6.8125 11.8125 6.90625L4.6875 14H14C14.5312 14 15 13.5625 15 13V9.71875L12.1562 6.90625ZM0 3C0 1.90625 0.875 1 2 1H14C15.0938 1 16 1.90625 16 3V13C16 14.125 15.0938 15 14 15H2C0.875 15 0 14.125 0 13V3ZM5 4.5C5 4.25 4.75 4 4.5 4C4.21875 4 4 4.25 4 4.5C4 4.78125 4.21875 5 4.5 5C4.75 5 5 4.78125 5 4.5ZM3 4.5C3 3.96875 3.28125 3.5 3.75 3.21875C4.1875 2.9375 4.78125 2.9375 5.25 3.21875C5.6875 3.5 6 3.96875 6 4.5C6 5.0625 5.6875 5.53125 5.25 5.8125C4.78125 6.09375 4.1875 6.09375 3.75 5.8125C3.28125 5.53125 3 5.0625 3 4.5Z"/>
    </svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`;
};

export const StyledFileInput = styled.input`
  overflow: hidden;
  width: 0;
`;

export const FileInputLabel = styled.label`
  position: absolute;
  right: 44%;
  top: 50%;

  width: 40px;
  height: 40px;
  border-radius: 8px;
  outline: 1px solid black;
  color: ${({ theme }) => theme.colors.neutral300};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.neutral100};
  background-image: ${({ theme }) => getImageIconSVG(theme.colors.primary600)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 18px 18px;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary500};
  }

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    right: 43%;
    width: 36px;
    height: 36px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    right: 38%;
    width: 32px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;
