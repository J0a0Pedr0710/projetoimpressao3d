import { ETypeDocuments } from '@/types/enum';

export const verifyCpf = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
  let check1 = (sum * 10) % 11;
  if (check1 === 10 || check1 === 11) check1 = 0;
  if (check1 !== parseInt(cpf[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
  let check2 = (sum * 10) % 11;
  if (check2 === 10 || check2 === 11) check2 = 0;

  return check2 === parseInt(cpf[10]);
};

export const verifyCnpj = (cnpj: string) => {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  const calcCheckDigit = (cnpj: string, pos: number): number => {
    const weights =
      pos === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const sum = weights.reduce((acc, weight, i) => acc + parseInt(cnpj[i]) * weight, 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const digit1 = calcCheckDigit(cnpj, 12);
  const digit2 = calcCheckDigit(cnpj + digit1, 13);

  return digit1 === parseInt(cnpj[12]) && digit2 === parseInt(cnpj[13]);
};

export const verifyDocument = (document: string) => {
  const cleaned = document.replace(/[^\d]+/g, '');
  if (cleaned.length === 11) return verifyCpf(cleaned);
  if (cleaned.length === 14) return verifyCnpj(cleaned);
  return false;
};

export const verifyDocumentByType = (document: string, type: ETypeDocuments) => {
  const cleaned = document.replace(/[^\d]+/g, '');
  if (type === ETypeDocuments.CPF) return verifyCpf(cleaned);
  if (type === ETypeDocuments.CNPJ) return verifyCnpj(cleaned);
  if (type === ETypeDocuments.PASSPORT) return true;
  if (type === ETypeDocuments.RUC_DNI_CE) return true;
  return false;
};
