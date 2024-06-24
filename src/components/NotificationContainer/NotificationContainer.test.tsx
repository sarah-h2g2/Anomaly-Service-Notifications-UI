import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationContainer from "./NotificationContainer";
import { BrowserRouter } from "react-router-dom";

test("renders the Notification Container", async () => {
  await act(async () => {
    await render(<NotificationContainer />, { wrapper: BrowserRouter });
  });
  const notificationHeader = screen.getByText(/Show Notifications/i);
  expect(notificationHeader).toBeInTheDocument();
});
