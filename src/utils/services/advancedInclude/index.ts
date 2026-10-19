import type { IAdvancedInclude } from 'functions';

export const advancedInclude = ({ value, search }: IAdvancedInclude) => {
  const lowerSearch = search
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase();

  if (search === '') {
    return true;
  }

  if (typeof value === 'string') {
    const lowerItem = value
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLocaleLowerCase();
    return lowerItem.includes(lowerSearch);
  }

  const lowerItems = value.map((item) =>
    item
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLocaleLowerCase(),
  );
  return lowerItems.includes(lowerSearch);
};
