export interface IAddressCardProps {
  address: {
    id?: string;
    cep: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    shortState: string;
    country: string;
    isDefault?: boolean;
  };
  profile: {
    firstName: string;
    lastName: string;
    telephone: string;
  };
  isDefault: boolean;
  onEdit: (addressId?: string) => void;
  onDelete: (addressId: string) => void;
  onSetDefault: (addressId: string) => void;
}
