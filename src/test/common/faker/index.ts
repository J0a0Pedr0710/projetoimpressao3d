import { faker } from '@faker-js/faker/locale/pt_BR';
import { toPattern } from 'vanilla-masker';

import type { IFile } from '@/Types/response';
import { formatFloat } from '@/utils/format/formatInteger';
import { formatNumberToPrice } from '@/utils/format/formatPrice';

type IDocumentProps = {
  formatted?: boolean;
};

const cpf = ({ formatted = false }: IDocumentProps) => {
  const randomDigit = () => Math.floor(Math.random() * 10);

  let digits: number[] = [];
  do {
    digits = Array.from({ length: 9 }, randomDigit);
  } while (digits.every((d) => d === digits[0]));

  const calcDigit = (base: number[]) => {
    const sum = base.reduce((acc, digit, index) => acc + digit * (base.length + 1 - index), 0);
    const mod = (sum * 10) % 11;
    return mod === 10 ? 0 : mod;
  };

  const digit1 = calcDigit(digits);
  const digit2 = calcDigit([...digits, digit1]);

  const cpfNumbers = [...digits, digit1, digit2].join('');

  if (!formatted) return cpfNumbers;

  return cpfNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const cnpj = ({ formatted = false }: IDocumentProps) => {
  const randomDigit = () => Math.floor(Math.random() * 10);

  let digits: number[] = [];
  do {
    digits = Array.from({ length: 12 }, randomDigit);
  } while (digits.every((d) => d === digits[0]));

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const calcDigit = (base: number[], weights: number[]) => {
    const sum = base.reduce((acc, digit, i) => acc + digit * weights[i], 0);
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  const digit1 = calcDigit(digits, weights1);
  const digit2 = calcDigit([...digits, digit1], weights2);

  const cnpjNumbers = [...digits, digit1, digit2].join('');

  if (!formatted) return cnpjNumbers;

  return cnpjNumbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

const nfKey = () => {
  const nfkeyPatternMask = '9999.9999.9999.9999.9999.9999.9999.9999.9999.9999.9999';

  const unMaskedNfKey = faker.string.numeric(44);
  const masked = toPattern(unMaskedNfKey, nfkeyPatternMask);

  return masked;
};

const file = (
  props = { name: `${faker.word.words(1)}.pdf`, size: 1024, type: 'application/pdf' },
) => {
  const { name, size, type } = props;

  const file: IFile = {
    key: faker.string.uuid(),
    file: new File(['a'.repeat(size)], name, { type }),
    id: faker.string.uuid(),
    name,
    status: 100,
    type,
  };

  return file;
};

const price = (props = { min: 0, max: 200 }) => {
  const { max, min } = props;

  const unformattedPrice = faker.number.float({ fractionDigits: 2, min, max });
  const price = formatNumberToPrice(unformattedPrice);

  return price;
};

const formattedNumber = (props = { min: 0, max: 200 }) => {
  const { max, min } = props;

  const unformattedPrice = faker.number.float({ fractionDigits: 2, min, max });
  const floatPrice = formatFloat(unformattedPrice);

  return floatPrice;
};

const customFaker = () => {
  const custom = {
    cpf,
    cnpj,
    nfKey,
    file,
    price,
    formattedNumber,
  };

  const data = {
    ...faker,
    custom,
  };

  return data;
};

export const projectFaker = customFaker();
