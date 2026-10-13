declare module 'response' {
    type ISigninResponse = {
      token: string;
      confirmed?: boolean;
    };

    type IFile = {
      id: string;
      name: string;
      file: File;
      key: string;
      status: 'error' | number;
      type: string;
    };  
}