import { messages } from '@/assets/messages';
import { useProfileAddressCreateForm } from '@/features/profile/hooks/useProfileAddressCreateForm';
import { ProfileAddress } from '@/features/profile/organisms/profileAddress';
import { Button } from '@/features/shared/atoms/button';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';

export const AddProfilePage = () => {
  const { addNewAddres } = messages.texts;
  const { control, errors, disableFields, onSubmitAddressData } = useProfileAddressCreateForm();

  return (
    <form onSubmit={onSubmitAddressData}>
      <GridContainer size={12} spacing={{ base: 2, sm: 4 }}>
        <ProfileAddress control={control} errors={errors} disableFields={disableFields} />
        <GridItem cols={{ base: 12 }}>
          <Button variant="primary" type="submit" isFullWidth>
            {addNewAddres}
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
