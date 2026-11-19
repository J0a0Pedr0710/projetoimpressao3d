/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest';

import { ETypeDocuments } from '@/types/enum';

import { formatDocumentByType } from '.';

describe('formatDocumentByType function', () => {
  it('formats CPF correctly', () => {
    expect(formatDocumentByType({ document: '12345678901', type: ETypeDocuments.CPF })).toBe(
      '123.456.789-01',
    );
    expect(formatDocumentByType({ document: '98765432100', type: ETypeDocuments.CPF })).toBe(
      '987.654.321-00',
    );
    expect(formatDocumentByType({ document: '00011122233', type: ETypeDocuments.CPF })).toBe(
      '000.111.222-33',
    );
  });

  it('formats CNPJ correctly', () => {
    expect(formatDocumentByType({ document: '12345678000199', type: ETypeDocuments.CNPJ })).toBe(
      '12.345.678/0001-99',
    );
    expect(formatDocumentByType({ document: '00000000000000', type: ETypeDocuments.CNPJ })).toBe(
      '00.000.000/0000-00',
    );
    expect(formatDocumentByType({ document: '98765432000188', type: ETypeDocuments.CNPJ })).toBe(
      '98.765.432/0001-88',
    );
  });

  it('cleans non-digit characters before formatting', () => {
    expect(formatDocumentByType({ document: '123.456.789-01', type: ETypeDocuments.CPF })).toBe(
      '123.456.789-01',
    );
    expect(
      formatDocumentByType({ document: '12.345.678/0001-99', type: ETypeDocuments.CNPJ }),
    ).toBe('12.345.678/0001-99');
    expect(formatDocumentByType({ document: ' 123 456 789 01 ', type: ETypeDocuments.CPF })).toBe(
      '123.456.789-01',
    );
  });

  it('returns partial format for incomplete documents', () => {
    expect(formatDocumentByType({ document: '12345', type: ETypeDocuments.CPF })).toBe('123.45');
    expect(formatDocumentByType({ document: '1234567', type: ETypeDocuments.CNPJ })).toBe(
      '12.345.67',
    );
  });

  it('returns empty string for empty or null document', () => {
    expect(formatDocumentByType({ document: '', type: ETypeDocuments.CPF })).toBe('');
    expect(formatDocumentByType({ document: null as any, type: ETypeDocuments.CNPJ })).toBe('');
  });

});
