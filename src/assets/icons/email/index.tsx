import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const email = ({ color, size, ...props }: IIconStyle) => {
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
        fill={color ? theme.colors[color] : 'currentColor'}
        d="M19.5 2h-15A4.505 4.505 0 0 0 0 6.5v11C0 19.981 2.019 22 4.5 22h15c2.481 0 4.5-2.019 4.5-4.5v-11C24 4.019 21.981 2 19.5 2m-15 1h15a3.48 3.48 0 0 1 2.686 1.283l-7.691 7.692A3.52 3.52 0 0 1 11.998 13c-.914-.017-1.826-.36-2.492-1.025L1.814 4.283A3.48 3.48 0 0 1 4.5 3M23 17.5c0 1.93-1.57 3.5-3.5 3.5h-15C2.57 21 1 19.43 1 17.5v-11c0-.477.097-.931.271-1.346l7.528 7.528c.851.851 1.98 1.318 3.177 1.318s2.375-.467 3.226-1.318l7.528-7.528c.174.415.271.869.271 1.346z"
      ></path>
    </svg>
  );
};
