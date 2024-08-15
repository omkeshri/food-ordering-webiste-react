import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for tobeinthedoc and else
import { BrowserRouter } from "react-router-dom"; // for link and uselocation
import { Provider } from "react-redux"; // for provider store
import appStore from "../../util/appStore";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LogIn" }); //if multiple buttons and we need to find login named button
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart🛒(0)"); // use /cart/ just for finding cart
  expect(cartItems).toBeInTheDocument();
});

it("Should change login to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "LogOut" });
  expect(logoutButton).toBeInTheDocument();
});
