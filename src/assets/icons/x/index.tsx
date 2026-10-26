import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const x = ({ color, size, ...props }: IIconStyle) => {
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
        stroke={color ? theme.colors[color] : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        d="m12 4-8 8M4 4l8 8"
      ></path>
    </svg>
  );
};
