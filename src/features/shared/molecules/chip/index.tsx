import { Text } from '@/features/shared/atoms/text';

import { StyleChip } from './style';
import type { IChip } from './types';

export const Chip = ({
  backgroundColor,
  borderColor,
  children,
  color,
  isAttached,
  size,
}: IChip) => {
  return (
    <StyleChip
      data-testid="chip"
      $isAttached={isAttached ?? false}
      $backgroundColor={backgroundColor ?? 'primary200'}
      $borderColor={borderColor ?? 'primary500'}
      $size={size ?? 4}
    >
      <Text size="sm" textColor={color ?? 'primary500'} style={{ alignSelf: 'center' }}>
        {children}
      </Text>
    </StyleChip>
  );
};
