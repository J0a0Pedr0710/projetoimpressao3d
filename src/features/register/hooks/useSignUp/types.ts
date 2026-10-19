import type { ISignUp } from 'props';

export type SignUpFormData = ISignUp & { confirmationCode?: string };
