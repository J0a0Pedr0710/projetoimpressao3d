import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const chevronUp = ({ color, size, ...props }: IIconStyle) => {
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
        d="m7.46 3.96-4.5 4.5a.723.723 0 0 0 0 1.056.723.723 0 0 0 1.056 0L8 5.555l3.96 3.96a.723.723 0 0 0 1.056 0 .723.723 0 0 0 0-1.054l-4.5-4.5a.723.723 0 0 0-1.055 0"
      ></path>
    </svg>
  );
};
