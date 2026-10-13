import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const triangleExclamationFilled = ({ color, size, ...props }: IIconStyle) => {
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
        d="M8.008 1c.437 0 .844.25 1.062.625l6.75 11.5c.219.406.219.875 0 1.25a1.19 1.19 0 0 1-1.062.625h-13.5c-.469 0-.875-.219-1.094-.625a1.27 1.27 0 0 1 0-1.25l6.75-11.5A1.26 1.26 0 0 1 8.008 1m0 4a.74.74 0 0 0-.75.75v3.5c0 .438.312.75.75.75a.74.74 0 0 0 .75-.75v-3.5a.76.76 0 0 0-.75-.75m1 7c0-.531-.469-1-1-1-.563 0-1 .469-1 1 0 .563.437 1 1 1 .531 0 1-.437 1-1"
      ></path>
    </svg>
  );
};
