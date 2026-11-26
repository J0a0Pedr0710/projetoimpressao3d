import { messages } from '@/assets/messages';
import { useBillingAddressCreateForm } from '@/features/profile/hooks/useBillingAddressCreateForm';
import { BillingAddress } from '@/features/profile/organisms/billingAddress';
import { Button } from '@/features/shared/atoms/button';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';

export const AddBillingAddressPage = () => {
  const { control, errors, disableFields, onSubmit } = useBillingAddressCreateForm();

  return (
    <form onSubmit={onSubmit}>
      <GridContainer size={12} spacing={{ base: 2, sm: 4 }}>
        <BillingAddress control={control} errors={errors} disableFields={disableFields} />
        <GridItem cols={{ base: 12 }}>
          <Button variant="primary" type="submit" isFullWidth>
            {messages.texts.addNewBillingAddress}
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
