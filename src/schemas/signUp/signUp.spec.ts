import { describe, expect, it } from 'vitest';

import { messages } from '@/assets/messages';
import { ETypeDocuments } from '@/types/enum';

import { schema } from '.';

const createValidData = (overrides = {}) => ({
  firstName: 'João',
  lastName: 'da Silva',
  email: 'teste@email.com',
  password: 'Senha@123',
  repeatPassword: 'Senha@123',
  acceptTerms: true,
  document: {
    typeDocument: ETypeDocuments.CPF,
    valueDocument: '390.533.447-05',
  },
  ...overrides,
});

describe('signUpSchema', () => {
  it('should validate with correct data (CNPJ)', () => {
    const result = schema.safeParse(
      createValidData({
        document: {
          typeDocument: ETypeDocuments.CNPJ,
          valueDocument: '11222333000181',
        },
      }),
    );
    expect(result.success).toBe(true);
  });

  it('should fail with invalid email', () => {
    const result = schema.safeParse(createValidData({ email: 'invalidemail' }));
    const issue = result.error?.issues.find((i) => i.path.includes('email'));
    expect(issue?.message).toBe(messages.error.invalidMail);
  });

  it('should fail with weak password', () => {
    const result = schema.safeParse(createValidData({ password: 'abc', repeatPassword: 'abc' }));
    const issue = result.error?.issues.find((i) => i.path.includes('password'));
    expect(issue?.message).toBe(messages.error.passValidationErrorMessage);
  });

  it('should fail if repeatPassword does not match', () => {
    const result = schema.safeParse(
      createValidData({
        password: 'Senha@123',
        repeatPassword: 'Diferente@123',
      }),
    );
    const issue = result.error?.issues.find((i) => i.path.includes('repeatPassword'));
    expect(issue?.message).toBe(messages.error.passwordsDoNotMatch);
  });

  it('should fail with invalid CPF', () => {
    const result = schema.safeParse(
      createValidData({
        document: {
          typeDocument: ETypeDocuments.CPF,
          valueDocument: '111.111.111-11',
        },
      }),
    );

    expect(result.success).toBe(false);

    const issue = result.error?.issues.find((i) => i.path.join('.') === 'document.valueDocument');

    expect(issue?.message).toBe(messages.error.invalidDocument);
  });

  it('should pass with valid CPF', () => {
    const result = schema.safeParse(
      createValidData({
        document: {
          typeDocument: ETypeDocuments.CPF,
          valueDocument: '390.533.447-05',
        },
      }),
    );
    expect(result.success).toBe(true);
  });

  it('should fail if document is empty', () => {
    const result = schema.safeParse(
      createValidData({
        document: {
          typeDocument: ETypeDocuments.CPF,
          valueDocument: '',
        },
      }),
    );
    const issue = result.error?.issues.find((i) => i.path.join('.') === 'document.valueDocument');
    expect(issue?.message).toBe(messages.error.invalidDocument);
  });

  it('should validate and omit country from signup data', () => {
    const result = schema.parse(createValidData({ country: 'Brasil' }));

    expect(result).not.toHaveProperty('country');
  });

  it('should fail if email exceeds max length', () => {
    const longEmail = 'a'.repeat(95) + '@mail.com';
    const result = schema.safeParse(createValidData({ email: longEmail }));
    const issue = result.error?.issues.find((i) => i.path.includes('email'));
    expect(issue?.message).toBe(messages.error.maxChar(100));
  });

  it('should fail if acceptTerms is false', () => {
    const result = schema.safeParse(createValidData({ acceptTerms: false }));
    const issue = result.error?.issues.find((i) => i.path.includes('acceptTerms'));
    expect(issue?.message).toBe(messages.error.acceptTerms);
  });
});
