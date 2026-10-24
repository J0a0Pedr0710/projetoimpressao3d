import type { IIconStyle } from '@/types/components';
import { useTheme } from 'styled-components';

export const out = ({ color, size, ...props }: IIconStyle) => {
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
        d="m13.133 8.281-3 3a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.368-2.367H5.375A.37.37 0 0 1 5 8c0-.187.164-.375.375-.375h6.585L9.595 5.281a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l3 3c.14.14.14.399 0 .54M3.5 3.875v8.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375"
      ></path>
    </svg>
  );
};
