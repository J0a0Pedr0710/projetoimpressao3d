import { useEffect, useState } from 'react';

import { getCountryFlagUrl } from '@/utils/services/getCountryImageURL';

import { Img } from './style';
import type { IFlagStyle } from './types';

export const Flag = ({ size, icon, ...props }: IFlagStyle) => {
  const [src, setSrc] = useState<string>('');

  let mounted = true;
  const handleSource = async () => {
    const url = await getCountryFlagUrl(icon);
    if (mounted) setSrc(url);
  };

  useEffect(() => {
    (async () => {
      await handleSource();
    })();
    return () => {
      mounted = false;
    };
  }, [icon]);

  if (!src) return <></>;

  return <Img src={src} $size={size} alt={`${icon} flag`} {...props} />;
};
