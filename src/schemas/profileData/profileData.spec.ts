import { describe, expect, it } from 'vitest';

import { messages } from '@/assets/messages';
import { ETypeDocuments } from '@/types/enum';

import type { IProfileData } from '.';
import { schema } from '.';

const createValidData = (overrides: Partial<IProfileData> = {}): IProfileData => ({
  telephone: '11999999999',
  firstName: 'João',
  lastName: 'Pedro',
  email: 'joao@email.com',
  address: {
    cep: '12345678',
    city: 'São Paulo',
    state: 'SP',
    street: 'Av. Paulista',
    number: '123',
    complement: 'Apto 101',
    neighborhood: 'Centro',
  },
  documents: [
    {
      valueDocument: '12345678900',
      typeDocument: ETypeDocuments.CPF,
    },
  ],
  ...overrides,
});

describe('profileDataSchema', () => {
  it('should pass with valid data', () => {
    const result = schema.safeParse(createValidData());
    expect(result.success).toBe(true);
  });

  it('should fail if fullName is empty', () => {
    const result = schema.safeParse(createValidData({ firstName: '' }));
    const issue = result.error?.issues.find((i) => i.path.includes('fullName'));
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should fail if email is invalid', () => {
    const result = schema.safeParse(createValidData({ email: 'invalid-email' }));
    const issue = result.error?.issues.find((i) => i.path.includes('email'));
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should fail if street is too short', () => {
    const result = schema.safeParse(
      createValidData({ address: { ...createValidData().address, street: 'A' } }),
    );
    const issue = result.error?.issues.find(
      (i) => i.path.includes('address') && i.path.includes('street'),
    );
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should fail if number is empty', () => {
    const result = schema.safeParse(
      createValidData({ address: { ...createValidData().address, number: '' } }),
    );
    const issue = result.error?.issues.find(
      (i) => i.path.includes('address') && i.path.includes('number'),
    );
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should fail if neighborhood is too short', () => {
    const result = schema.safeParse(
      createValidData({ address: { ...createValidData().address, neighborhood: 'A' } }),
    );
    const issue = result.error?.issues.find(
      (i) => i.path.includes('address') && i.path.includes('neighborhood'),
    );
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should fail if documents is empty', () => {
    const result = schema.safeParse({ ...createValidData(), documents: [] });
    const issue = result.error?.issues.find((i) => i.path.includes('documents'));
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should fail if document.valueDocument is empty', () => {
    const result = schema.safeParse({
      ...createValidData(),
      documents: [{ valueDocument: '', typeDocument: ETypeDocuments.CPF }],
    });
    const issue = result.error?.issues.find(
      (i) => i.path.join('.') === 'documents.0.valueDocument',
    );
    expect(issue?.message).toBe(messages.error.invalidValue);
  });

  it('should allow max of 2 documents', () => {
    const result = schema.safeParse({
      ...createValidData(),
      documents: [
        { valueDocument: '1', typeDocument: ETypeDocuments.CPF },
        { valueDocument: '2', typeDocument: ETypeDocuments.CNPJ },
      ],
    });
    expect(result.success).toBe(true);
  });

  it('should fail with more than 2 documents', () => {
    const result = schema.safeParse({
      ...createValidData(),
      documents: [
        { valueDocument: '1', typeDocument: ETypeDocuments.CPF },
        { valueDocument: '2', typeDocument: ETypeDocuments.CNPJ },
      ],
    });
    const issue = result.error?.issues.find((i) => i.path.includes('documents'));
    expect(issue?.message).toBe(messages.error.invalidValue);
  });
});
