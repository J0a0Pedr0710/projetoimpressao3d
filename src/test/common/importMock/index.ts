/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Mock } from 'vitest';

export const MockValue = (mock: any, value: any) => {
  (mock as Mock).mockReturnValue(value);
};

export const MockImport = (mocks: any[]) => {
  mocks.forEach((mock) => vi.mocked(mock));
};
