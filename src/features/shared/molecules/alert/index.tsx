import { useEffect } from 'react';

import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';

import { AlertStyle, ButtonGroup, Content } from './style';
import type { IAlert } from './types';

export const Alert = ({ type, message, isFullWitdh, isClose, onClose, time }: IAlert) => {
  useEffect(() => {
    if (onClose && time) {
      setTimeout(onClose, time);
    }
  }, [time]);

  return (
    <AlertStyle $type={type ?? 'info'} $isFullWitdh={!!isFullWitdh}>
      <Content>
        <Text textColor="neutral900">
          {type === 'error' && <Icon icon="alertErrorBadge" color="error" />}
          {type === 'info' && <Icon icon="alertErrorBadge" color="info" />}
          {type === 'warning' && (
            <Icon icon="triangleExclamationFilled" color="warning" size={3.5} />
          )}
          {type === 'success' && <Icon icon="checkBadge" color="success" size={6} />}
          {type === 'link' && <Icon icon="info" color="link" size={6} />}
        </Text>
        <Text textColor="neutral900">{message}</Text>
      </Content>
      <ButtonGroup>
        {isClose && (
          <button onClick={onClose}>
            <Icon icon="x" color={type} />
          </button>
        )}
      </ButtonGroup>
    </AlertStyle>
  );
};
