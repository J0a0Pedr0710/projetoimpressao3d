declare module 'models' {
  type IUser = {
    email: string;
    exp: number;
    firstName: string;
    lastName: string;
    iat: number;
    isActive: boolean;
    isMain: boolean;
    registerNumber: string;
    permissions: string[];
    userId: string;
  };

  type IAddress = {
    id?: string;
    isDefault?: boolean;
    cep: string;
    city: string;
    complement?: string;
    country: string;
    neighborhood: string;
    number: string;
    shortState: string;
    state: string;
    street: string;
  };

  type IProfile = {
    id: string;
    address: IAddress;
    addresses?: IAddress[];
    wallet: number;
    active: boolean;
    name: string;
    userName: string;
    email: string;
    access: string;
    telephone: string;
    ddi: string;
    documents: {
      typeDocument: ETypeDocuments | null;
      valueDocument: string | null;
    }[];
    createdAt: Date;
    firstName: string;
    lastName: string;
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

  type ICartItem = {
    id: string;
    type: 'SHIPPING' | 'WALLET';
    amount: number;
    discount: number;
    nameOrigin?: string;
    nameDestiny?: string;
    cityOrigin?: string;
    cityDestiny?: string;
    stateOrigin?: string;
    stateDestiny?: string;
    carrier?: string;
    enableCheck?: boolean;
    isLoadingItem?: boolean;
  };

  type IProductCartItem = {
    productId: string;
    quantity: number;
    price: number;
    name: string;
    imgUrl?: string;
  };
}
