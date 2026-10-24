import { describe, expect, it } from 'vitest';

import { schema } from '.';

const validPassword = 'Abcdef@123';

describe('managePasswordSchema', () => {
  it('should accept valid password change data', () => {
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: validPassword,
      confirmPassword: validPassword,
    });
    expect(parsed.success).toBe(true);
  });

  it('should reject when oldPassword is empty', () => {
    const parsed = schema.safeParse({
      oldPassword: '',
      newPassword: validPassword,
      confirmPassword: validPassword,
    });
    expect(parsed.success).toBe(false);
  });

  it('should reject when newPassword and confirmPassword do not match', () => {
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: validPassword,
      confirmPassword: 'Different@123',
    });
    expect(parsed.success).toBe(false);
    expect(parsed.error?.issues[0].path).toContain('confirmPassword');
  });

  it('should reject newPassword without a number', () => {
    const password = 'Abcdef@abc';
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: password,
      confirmPassword: password,
    });
    expect(parsed.success).toBe(false);
  });

  it('should reject newPassword without special character', () => {
    const password = 'Abcdef123';
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: password,
      confirmPassword: password,
    });
    expect(parsed.success).toBe(false);
  });

  it('should reject newPassword without uppercase letter', () => {
    const password = 'abcdef@123';
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: password,
      confirmPassword: password,
    });
    expect(parsed.success).toBe(false);
  });

  it('should reject newPassword without lowercase letter', () => {
    const password = 'ABCDEF@123';
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: password,
      confirmPassword: password,
    });
    expect(parsed.success).toBe(false);
  });

  it('should reject newPassword shorter than 8 characters', () => {
    const password = 'A@1b';
    const parsed = schema.safeParse({
      oldPassword: 'OldPass@123',
      newPassword: password,
      confirmPassword: password,
    });
    expect(parsed.success).toBe(false);
  });
});
