import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const logout = ({ color, size, ...props }: IIconStyle) => {
  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size[size]}
      height={theme.size[size]}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={color ? theme.colors[color] : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.667"
        d="M10.667 11.667 14 8.333 10.667 5M14 8.333H6M5 14H3a.92.92 0 0 1-.707-.358A1.37 1.37 0 0 1 2 12.778V4.222c0-.324.105-.635.293-.864A.92.92 0 0 1 3 3h2"
      ></path>
    </svg>
  );
};
