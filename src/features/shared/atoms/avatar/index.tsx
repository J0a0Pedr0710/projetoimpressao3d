import { StyledAvatar } from './style';
import type { IAvatar } from './types';

export const Avatar = ({ src, alt = 'User avatar', ...rest }: IAvatar) => {
  return <StyledAvatar src={src} alt={alt} {...rest} />;
};
