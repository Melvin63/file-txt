import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "..//./mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const button = screen.getByRole("button", { name: "search" });

  expect(button).toBeInTheDocument();
});
