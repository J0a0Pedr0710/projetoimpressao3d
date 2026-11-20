import { messages } from '@/assets/messages';
import { useBillingAddressEditForm } from '@/features/profile/hooks/useBillingAddressEditForm';
import { BillingAddress } from '@/features/profile/organisms/billingAddress';
import { Button } from '@/features/shared/atoms/button';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';

export const BillingAddressPageEdit = () => {
  const { control, errors, disableFields, onSubmit } = useBillingAddressEditForm();

  return (
    <form onSubmit={onSubmit}>
      <GridContainer size={12} spacing={{ base: 2, sm: 4 }}>
        <BillingAddress control={control} errors={errors} disableFields={disableFields} />
        <GridItem cols={{ base: 12 }}>
          <Button variant="primary" type="submit" isFullWidth>
            {messages.texts.updateBillingAddress}
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
