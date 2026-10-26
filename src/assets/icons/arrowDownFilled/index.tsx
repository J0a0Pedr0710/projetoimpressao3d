import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const arrowDownFilled = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_3_277)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="m7.057 12.272-5.25-5.786a1.57 1.57 0 0 1-.287-1.582C1.725 4.362 2.217 4 2.75 4h10.5c.533 0 .985.362 1.19.904a1.57 1.57 0 0 1-.288 1.582l-5.25 5.786a1.187 1.187 0 0 1-1.845 0"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_277">
          <path fill="#fff" d="M1 4h14v9H1z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
