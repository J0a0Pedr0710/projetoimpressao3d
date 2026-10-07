import type { IGrowStyle } from 'animations';
import styled, { css, keyframes } from 'styled-components';

const open = keyframes`
  from {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }
  to {
    transform: scaleY(0.8);
    transform-origin: top;
    opacity: 0;

  }
`;

const close = keyframes`
  from {
    transform: scaleY(0.8);
    transform-origin: top;
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }
`;

export const AccordionWrapper = styled.div<IGrowStyle>`
  width: 100%;
  ${({ $disabled, $isClosing }) => {
    if ($disabled) return '';

    if ($isClosing) {
      return css`
        animation: ${open} 0.2s ease-out forwards;
      `;
    }
    return css`
      animation: ${close} 0.2s ease-out forwards;
    `;
  }}
`;