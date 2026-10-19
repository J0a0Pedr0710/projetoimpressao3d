import { describe, expect, it } from 'vitest';

import { ETypeDocuments } from '@/types/enum';

import { verifyCnpj, verifyCpf, verifyDocument, verifyDocumentByType } from '.';

describe('verifyCpf', () => {
  it('returns true for valid CPF', () => {
    expect(verifyCpf('529.982.247-25')).toBe(true);
    expect(verifyCpf('52998224725')).toBe(true);
  });

  it('returns false for invalid CPF with wrong check digits', () => {
    expect(verifyCpf('529.982.247-26')).toBe(false);
  });

  it('returns false for CPF with all digits equal', () => {
    expect(verifyCpf('111.111.111-11')).toBe(false);
  });

  it('returns false for CPF with incorrect length', () => {
    expect(verifyCpf('123456789')).toBe(false);
  });
});

describe('verifyCnpj', () => {
  it('returns true for valid CNPJ', () => {
    expect(verifyCnpj('45.723.174/0001-10')).toBe(true);
    expect(verifyCnpj('45723174000110')).toBe(true);
  });

  it('returns false for invalid CNPJ with wrong check digits', () => {
    expect(verifyCnpj('45.723.174/0001-00')).toBe(false);
  });

  it('returns false for CNPJ with all digits equal', () => {
    expect(verifyCnpj('00000000000000')).toBe(false);
  });

  it('returns false for CNPJ with incorrect length', () => {
    expect(verifyCnpj('12345678')).toBe(false);
  });
});

describe('verifyDocument', () => {
  it('validates CPF correctly', () => {
    expect(verifyDocument('529.982.247-25')).toBe(true);
    expect(verifyDocument('529.982.247-26')).toBe(false);
  });

  it('validates CNPJ correctly', () => {
    expect(verifyDocument('45.723.174/0001-10')).toBe(true);
    expect(verifyDocument('45.723.174/0001-00')).toBe(false);
  });

  it('returns false for invalid length', () => {
    expect(verifyDocument('12345')).toBe(false);
  });
});

describe('verifyDocumentByType', () => {
  it('validates CPF by type', () => {
    expect(verifyDocumentByType('529.982.247-25', ETypeDocuments.CPF)).toBe(true);
    expect(verifyDocumentByType('529.982.247-99', ETypeDocuments.CPF)).toBe(false);
  });

  it('validates CNPJ by type', () => {
    expect(verifyDocumentByType('45.723.174/0001-10', ETypeDocuments.CNPJ)).toBe(true);
    expect(verifyDocumentByType('45.723.174/0001-99', ETypeDocuments.CNPJ)).toBe(false);
  });

  it('returns true for PASSPORT and RUC_DNI_CE types', () => {
    expect(verifyDocumentByType('ABC12345', ETypeDocuments.PASSPORT)).toBe(true);
    expect(verifyDocumentByType('1234567890', ETypeDocuments.RUC_DNI_CE)).toBe(true);
  });

  it('returns false for unsupported type with invalid data', () => {
    expect(verifyDocumentByType('12345', 'UNKNOWN' as ETypeDocuments)).toBe(false);
  });
});
