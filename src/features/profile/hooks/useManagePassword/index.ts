import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { profileController } from '@/controllers/profileController';
import { type IManagePasswordRequest, managePasswordSchema } from '@/schemas/managePassword';

export const useManagePassword = () => {
  const {
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IManagePasswordRequest>(managePasswordSchema);

  const { openAlert } = useApp();
  const { passwordNotMatch } = messages.texts;
  const { unknownError } = messages.error;

  const onSubmit = handleSubmit(
    (data) => {
      profileController
        .updatePassword(data.oldPassword, data.newPassword, data.confirmPassword)
        .then(() => {
          openAlert(messages.success.successEdit, 'success');
          setValue('oldPassword', '');
          setValue('newPassword', '');
          setValue('confirmPassword', '');
        })
        .catch((errorMessage) => {
          openAlert(errorMessage ?? unknownError, 'error');
        });
    },
    (error) => {
      if (!error.confirmPassword && !error.newPassword && !error.oldPassword) {
        openAlert(passwordNotMatch, 'error');
        return;
      }
    },
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);

  const onClickEndadornment = () => {
    setShowPassword((prev) => !prev);
  };

  const onClickConfirmAdornment = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onClickOldPassword = () => {
    setShowOldPassword((prev) => !prev);
  };

  const hook = {
    control,
    errors,
    onSubmit,
    showPassword,
    showConfirmPassword,
    showOldPassword,
    onClickEndadornment,
    onClickConfirmAdornment,
    onClickOldPassword,
    watch,
    setValue,
  };

  return hook;
};
