import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const arrowUpSquare = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_37_24)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M9.531 1.749h4.063c.203 0 .406.201.406.403v4.039a.416.416 0 0 1-.406.404.4.4 0 0 1-.406-.404V3.137L6.967 9.32a.43.43 0 0 1-.584 0 .426.426 0 0 1 0-.58l6.22-6.185H9.532a.4.4 0 0 1-.406-.404c0-.202.178-.403.406-.403M2.625 3.364h3.656c.203 0 .407.202.407.404a.416.416 0 0 1-.407.404H2.625a.816.816 0 0 0-.812.807v8.077a.8.8 0 0 0 .812.808h8.125a.816.816 0 0 0 .813-.808V9.422c0-.202.177-.404.406-.404.203 0 .406.202.406.404v3.634c0 .909-.736 1.616-1.625 1.616H2.625A1.6 1.6 0 0 1 1 13.056V4.98c0-.883.71-1.615 1.625-1.615"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_37_24">
          <path fill="#fff" d="M1 1h13v14H1z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
