import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";
import { BrowserRouter } from "react-router-dom";

const testProps = {
  active: true,
  modalAnimation: "slide-down",
  onClickHanlder: jest.fn(),
};

test("renders the show Notifications button when drawer is close", async () => {
  const propsWithInactiveStatus = {
    ...testProps,
    active: false,
  };
  await act(async () => {
    await render(<Notifications {...propsWithInactiveStatus} />, {
      wrapper: BrowserRouter,
    });
  });
  const notificationHeader = screen.getByText(/Show Notifications/i);
  expect(notificationHeader).toBeInTheDocument();
});

test("renders the hide Notifications button when drawer is open", async () => {
  await act(async () => {
    await render(<Notifications {...testProps} />, { wrapper: BrowserRouter });
  });
  const notificationHeader = screen.getByText(/Hide Notifications/i);
  expect(notificationHeader).toBeInTheDocument();
});

test("renders unread notitications", async () => {
  await act(async () => {
    await render(<Notifications {...testProps} />, { wrapper: BrowserRouter });
  });
  const notification = screen.getByText(/Publishing service is returning 500/i);
  expect(notification).toBeInTheDocument();
});

test("does not render notitications when closed", async () => {
  const propsWithInactiveStatus = {
    ...testProps,
    active: false,
  };
  await act(async () => {
    await render(<Notifications {...propsWithInactiveStatus} />, {
      wrapper: BrowserRouter,
    });
  });
  const notification = screen.queryByText(
    /Publishing service is returning 500/i
  );
  expect(notification).not.toBeInTheDocument();
});

test("notification click handler is fired", async () => {
  await act(async () => {
    await render(<Notifications {...testProps} />, { wrapper: BrowserRouter });
  });

  await act(async () => {
    await fireEvent.click(screen.getByRole("button"));
  });

  const notification = screen.getByText(/Publishing service is returning 500/i);
  expect(notification).toBeInTheDocument();
});
