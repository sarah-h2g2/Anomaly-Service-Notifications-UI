import React from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Notification from "./Notification";
import {
  getAllUnreadNotifications,
  markAllNotificationsRead,
  markNotificationRead,
} from "../../utils/utils";
import { Statuses } from '../../types/types';
import { INotification } from "../../types/types";
import "./Notifications.css";

interface NotificationsProps {
  active: boolean;
  modalAnimation: string;
  onClickHanlder: () => void;
}

const Notifications = ({
  active,
  modalAnimation,
  onClickHanlder,
}: NotificationsProps) => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = React.useState<INotification[]>([]);
  const [markAllRead, setMarkAllRead] = React.useState(false);
  const [status, setStatus] = React.useState({
    type: Statuses.Idle,
    errorMessage: "",
  });
  const contentRef = React.useRef<HTMLInputElement | null>(null);
  const mainRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllUnreadNotifications();
        setNotifications(response as INotification[]);
        setStatus({ type: Statuses.Submitted, errorMessage: "" });
      } catch (e) {
        const err = e as Error;
        const errorMessage = err.message;
        setStatus({ type: Statuses.Error, errorMessage });
      }
    };
    getData();
  }, []);

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsRead();
      setMarkAllRead(true);
      setNotifications([]);
    } catch (e) {
      const err = e as Error;
      const errorMessage = err.message;
      setStatus({ type: Statuses.Error, errorMessage });
    }
  };

  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mainRef.current && !mainRef.current.contains(e.target as HTMLElement)) {
      onClickHanlder();
    }
  };

  const handleNotificationClick = async (id: number) => {
    try {
      await markNotificationRead(id);
      const updatedNotifications = notifications.filter(
        (notification) => notification.id !== id
      );
      setNotifications(updatedNotifications as INotification[]);
      navigate("./metrics");
      setStatus({ type: Statuses.Submitted, errorMessage: "" });
    } catch (e) {
      const err = e as Error;
      const errorMessage = err.message;
      setStatus({ type: Statuses.Error, errorMessage });
    }
  };

  return (
    <div className="notifications">
      <header>
        <div className="notifications-button">
          <button onClick={onClickHanlder}>{`${
            active ? "Hide" : "Show"
          } Notifications`}</button>
        </div>
      </header>
      {active && (
        <Drawer
          modalAnimation={modalAnimation}
          contentRef={contentRef}
          markAllRead={markAllRead}
          handleMarkAllRead={handleMarkAllRead}
          onClose={onClose}
          mainRef={mainRef}
          errorMessage={status.errorMessage}
        >
          <ul>
            {notifications.map((notification) => {
              return (
                <li key={notification.id}>
                  <Notification
                    notification={notification}
                    handleNotificationClick={handleNotificationClick}
                  />
                </li>
              );
            })}
          </ul>
        </Drawer>
      )}
    </div>
  );
};

export default Notifications;
