import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Notification from "./Notification";
import { BrowserRouter } from "react-router-dom";

const testProps = {
    notification: {
        id: 1,
        type: 'high',
        title: 'foo',
        description: 'bar',
        read: false,
        metricUrl: 'https://foo'
    },
    handleNotificationClick: jest.fn()
};

test("renders the Notifications", async () => {
  await act(async () => {
    await render(<Notification {...testProps} />, { wrapper: BrowserRouter });
  });
  const title = screen.getByText(/foo/i);
  const description = screen.getByText(/bar/i);
  const checkbox = screen.getByRole("checkbox", { name: "Mark read" });
  const unread = screen.getByText(/unread/i);
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(unread).toBeInTheDocument();
});

it("changes checkbox value", async () => {
    await act(async () => {
        await render(<Notification {...testProps} />, { wrapper: BrowserRouter });
      });
    const checkbox = screen.getByRole("checkbox", { name: "Mark read" });
  
    await act(async () => {
      await userEvent.click(screen.getByRole("checkbox"));
    });
  
    expect(screen.getByRole("checkbox")).toBeChecked();
});
