import styled from 'styled-components';

import type { ICodeStyle } from '@/features/register/atoms/codeInput/types';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.size[4]};
  margin-top: ${({ theme }) => theme.size[2]};

  input {
    position: fixed;
    top: 100vh;
  }
`;

export const Code = styled.button<ICodeStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-width: 1.5px;
  border-style: solid;
  border-color: #808080;
  border-radius: 8px;

  outline: 2px solid ${({ theme, $error }) => ($error ? theme.colors.error : 'transparent')};
  outline-offset: 1.5px;
  transition: outline-color 0.2s ease-in-out;
`;
