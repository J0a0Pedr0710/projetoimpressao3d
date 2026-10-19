import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const check = ({ color, size, ...props }: IIconStyle) => {
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
        fill={color ? theme.colors[color] : undefined}
        fillRule="evenodd"
        d="M6.14 10.51s5.7-6.71 6.16-7.24c1.06-1.22 2.62.18 1.76 1.21-.24.29-5.39 6.28-7.2 8.39-.39.45-.91.44-1.33 0-1.12-1.14-3.17-3.23-3.38-3.44-1.19-1.19.15-2.81 1.56-1.4.36.36 2.43 2.46 2.43 2.46z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
