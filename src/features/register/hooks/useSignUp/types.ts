import type { ISignUp } from '@/types/props';

export type SignUpFormData = ISignUp & { confirmationCode?: string };
