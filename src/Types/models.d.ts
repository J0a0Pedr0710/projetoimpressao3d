declare module 'models' {
    type IUser = {
      email: string;
      exp: number;
      fullName: string;
      iat: number;
      isActive: boolean;
      isMain: boolean;
      registerNumber: string;
      permissions: string[];
      userId: string;
    };
}