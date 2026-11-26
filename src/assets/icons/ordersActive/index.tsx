import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const ordersActive = ({ color, size, ...props }: IIconStyle) => {
  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size[size]}
      height={theme.size[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_116_24)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M21 21.5V2h-5.05a2.504 2.504 0 0 0-2.45-2h-3C9.292 0 8.283.86 8.05 2H3v19.5C3 22.879 4.122 24 5.5 24h13c1.378 0 2.5-1.121 2.5-2.5zM7 7.75h2v1.5H7zm4 0h6v1.5h-6zM7 11.75h2v1.5H7zm4 0h6v1.5h-6zM7 15.75h2v1.5H7zm4 0h6v1.5h-6z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_116_24">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
