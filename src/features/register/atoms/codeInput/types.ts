export type ICodeInput = {
  length: number;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
};

export type ICodeStyle = { $error?: boolean };
