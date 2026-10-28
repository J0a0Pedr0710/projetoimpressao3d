import { useTheme } from 'styled-components';

import type { IIconStyle } from '@/types/components';

export const plus = ({ color, size, ...props }: IIconStyle) => {
  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size[size]}
      height={theme.size[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color ? theme.colors[color] : undefined}
        d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
      ></path>
    </svg>
  );
};
