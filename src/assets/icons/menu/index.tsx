import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const menu = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_24_40)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M1 3.5c0-.25.219-.5.5-.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13a.494.494 0 0 1-.5-.5m0 5c0-.25.219-.5.5-.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13a.494.494 0 0 1-.5-.5m14 5c0 .281-.25.5-.5.5h-13a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h13c.25 0 .5.25.5.5"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_24_40">
          <path fill="#fff" d="M1 3h14v11H1z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
