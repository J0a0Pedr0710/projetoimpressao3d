import { useNavigate } from 'react-router-dom';

import { useBillingAddress } from '@/contexts';
import { AddressCard } from '@/features/profile/molecules/addressCard';
import { sortAddresses } from '@/utils/services/getDefaultProfileAddress';

export const BillingAddressCard = () => {
  const { billingAddresses, removeBillingAddress, setDefaultBillingAddress } = useBillingAddress();
  const navigate = useNavigate();

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>, id?: string) => {
    const to = id ? `/profile/billing-address/${id}` : '/profile/addBillingAddress';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  const handleSetDefault = async (id: string) => {
    if (!id) return;
    await setDefaultBillingAddress(id);
  };

  const handleRemove = async (id: string) => {
    if (!id) return;
    await removeBillingAddress(id);
  };

  const handleEdit = (id?: string) => handleNavigation(undefined, id);

  const sorted = sortAddresses(billingAddresses);

  return (
    <>
      {sorted.map((address, index) => {
        const isDefault = address.isDefault || sorted.length === 1;

        return (
          <AddressCard
            key={address.id ?? index}
            address={{
              id: address.id ?? undefined,
              cep: address.cep ?? '',
              street: address.street ?? '',
              number: address.number ?? '',
              complement: address.complement ?? '',
              neighborhood: address.neighborhood ?? '',
              city: address.city ?? '',
              state: address.state ?? '',
              shortState: address.state ?? '',
              country: address.country ?? '',
              isDefault,
            }}
            profile={{ firstName: address.name ?? '', lastName: '', telephone: address.telephone ?? '' }}
            isDefault={isDefault}
            onEdit={handleEdit}
            onDelete={handleRemove}
            onSetDefault={handleSetDefault}
            hideDeliveryInstructions
          />
        );
      })}
    </>
  );
};
