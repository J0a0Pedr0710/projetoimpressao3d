import type { ChangeEvent, FocusEvent } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';
import { Tooltip } from '@/features/shared/atoms/tooltip';
import { formatInput } from '@/utils/format/formatInput';

import {
  Container,
  Content,
  EndAdornmentContent,
  LabelText,
  PrefixText,
  StyledInput,
  TooltipContentWrapper,
} from './style';
import type { IInput } from './types';

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      isRequired,
      label,
      helperText,
      message,
      mask,
      status,
      isFullWidth,
      disabled,
      value,
      onClickEndadornment,
      onChange,
      onBlur,
      noRefBlur,
      endadornment: EndAdornment,
      prefix,
      prefixElement,
      hasBorderAdornment = true,
      maxCharLength,
      placeholderPosition,
      tooltipPlacement = 'top',
      shouldShowTooltip = false,
      tooltipHelperText,
      allowContextSkeleton = true,
      isLoading = false,
      ...domProps
    },
    ref,
  ) => {
    const { notPossibleToModify } = messages.label;
    const { isScreenXs, loading } = useApp();
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string | number | readonly string[] | undefined>(
      value,
    );
    const hasPrefix = !!prefix;
    const hasPrefixElement = !!prefixElement;

    const contextIsLoading = loading && allowContextSkeleton;

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = mask ? mask(e.target.value) : e.target.value;
      const formattedNewValue = formatInput({ value: newValue, maxValue: maxCharLength });
      setInputValue(formattedNewValue);
      if (onChange) {
        const event = {
          ...e,
          target: {
            ...e.target,
            value: formattedNewValue,
          },
        };
        onChange(event as ChangeEvent<HTMLInputElement>);
      }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
      if (noRefBlur) noRefBlur(event);
      if (onBlur) onBlur(event);
    };

    const labelRender = (
      <>
        <LabelText isBold size={isScreenXs ? 'md' : 'sm'} isLoading={isLoading || contextIsLoading}>
          {label}
          {isRequired && (
            <Text isBold textColor="error" size={isScreenXs ? 'md' : 'sm'}>
              *
            </Text>
          )}
          {tooltipHelperText && (
            <Tooltip
              color="primary500"
              render={<TooltipContentWrapper>{tooltipHelperText}</TooltipContentWrapper>}
            >
              <Icon icon="errorCircle" color="primary500" size={4} />
            </Tooltip>
          )}
        </LabelText>
      </>
    );

    return (
      <Container $isFullWidth={isFullWidth ?? false} data-testid="input-container">
        {label && !disabled && labelRender}
        {disabled && shouldShowTooltip && (
          <Tooltip render={<span>{notPossibleToModify}</span>} place={tooltipPlacement}>
            {labelRender}
          </Tooltip>
        )}
        {!shouldShowTooltip && disabled && labelRender}
        {helperText && <Text>{helperText}</Text>}
        <Content
          $status={status ?? 'default'}
          $isFullWidth={isFullWidth ?? false}
          $disabled={disabled}
          $isLoading={isLoading || contextIsLoading}
        >
          {hasPrefix && <PrefixText>{prefix}</PrefixText>}
          {hasPrefixElement && <PrefixText>{prefixElement}</PrefixText>}
          <StyledInput
            ref={ref && inputRef}
            disabled={disabled}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            data-testid="input-field"
            $placeholderPosition={placeholderPosition}
            {...domProps}
          />
          {EndAdornment && (
            <EndAdornmentContent
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={() => {
                inputRef.current?.focus();
                if (onClickEndadornment) onClickEndadornment();
              }}
              $hasBorderAdornment={hasBorderAdornment}
              type="button"
            >
              <div>{EndAdornment}</div>
            </EndAdornmentContent>
          )}
        </Content>
        {message && (
          <Text textColor={status === 'default' ? 'neutral900' : status}>
            {status === 'success' && <Icon icon="checkBadge" color="success" />}
            {status === 'error' && <Icon icon="alertErrorBadge" color="error" size={4} />}
            {message}
          </Text>
        )}
      </Container>
    );
  },
);

Input.displayName = 'Input';
