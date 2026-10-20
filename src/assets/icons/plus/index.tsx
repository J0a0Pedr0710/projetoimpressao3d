import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const plus = ({ color, size, ...props }: IIconStyle) => {
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
        d="M8.5 2v5.5H14c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H8.5V14c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V8.5H2a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h5.5V2c0-.25.219-.5.5-.5.25 0 .5.25.5.5"
      ></path>
    </svg>
  );
};
