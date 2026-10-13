type IFormatInput = {
  value: string;
  maxValue?: number;
};

export const formatInput = ({ value, maxValue }: IFormatInput) => {
  const trimValue = value.trimStart();
  if (!maxValue) return trimValue;
  const slicedValue = trimValue.slice(0, maxValue);
  return slicedValue;
};
