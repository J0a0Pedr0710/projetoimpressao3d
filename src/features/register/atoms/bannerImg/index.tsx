import { StyledBannerImg } from '@/features/register/atoms/bannerImg/style';
import type { IBannerImg } from '@/features/register/atoms/bannerImg/types';

export const BannerImg = ({ ...props }: IBannerImg) => {
  return <StyledBannerImg {...props} />;
};
