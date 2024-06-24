import React from "react";
import Notifications from "../Notifications/Notifications";
import "./NotificationContainer.css";

const NotificationContainer = () => {
  const [active, setActive] = React.useState(false);
  const [modalAnimation, setModalAnimation] = React.useState("slide-up");

  const onClickHanlder = () => {
    setActive(!active);
  };

  const close = () => {
    setModalAnimation("slide-down");
  };
  return (
    <div className="notification-container" onClick={close}>
      <Notifications
        active={active}
        modalAnimation={modalAnimation}
        onClickHanlder={onClickHanlder}
      />
    </div>
  );
};

export default NotificationContainer;
