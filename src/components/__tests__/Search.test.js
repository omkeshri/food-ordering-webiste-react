import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import Mock_Data from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

test("should render body ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole("button", {name : "Search"});
  expect(searchButton).toBeInTheDocument();
});
