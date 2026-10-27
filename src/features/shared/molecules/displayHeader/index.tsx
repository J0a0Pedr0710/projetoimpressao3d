import { useApp } from '@/contexts';
import { Title } from '@/features/shared/atoms/title';

import { StyleHeader } from './style';
import type { IHeaderProps } from './types';

export function DisplayHeader({ title, children }: IHeaderProps) {
  const { isScreenSm } = useApp();

  return (
    <StyleHeader>
      <Title size={isScreenSm ? '4xl' : '2xl'} isBold>
        {title}
      </Title>
      {children}
    </StyleHeader>
  );
}
