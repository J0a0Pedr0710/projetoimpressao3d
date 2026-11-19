import { useTheme } from 'styled-components';

import type { IIconStyle } from '@/types/components';

export const orders = ({ color, size, ...props }: IIconStyle) => {
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
        d="M17 13h-6v-1h6zm0-5h-6v1h6zm0 8h-6v1h6zM9 8H7v1h2zm0 4H7v1h2zm0 4H7v1h2zm12 5.5V2h-5.05a2.504 2.504 0 0 0-2.45-2h-3C9.292 0 8.283.86 8.05 2H3v19.5C3 22.879 4.122 24 5.5 24h13c1.378 0 2.5-1.121 2.5-2.5M9 3v-.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V3h5v18.5c0 .827-.673 1.5-1.5 1.5h-13c-.827 0-1.5-.673-1.5-1.5V3z"
      />      
    </svg>
  );
};
