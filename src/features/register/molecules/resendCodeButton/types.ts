export type IResendCodeButton = {
  isTimerActive: boolean;
  isLoading: boolean;
  timeLeft: number;
  onResendCode: () => void;
};
