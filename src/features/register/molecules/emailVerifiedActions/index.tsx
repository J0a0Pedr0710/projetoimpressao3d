import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';

import { AccessButton, ButtonWrapper } from './style';
import type { IEmailVerifiedButton } from './types';

export const EmailVerifiedActions = ({ onAccessClick, onEditClick }: IEmailVerifiedButton) => {
  const { accessProject3D, editProfile, sign } = messages.texts;
  const buttonsAvailable = false;
  const navigate = useNavigate();

  return (
    <AccessButton>
      {buttonsAvailable && (
        <>
          <ButtonWrapper>
            <Button type="button" onClick={onAccessClick} variant="secondary" isFullWidth>
              {accessProject3D}
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button type="button" onClick={onEditClick} isFullWidth>
              {editProfile}
            </Button>
          </ButtonWrapper>
        </>
      )}
      {!buttonsAvailable && (
        <ButtonWrapper>
          <Button type="button" onClick={() => navigate('/')} variant="secondary" isFullWidth>
            {sign}
          </Button>
        </ButtonWrapper>
      )}
    </AccessButton>
  );
};
