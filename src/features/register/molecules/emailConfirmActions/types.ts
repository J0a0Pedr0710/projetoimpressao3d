export type IEmailConfirmActions = {
  timeLeft: number;
  isTimerActive: boolean;
  onBack: () => void;
  onResend: () => void;
};
