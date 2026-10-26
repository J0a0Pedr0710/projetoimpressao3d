import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const actionIcon = ({ color, size, ...props }: IIconStyle) => {
  const theme = useTheme();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size[size]}
      height={theme.size[size]}
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        fill={color ? theme.colors[color] : undefined}
        d="M4.5 0C4.75 0 5 0.25 5 0.5C5 0.78125 4.75 1 4.5 1H1V4.5C1 4.78125 0.75 5 0.5 5C0.21875 5 0 4.78125 0 4.5V0.5C0 0.25 0.21875 0 0.5 0H4.5ZM0 7.5C0 7.25 0.21875 7 0.5 7C0.75 7 1 7.25 1 7.5V11H4.5C4.75 11 5 11.25 5 11.5C5 11.7812 4.75 12 4.5 12H0.5C0.21875 12 0 11.7812 0 11.5V7.5ZM15.5 0C15.75 0 16 0.25 16 0.5V4.5C16 4.78125 15.75 5 15.5 5C15.2188 5 15 4.78125 15 4.5V1H11.5C11.2188 1 11 0.78125 11 0.5C11 0.25 11.2188 0 11.5 0H15.5ZM15 7.5C15 7.25 15.2188 7 15.5 7C15.75 7 16 7.25 16 7.5V11.5C16 11.7812 15.75 12 15.5 12H11.5C11.2188 12 11 11.7812 11 11.5C11 11.25 11.2188 11 11.5 11H15V7.5Z"
      ></path>
    </svg>
  );
};
