import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const inIcon = ({ color, size, ...props }: IIconStyle) => {
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
        d="m2.867 8.281 3 3c.14.14.399.14.54 0a.397.397 0 0 0 0-.539L4.038 8.375h6.586A.37.37 0 0 0 11 8a.385.385 0 0 0-.375-.375H4.04l2.366-2.344a.397.397 0 0 0 0-.539.397.397 0 0 0-.539 0l-3 3a.397.397 0 0 0 0 .54M12.5 3.875v8.25c0 .21.188.375.375.375a.37.37 0 0 0 .375-.375v-8.25a.385.385 0 0 0-.375-.375.4.4 0 0 0-.375.375"
      ></path>
    </svg>
  );
};
