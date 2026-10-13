import { AllIcons } from '@/constants/icons';

import type { IIcon } from './types';

export const Icon = ({ icon, color, size }: IIcon) => {
  const IconComponent = AllIcons[icon];

  return <IconComponent color={color} size={size ?? 5} data-testid={`${icon}-icon`} />;
};
