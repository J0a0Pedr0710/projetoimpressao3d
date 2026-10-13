export const parseDateInput = (dateInput: Date | string): Date => {
  if (dateInput instanceof Date) return dateInput;

  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    return new Date(`${dateInput}T00:00:00`);
  }

  return new Date(dateInput);
};
