import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const arrowUp = ({ color, size, ...props }: IIconStyle) => {
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
        d="m8.344 1.156 5.5 5.5a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8.5 2.719V14.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V2.719L2.844 7.375a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l5.5-5.5a.53.53 0 0 1 .719 0"
      ></path>
    </svg>
  );
};
