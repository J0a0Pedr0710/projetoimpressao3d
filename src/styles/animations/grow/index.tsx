import type { IGrow } from '@/types/animations';

import { GrowWrapper } from './style';

export const GrowAnimation = ({ children, isVisible, disabled }: IGrow) => {
  return (
    <GrowWrapper $isClosing={!isVisible} $disabled={!!disabled}>
      {children}
    </GrowWrapper>
  );
};
