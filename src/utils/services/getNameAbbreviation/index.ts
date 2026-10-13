export const getNameAbbreviation = (name: string): string => {
  const nameParts = name.split(' ');
  if (nameParts.length === 0) return '';
  const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
  const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();

  return `${firstNameInitial}${lastNameInitial}`;
};
