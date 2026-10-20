import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const question = ({ color, size, ...props }: IIconStyle) => {
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
        d="M8.014 15a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 8.013 1c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 8.014 15m-2.38-9.46v.026c-.109.329.055.711.41.848.329.11.712-.055.821-.41l.028-.027a.21.21 0 0 1 .191-.137H8.67c.246 0 .437.164.437.41a.43.43 0 0 1-.218.355l-1.203.684c-.22.11-.329.328-.329.574v.356c0 .383.274.656.657.656.355 0 .629-.273.656-.629l.875-.52c.52-.3.875-.874.875-1.476 0-.957-.793-1.75-1.75-1.75H7.084c-.656 0-1.23.41-1.45 1.04m1.505 5.085c0 .492.382.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875"
      ></path>
    </svg>
  );
};
