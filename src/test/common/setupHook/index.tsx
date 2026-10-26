import { renderHook } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, defaultTheme } from '@/styles';
import type { IElement } from '@/types/props';

const wrapper = ({ children }: IElement) => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<>{children}</>} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export const setupHook = <T,>(hook: () => T) => {
  return renderHook(() => hook(), { wrapper });
};
