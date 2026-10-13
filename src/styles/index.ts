import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    transition: 0ms;
    margin: 0;
    padding: 0;

    width: ${({ theme }) => theme.size.fullw};
    height: ${({ theme }) => theme.size.fullh};
    
    background: ${({ theme }) => theme.colors.neutral50};
    color: ${({ theme }) => theme.colors.neutral900};
  }

  body{
    overflow-x: hidden;
    font-family: 'Source Sans 3', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }


  button{
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    
    background: none;
    border: none;
    
    cursor: pointer;
  }

  input:focus,
  select:focus{
    outline: none;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: none !important;
    border: none !important;

    font-family: 'Source Sans 3', serif !important;
    font-optical-sizing: auto !important;
    font-style: normal !important;
    font-size: ${({ theme }) => theme.size[4]} !important;
    -webkit-text-fill-color: inherit !important;
    
    transition: 500000s ease-in-out 0s;
  }

  *{
    transition: 200ms;
    box-sizing: border-box;

    z-index: ${({ theme }) => theme.zIndex.default};
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }


  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary500};
    border-radius: 100px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.primary600};
  }

  .modal-overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .modal-overlay.ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .modal-overlay.ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .szh-menu--state-open {
    &:focus {
      outline: none;
    }
  }

  .szh-menu__item--hover {
    &:focus {
      outline: none;
    }
  }
`;

export { AccordionAnimation } from './animations/accordion';
export { GrowAnimation } from './animations/grow';
export { defaultScreen, defaultTheme, sideBarScreen } from './theme';
