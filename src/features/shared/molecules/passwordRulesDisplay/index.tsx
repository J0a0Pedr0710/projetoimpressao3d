import { messages } from '@/assets/messages';
import { Icon } from '@/features/shared/atoms/icons';

import { Li, PasswordRules, PasswordRulesStyle } from './style';
import type { IPasswordRulesDisplayProps } from './types';

const { aSpecialCharacter, oneCapitalLetter, oneLowercaseLetter, lengthCharacters, oneNumber } =
  messages.texts;
const { passwordsDoNotMatch } = messages.error;

const passwordRules = [
  { label: aSpecialCharacter, test: (pw: string) => /[!@#$%^&*]/.test(pw) },
  { label: oneCapitalLetter, test: (pw: string) => /[A-Z]/.test(pw) },
  { label: oneLowercaseLetter, test: (pw: string) => /[a-z]/.test(pw) },
  { label: lengthCharacters, test: (pw: string) => pw.length >= 8 },
  { label: oneNumber, test: (pw: string) => /\d/.test(pw) },
];

export const PasswordRulesDisplay = ({
  password,
  isFocused,
  comparePassword,
}: IPasswordRulesDisplayProps) => {
  if (!isFocused) return null;

  return (
    <PasswordRulesStyle>
      <PasswordRules>
        {passwordRules.map((rule) => {
          const isValid = rule.test(password);
          return (
            <Li key={rule.label} className={isValid ? 'valid' : 'invalid'}>
              {isValid ? <Icon icon="check" color="success" /> : <Icon icon="x" color="error" />}{' '}
              {rule.label}
            </Li>
          );
        })}

        {comparePassword !== undefined && comparePassword.length > 0 && (
          <Li className={password === comparePassword ? 'valid' : 'invalid'}>
            {password === comparePassword ? (
              <Icon icon="check" color="success" />
            ) : (
              <Icon icon="x" color="error" />
            )}{' '}
            {passwordsDoNotMatch}
          </Li>
        )}
      </PasswordRules>
    </PasswordRulesStyle>
  );
};
