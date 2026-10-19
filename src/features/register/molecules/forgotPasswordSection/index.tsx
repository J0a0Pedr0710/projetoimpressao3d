import { Link } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';
import { Text } from '@/features/shared/atoms/text';

import type { IForgotPasswordSection } from './types';

export const ForgotPasswordSection = ({ onSubmit }: IForgotPasswordSection) => {
  const { forgotPassword, clickHere, sign } = messages.texts;

  return (
    <>
      <Button type="submit" isFullWidth onClick={onSubmit}>
        {sign}
      </Button>
      <Text size={'sm'}>
        {forgotPassword} <Link to="/forgot-password">{clickHere}</Link>
      </Text>
    </>
  );
};
