import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const checkBadge = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_3_399)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M8 13c-1.917 0-3.667-1.031-4.625-2.75a5.62 5.62 0 0 1 0-5.5C4.333 3.053 6.083 2 8 2c1.896 0 3.646 1.053 4.604 2.75a5.62 5.62 0 0 1 0 5.5C11.646 11.969 9.896 13 8 13m2.354-6.51h-.02c.208-.193.208-.515 0-.73a.48.48 0 0 0-.688 0L7.333 8.166l-.979-1.01c-.208-.215-.52-.215-.708 0a.48.48 0 0 0 0 .71L6.979 9.24c.188.215.5.215.708 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_399">
          <path fill="#fff" d="M2 2h12v11H2z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
