import { useEffect, useState } from 'react';

import { useApp } from '@/contexts';
import { BannerImg } from '@/features/register/atoms/bannerImg';
import { useSignIn } from '@/features/register/hooks/useSignIn';
import { ForgotPasswordSection } from '@/features/register/molecules/forgotPasswordSection';
import { LoginActions } from '@/features/register/molecules/loginActions';
import { SignInAction } from '@/features/register/molecules/signInAction';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { getBannerURL } from '@/utils/services/getBannerURL';

import { ContainerData, ForgotPasswordWrapper, LoginButtonsWrapper } from './style';

export const SignInPage = () => {
  const [bannerURL, setBannerURL] = useState<string>('');
  const { control, errors, onSubmit, handleSignUpButton } = useSignIn();
  const { isScreenXs } = useApp();
  const isGoogleLoginAvailable = false;

  useEffect(() => {
    setBannerURL(getBannerURL());
  }, []);

  return (
    <LoginTemplate>
      <GridContainer spacing={{ base: 3, xs: 5 }} size={24}>
        <GridItem cols={{ base: 0, xs: 12 }}>
          <BannerImg src={bannerURL} alt="Banner Couple 3D" />
        </GridItem>
        <GridItem cols={{ base: 24, xs: 12 }} align="center">
          <ContainerData onSubmit={onSubmit}>
            <SignInAction control={control} errors={errors} />
            <ForgotPasswordWrapper>
              <ForgotPasswordSection onSubmit={onSubmit} />
            </ForgotPasswordWrapper>
            <LoginButtonsWrapper>
              <LoginActions
                onSignUpClick={handleSignUpButton}
                isGoogleLoginAvailable={isGoogleLoginAvailable}
              />
            </LoginButtonsWrapper>
          </ContainerData>
        </GridItem>
        {!isScreenXs && (
          <GridItem cols={{ base: 24, xs: 14 }}>
            <BannerImg src={bannerURL} alt="Banner Couple 3D" />
          </GridItem>
        )}
      </GridContainer>
    </LoginTemplate>
  );
};
