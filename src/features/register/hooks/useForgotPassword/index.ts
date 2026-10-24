import { useState } from 'react';

import type { IUseForgotPassword, IUseUpdatePassword } from '@/types/props';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { forgotPasswordController } from '@/controllers/forgotPasswordController';
import {
  type UpdatePasswordFormData,
  forgotPasswordSchema,
  updatePasswordFormOptions,
} from '@/schemas/forgotPassword';

export const useForgotPassword = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
  } = useForm<IUseForgotPassword>(forgotPasswordSchema);

  const { openAlert, setLoading } = useApp();
  const { forgotPasswordError } = messages.error;
  const navigate = useNavigate();

  const onSubmit = handleSubmit((input) => {
    setLoading(true);
    forgotPasswordController
      .requestNewCode(input)
      .then(({ email }) => {
        navigate(`forgot-password/email-confirm?email=${encodeURIComponent(email)}`);
      })
      .catch((error) => {
        if (typeof error === 'string') {
          openAlert(error, 'error');
        } else {
          openAlert(forgotPasswordError, 'error');
        }
      })
      .finally(() => setLoading(false));
  });

  const handleBackButton = () => {
    navigate(-1);
  };

  const hook = {
    control,
    errors,
    setValue,
    watch,
    onSubmit,
    handleBackButton,
  };

  return hook;
};

export const useUpdatePassword = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const code = searchParams.get('code');
  const unformattedEmail = searchParams.get('email') || '';
  const email = unformattedEmail!.replace(/ /g, '+');

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<UpdatePasswordFormData>(updatePasswordFormOptions);

  const { openAlert, setLoading } = useApp();
  const { updatePasswordError, expiredOrInvalidLink } = messages.error;
  const { successfullyResetPassword } = messages.success;
  const navigate = useNavigate();

  const onSubmit = handleSubmit((formData) => {
    if (!email || !code) {
      openAlert(expiredOrInvalidLink, 'error');
      return;
    }

    const payload: IUseUpdatePassword = {
      email,
      confirmCode: code,
      newPassword: formData.newPassword,
    };

    setLoading(true);

    forgotPasswordController
      .updatePassword(payload)
      .then(() => {
        openAlert(successfullyResetPassword, 'success');
        navigate('/');
      })
      .catch((error) => {
        if (typeof error === 'string') {
          openAlert(error, 'error');
        }
        openAlert(updatePasswordError, 'error');
      })
      .finally(() => setLoading(false));
  });

  const handleCancelButton = () => {
    navigate(-1);
  };

  const onClickAdornment = () => {
    setShowPassword((prev) => !prev);
  };

  const onClickConfirmAdornment = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const hook = {
    control,
    errors,
    handleSubmit,
    setValue,
    watch,
    onSubmit,
    handleCancelButton,
    showPassword,
    showConfirmPassword,
    onClickAdornment,
    onClickConfirmAdornment,
  };

  return hook;
};
