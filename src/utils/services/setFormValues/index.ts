import type { FieldValues, Path, UseFormSetValue } from 'react-hook-form';

export const setFormValues = <T extends FieldValues>(
  setValue: UseFormSetValue<T>,
  formValues: T,
) => {
  (Object.keys(formValues) as Array<keyof T>).forEach((key) => {
    setValue(key as Path<T>, formValues[key]);
  });
};
