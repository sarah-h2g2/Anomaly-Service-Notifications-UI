import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Metrics from "./Metrics";
import { BrowserRouter } from "react-router-dom";

test("renders the metrics", async () => {
  await act(async () => {
    await render(<Metrics />, { wrapper: BrowserRouter });
  });
  const header = screen.getByText(/Metrics Details/i);
  expect(header).toBeInTheDocument();
});
