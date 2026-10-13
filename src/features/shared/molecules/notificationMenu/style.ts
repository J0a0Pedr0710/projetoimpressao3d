import styled from 'styled-components';

import type { INotificationStyle } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: ${({ theme }) => theme.zIndex.high};

  width: ${({ theme }) => theme.size[72]};
  height: 55rem;
  padding: ${({ theme }) => theme.size[4]} 0;
  margin-left: ${({ theme }) => theme.size[20]};
  margin-bottom: ${({ theme }) => theme.size[4]};
  gap: ${({ theme }) => theme.size[4]};

  border-left: 2px solid ${({ theme }) => theme.colors.neutral500};
  background: ${({ theme }) => theme.colors.neutral50};

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    width: ${({ theme }) => theme.size[80]};
    height: fit-content;
    border: 2px solid ${({ theme }) => theme.colors.neutral500};
    border-radius: ${({ theme }) => theme.size[2]};
    margin-top: 1.5rem;
    margin-right: 0.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.size.full};
  max-height: ${({ theme }) => theme.size[80]};

  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${({ theme }) => theme.size[4]};
  width: ${({ theme }) => theme.size.full};

  li {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    @media (max-width: 400px) {
      margin-right: ${({ theme }) => theme.size[6]};
    }
  }
`;

export const Notification = styled.button<INotificationStyle>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  gap: ${({ theme }) => theme.size[2]};
  padding: ${({ theme }) => theme.size[4]};

  background: ${({ theme, $isRead }) =>
    $isRead ? theme.colors.neutral50 : theme.colors.primary50};

  &:hover {
    background: ${({ theme, $isRead }) =>
      $isRead ? theme.colors.neutral100 : theme.colors.primary100};
  }
`;

export const NotifyAnimate = styled.div`
  border-radius: 5px;
  position: relative;
  display: inline-flex;

  padding: 3px;
  transition:
    background-color 0.3s,
    transform 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral200};
    transform: scale(1.2);
  }
`;

export const EmptyNotifications = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
