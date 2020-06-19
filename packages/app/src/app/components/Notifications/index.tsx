import React from 'react';

import { useOvermind } from 'app/overmind';

import { Button, Icon, Element } from '@codesandbox/components';
import css from '@styled-system/css';
import { Overlay } from 'app/components/Overlay';
import { NotificationsContent } from './Content';

export const Notifications = () => {
  const {
    actions: {
      userNotifications: { notificationsClosed, notificationsOpened },
    },
    state: {
      userNotifications: {
        notificationsOpened: notificationsMenuOpened,
        unreadCount,
      },
    },
  } = useOvermind();
  return (
    <Overlay
      content={NotificationsContent}
      event="Notifications"
      isOpen={notificationsMenuOpened}
      onClose={notificationsClosed}
      onOpen={notificationsOpened}
      width={321}
    >
      {open => (
        <Button
          variant="secondary"
          css={css({
            size: 26,
            ':hover .border-for-bell': {
              background: theme => theme.colors.secondaryButton.hoverBackground,
            },
          })}
          onClick={open}
        >
          <Element
            css={css({
              position: 'relative',
            })}
          >
            <Icon name="bell" size={11} title="Notifications" />
            {unreadCount > 0 ? (
              <>
                <Element
                  css={css({
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'blues.600',
                    top: '-2px',
                    left: '6px',
                    zIndex: 10,
                  })}
                />
                <Element
                  className="border-for-bell"
                  css={css({
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'sideBar.border',
                    top: '-3px',
                    left: '5px',
                    zIndex: 9,
                  })}
                />
              </>
            ) : null}
          </Element>
        </Button>
      )}
    </Overlay>
  );
};
