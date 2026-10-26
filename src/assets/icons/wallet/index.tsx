import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const wallet = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_3_424)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M3.875 3h9c.188 0 .375.196.375.393a.395.395 0 0 1-.375.393h-9c-.633 0-1.125.54-1.125 1.178v7.072c0 .663.492 1.178 1.125 1.178h8.25c.61 0 1.125-.515 1.125-1.178v-5.5c0-.639-.516-1.179-1.125-1.179h-7.5a.38.38 0 0 1-.375-.393c0-.196.164-.393.375-.393h7.5c1.031 0 1.875.884 1.875 1.965v5.5C14 13.14 13.156 14 12.125 14h-8.25C2.82 14 2 13.14 2 12.036V4.964C2 3.884 2.82 3 3.875 3M11 9.875c-.328 0-.562-.246-.562-.59 0-.318.234-.589.562-.589.305 0 .563.27.563.59 0 .343-.258.589-.563.589"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_424">
          <path fill="#fff" d="M2 3h12v11H2z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
