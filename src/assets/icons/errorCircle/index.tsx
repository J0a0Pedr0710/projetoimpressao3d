import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const errorCircle = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_110_26)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M8 1.875a6.23 6.23 0 0 0-5.389 3.063c-1.139 1.914-1.139 4.238 0 6.125C3.722 12.977 5.75 14.125 8 14.125c2.222 0 4.25-1.148 5.361-3.062 1.139-1.887 1.139-4.211 0-6.126A6.21 6.21 0 0 0 8 1.876M8 15c-2.556 0-4.889-1.312-6.167-3.5-1.277-2.16-1.277-4.812 0-7A7.15 7.15 0 0 1 8 1a7.14 7.14 0 0 1 6.139 3.5c1.278 2.188 1.278 4.84 0 7C12.86 13.688 10.528 15 8 15m-1.333-4.375h.889V8h-.667a.435.435 0 0 1-.445-.437c0-.22.195-.438.445-.438H8c.222 0 .444.219.444.438v3.062h.89c.222 0 .444.219.444.438a.453.453 0 0 1-.445.437H6.667a.435.435 0 0 1-.445-.437c0-.22.195-.438.445-.438M8 6.031c-.389 0-.667-.273-.667-.656 0-.355.278-.656.667-.656.361 0 .667.3.667.656A.653.653 0 0 1 8 6.031"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_110_26">
          <path fill="#fff" d="M0 1h16v14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
