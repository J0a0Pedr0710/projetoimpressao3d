import { messages } from '@/assets/messages';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';

import type { ISignUpPersonalData } from './types';

export const SignUpPersonalData = ({ control, errors }: ISignUpPersonalData) => {
  const { createProject3DAccount, personalData } = messages.titles;
  const { firstName, lastName } = messages.label;

  return (
    <>
      <GridItem cols={{ base: 12 }}>
        <Title size={'2xl'} isBold>
          {createProject3DAccount}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <Title size={'xl'} isBold>
          {personalData}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          isFullWidth
          control={control}
          name="firstName"
          label={firstName}
          isRequired
          errorMessage={errors?.firstName?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          isFullWidth
          control={control}
          name="lastName"
          label={lastName}
          isRequired
          errorMessage={errors?.lastName?.message}
        />
      </GridItem>
    </>
  );
};
