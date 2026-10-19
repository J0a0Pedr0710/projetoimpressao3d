import type { IIconStyle } from 'components';
import { useTheme } from 'styled-components';

export const googleIcon = ({ size, ...props }: IIconStyle) => {
  const theme = useTheme();
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size[size]}
      height={theme.size[size]}
      fill="none"
      viewBox="0 0 17 16"
    >
      <path
        fill="#4285F4"
        d="M15.54 8.167q-.002-.78-.133-1.5H8.5v2.84h3.947a3.38 3.38 0 0 1-1.474 2.207v1.846h2.38c1.387-1.28 2.187-3.16 2.187-5.393"
      ></path>
      <path
        fill="#34A853"
        d="M8.5 15.334c1.98 0 3.64-.654 4.853-1.774l-2.38-1.846c-.653.44-1.486.706-2.473.706-1.907 0-3.527-1.286-4.107-3.02h-2.44v1.894a7.33 7.33 0 0 0 6.547 4.04"
      ></path>
      <path
        fill="#FBBC05"
        d="M4.393 9.393A4.4 4.4 0 0 1 4.16 8c0-.487.087-.954.233-1.394V4.713h-2.44c-.5.987-.786 2.1-.786 3.287s.286 2.3.786 3.286l1.9-1.48z"
      ></path>
      <path
        fill="#EA4335"
        d="M8.5 3.587c1.08 0 2.04.373 2.807 1.093l2.1-2.1C12.133 1.394 10.48.667 8.5.667a7.32 7.32 0 0 0-6.547 4.047l2.44 1.893c.58-1.733 2.2-3.02 4.107-3.02"
      ></path>
    </svg>
  );
};
