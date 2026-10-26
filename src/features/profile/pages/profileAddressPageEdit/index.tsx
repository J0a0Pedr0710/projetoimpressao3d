import { messages } from '@/assets/messages';
import { useProfileForm } from '@/features/profile/hooks/useProfileForm';
import { ProfileAddress } from '@/features/profile/organisms/profileAddress';
import { Button } from '@/features/shared/atoms/button';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';

export const ProfileAddressPageEdit = () => {
  const { updateAddres } = messages.texts;
  const { control, errors, disableFields, onSubmitAddressData } = useProfileForm();

  return (
    <form onSubmit={onSubmitAddressData}>
      <GridContainer size={12} spacing={{ base: 2, sm: 4 }}>
        <ProfileAddress control={control} errors={errors} disableFields={disableFields} />
        <GridItem cols={{ base: 12 }}>
          <Button variant="primary" type="submit" isFullWidth>
            {updateAddres}
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
