import React from "react";
import "./Drawer.css";

interface DrawerProps {
  children: JSX.Element;
  modalAnimation: string;
  contentRef: React.Ref<HTMLDivElement>;
  handleMarkAllRead: () => void;
  markAllRead: boolean;
  errorMessage?: string;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
  mainRef: React.Ref<HTMLDivElement>;
}

const Drawer = ({
  children,
  modalAnimation,
  contentRef,
  handleMarkAllRead,
  mainRef,
  onClose,
  markAllRead,
  errorMessage = "",
}: DrawerProps) => {
  const isError = !!errorMessage;
  return (
    <div className="drawer" ref={contentRef} onClick={onClose}>
      <div className={`drawer-main ${modalAnimation}`} ref={mainRef}>
        {isError && (
          <span role="alert" className="error">
            {errorMessage}
          </span>
        )}
        <div className="drawer-title">
          {" "}
          <h2>
            {markAllRead
              ? "No Unread Notifications"
              : "All Unread Notifications"}
          </h2>
          {!markAllRead && (
            <label className="mark-all-read">
              <input
                type="checkbox"
                name="markAllRead"
                id="markAllRead"
                value="markAllRead"
                onChange={handleMarkAllRead}
              />
              Mark All Read
            </label>
          )}
        </div>
        <div className="drawer-content">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
