import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const bell = ({ color, size, ...props }: IIconStyle) => {
  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={theme.size[size]}
      height={theme.size[size]}
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_3_453)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M7.625 2.375C7.625 2.188 7.789 2 8 2c.188 0 .375.188.375.375v.398c1.875.188 3.375 1.782 3.375 3.727v.703a3.85 3.85 0 0 0 1.125 2.719l.07.07c.188.188.305.469.305.727a1.05 1.05 0 0 1-1.055 1.054H3.781c-.586-.023-1.031-.468-1.031-1.054 0-.281.094-.54.305-.727l.047-.07A3.87 3.87 0 0 0 4.25 7.203V6.5a3.74 3.74 0 0 1 3.375-3.727zM8 3.5c-1.664 0-3 1.36-3 3v.703c0 1.219-.492 2.39-1.36 3.258l-.07.047a.4.4 0 0 0-.07.21.27.27 0 0 0 .281.282h8.414c.164 0 .305-.117.305-.281 0-.07-.047-.14-.094-.211l-.07-.047a4.63 4.63 0 0 1-1.36-3.281V6.5c0-1.64-1.335-3-3-3zm-.727 9.258A.76.76 0 0 0 8 13.25a.75.75 0 0 0 .703-.492c.07-.188.281-.305.469-.235s.305.282.234.493C9.196 13.602 8.633 14 8 14a1.5 1.5 0 0 1-1.43-.984.393.393 0 0 1 .235-.493c.187-.07.398.047.468.235"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_453">
          <path fill={theme.colors.neutral50} d="M2 2h12v12H2z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
