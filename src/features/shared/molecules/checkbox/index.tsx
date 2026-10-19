import { v4 as uuidv4 } from 'uuid';

import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';

import { Container, StyledCheckbox } from './style';
import type { ICheckbox } from './types';

export const Checkbox = ({
  isChecked,
  label,
  onCheck,
  id,
  color,
  name,
  disabled,
  errorMessage,
  isLoading = false,
}: ICheckbox) => {
  const inputId = id ?? `#${uuidv4()}`;
  const isDisabled = (disabled ?? false) || isLoading;

  return (
    <Container data-testid="checkbox-container" $error={!!errorMessage} disabled={isDisabled}>
      <label htmlFor={inputId}>
        <StyledCheckbox
          data-testid="checkbox"
          $isChecked={isChecked ?? false}
          $color={color ?? 'blue800'}
          $error={!!errorMessage}
          disabled={isDisabled}
          $isLoading={isLoading}
        >
          {isChecked && (
            <Icon icon="check" color={disabled ? 'neutral600' : 'neutral50'} size={4} />
          )}
        </StyledCheckbox>
      </label>
      <input
        disabled={disabled ?? false}
        name={name}
        type="checkbox"
        id={inputId}
        checked={isChecked}
        onChange={({ target: { checked } }) => {
          if (onCheck) onCheck(checked);
        }}
      />
      <label htmlFor={inputId} style={{ marginTop: 2, cursor: 'pointer' }}>
        <Text isLoading={isLoading}>{label}</Text>
      </label>
    </Container>
  );
};
