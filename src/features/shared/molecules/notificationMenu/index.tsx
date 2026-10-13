import { MenuItem } from '@szhsin/react-menu';

import { messages } from '@/assets/messages';
import { Icon } from '@/features/shared/atoms/icons';
import { Menu } from '@/features/shared/atoms/menu';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';
import { useTopBarMenu } from '@/hooks/useTopBarMenu';
import { formatDate } from '@/utils/format/formatDate';

import {
  Container,
  Content,
  EmptyNotifications,
  Header,
  Notification,
  NotifyAnimate,
} from './style';

export const NotificationsMenu = () => {
  const { notifications, onReadNotification } = useTopBarMenu();

  const { myNotificationsTitle } = messages.titles;
  const { noNotifications } = messages.texts;

  const hasNotifications = notifications.messages.length > 0;

  return (
    <>
      <Menu
        button={
          <NotifyAnimate>
            <Icon icon="bell" color="primary600" />
          </NotifyAnimate>
        }
      >
        <Container>
          <Header>
            <Title size="lg" textColor="primary500">
              <Icon icon="bell" size={6} color="primary600" />
              {myNotificationsTitle}
            </Title>
            <MenuItem>
              <Icon icon="x" size={6} color="error" />
            </MenuItem>
          </Header>
          <Content>
            {notifications.messages.map((notification) => (
              <Notification
                key={notification.id}
                $isRead={notification.isRead}
                onClick={onReadNotification}
              >
                <Title textColor="primary500">{notification.title}</Title>
                <Text textColor="neutral900" size="sm">
                  {notification.message}
                </Text>
                <Text size="xs">{formatDate({ dateString: notification.date })}</Text>
              </Notification>
            ))}
            {!hasNotifications && (
              <EmptyNotifications>
                <Icon icon="notFoundData" size={8} color="neutral500" />
                <Text textColor="neutral500">{noNotifications}</Text>
              </EmptyNotifications>
            )}
          </Content>
        </Container>
      </Menu>
    </>
  );
};
