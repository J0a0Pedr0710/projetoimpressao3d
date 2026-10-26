import type { IGrow } from '@/types/animations';

import { AccordionWrapper } from './style';

export const AccordionAnimation = ({ children, isVisible, disabled }: IGrow) => {
  return (
    <AccordionWrapper $isClosing={!isVisible} $disabled={!!disabled}>
      {children}
    </AccordionWrapper>
  );
};
