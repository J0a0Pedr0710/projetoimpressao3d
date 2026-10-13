import type { HTMLAttributes } from 'react';

import { Menu as ReactMenu } from '@szhsin/react-menu';

import { GrowAnimation } from '@/styles';

import type { IMenu } from './types';

export const Menu = ({ button, children, align, direction, hidden, onOpen }: IMenu) => {
  const containerProps: Omit<HTMLAttributes<HTMLElement>, 'className'> = {
    style: {
      zIndex: 200,
    },
  };

  return (
    <ReactMenu
      menuButton={button}
      align={align}
      direction={direction}
      containerProps={containerProps}
      hidden={hidden}
      reposition="initial"
      portal={true}
      onMenuChange={({ open }) => onOpen?.(open)}
    >
      <GrowAnimation isVisible>{children}</GrowAnimation>
    </ReactMenu>
  );
};
