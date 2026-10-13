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

  type IProfile = {
    id: string;
    address: IAddress;
    wallet: number;
    active: boolean;
    name: string;
    userName: string;
    email: string;
    access: string;
    telephone: string;
    ddi: string;
    documents: [
      {
        typeDocument: ETypeDocuments;
        valueDocument: string;
      },
    ];
    createdAt: Date;
    fullName: string;
    tokenAPI?: string;
  };

  type INotificationMessage = {
    id: string;
    title: string;
    message: string;
    type: string;
    date: Date;
    isRead: boolean;
  };

  type INotification = {
    isNotify: boolean;
    messages: INotificationMessage[];
  };
}
