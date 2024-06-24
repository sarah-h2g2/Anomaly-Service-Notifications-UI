import { INotification } from "../../types/types";
import "./Notifications.css";

interface NotificationProps {
  notification: INotification;
  handleNotificationClick: (id: number) => void;
}

const Notification = ({
  notification,
  handleNotificationClick,
}: NotificationProps) => {
  return (
    <div
      className="notification"
      onClick={() => handleNotificationClick(notification.id)}
    >
      <span
        className={`notification-type ${
          notification?.type === "high" ? "high" : "low"
        }`}
      ></span>
      <p className="title">
        {notification?.title}{" "}
        <span
          className={`read-badge ${notification?.read ? "read" : "unread"}`}
        >
          {notification?.read ? "read" : "unread"}
        </span>
      </p>
      <span className="description">{notification?.description}</span>
      {!notification?.read && (
        <label className="mark-read">
          <input
            type="checkbox"
            id="readStatus"
            name="readStatus"
            checked={true}
            readOnly={true}
          />
          Mark <span className="read">read</span>
        </label>
      )}
    </div>
  );
};

export default Notification;
