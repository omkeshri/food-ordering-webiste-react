import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Dashboard from "./components/DashBoard";
import Footer from "./components/Footer";
import UserContext from "./util/UserContext";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));


const AppLayout = () => {
  const [userName, setuserName] = useState("Default User");
  
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/restaurants",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
