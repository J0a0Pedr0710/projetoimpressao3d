declare module 'functions' {
  type IGetSpan = {
    span?: IGridItemSpan;
    isScreenXxs: boolean;
    isScreenXs: boolean;
    isScreenSm: boolean;
    isScreenMd: boolean;
    isScreenLg: boolean;
    isScreenXl: boolean;
    isScreenXl2: boolean;
  };

  type IGetSpace = {
    spacing?: IGridSpace;
    isScreenXxs: boolean;
    isScreenXs: boolean;
    isScreenSm: boolean;
    isScreenMd: boolean;
    isScreenLg: boolean;
    isScreenXl: boolean;
    isScreenXl2: boolean;
  };

  type IFormatStringSize = {
    text: string;
    size: number;
  };

  type IAdvancedInclude = {
    value: string[] | string;
    search: string;
  };

  type IVerifyCep = {
    cep: string;
    shortCountry: string;
  };

  type IFormatPhoneNumber = {
    phone: string | undefined;
    shortCountry: string;
  };
}
