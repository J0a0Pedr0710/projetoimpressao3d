import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const calendar = ({ color, size, ...props }: IIconStyle) => {
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
      <g clipPath="url(#clip0_3_504)">
        <path
          fill={color ? theme.colors[color] : undefined}
          d="M5.375 2c.188 0 .375.188.375.375V3.5h4.5V2.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V3.5h.75c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5H5V2.375C5 2.188 5.164 2 5.375 2M12.5 6.5h-2.437v1.688H12.5zm0 2.438h-2.437v1.874H12.5zm0 2.624h-2.437v1.688h1.687c.398 0 .75-.328.75-.75zm-3.187-.75V8.939H6.687v1.874zm-2.626.75v1.688h2.625v-1.687zm-.75-.75V8.939H3.5v1.874zm-2.437.75v.938c0 .422.328.75.75.75h1.688v-1.687zm0-3.374h2.438V6.5H3.5zm3.188 0h2.625V6.5H6.687zM11.75 4.25h-7.5A.755.755 0 0 0 3.5 5v.75h9V5a.77.77 0 0 0-.75-.75"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_504">
          <path fill="#fff" d="M2 2h12v12H2z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
