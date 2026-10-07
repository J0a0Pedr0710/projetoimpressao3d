import type { Dispatch, ReactNode, SetStateAction } from "react";

declare module "contexts" {
  type IDispatch<T> = Dispatch<SetStateAction<T>>;

  type IProvider = {
    children: ReactNode;
  };
}
