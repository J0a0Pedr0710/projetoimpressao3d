import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const alertErrorBadge = ({ color, size, ...props }: IIconStyle) => {
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
        d="M.531 9.125c-.406-.687-.406-1.531 0-2.25l2.75-4.75A2.22 2.22 0 0 1 5.22 1h5.531c.813 0 1.531.406 1.938 1.125l2.75 4.75c.406.719.406 1.563 0 2.25l-2.75 4.781a2.18 2.18 0 0 1-1.938 1.125H5.219a2.22 2.22 0 0 1-1.938-1.125zM8 4a.74.74 0 0 0-.75.75v3.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-3.5A.76.76 0 0 0 8 4m1 7c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1"
      ></path>
    </svg>
  );
};
