import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const chevronLeft = ({ color, size, ...props }: IIconStyle) => {
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
        d="m3.96 8.54 4.5 4.5a.723.723 0 0 0 1.056 0 .723.723 0 0 0 0-1.056L5.555 8l3.96-3.96a.723.723 0 0 0 0-1.056.723.723 0 0 0-1.054 0l-4.5 4.5a.723.723 0 0 0 0 1.055"
      ></path>
    </svg>
  );
};
