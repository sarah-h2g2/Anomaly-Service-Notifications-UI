import { default as data } from "../data.json";

let notifications = [...data];

const mockAPI = () => {
  return Promise.resolve(notifications);
};

export const getAllUnreadNotifications = async () => {
  try {
    const response = await mockAPI();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const markNotificationRead = (id: number) => {
  const updatedNotifications = notifications.map((notification) => {
    if (notification.id === id) notification.read = true;
    return notification;
  });
  notifications = [...updatedNotifications];
  return Promise.resolve({});
};

export const markAllNotificationsRead = () => {
  const updatedNotifications = notifications.map((notification) => {
    notification.read = true;
    return notification;
  });
  notifications = [...updatedNotifications];
  return Promise.resolve({});
};
