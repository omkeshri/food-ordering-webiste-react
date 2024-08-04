import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heading) // will give an object react

// //React.createElement => React element-JS Object => HTML Element(render)
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
// ]); // CREATE ELEMENT USING REACT

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// JSX => React.createElement => React element-JS Object => HTML Element(render)
// const jsxHeading = (<h1 id = "heading" className="head1" tabIndex="1">Hello World from JSX!</h1>) // for multiline use braces

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Functional Component
// const Title = ()=>(
//     <h1 className="head">
//         Namaste
//     </h1>
// );

// const data = 10000;

// // Component Composition (component inside component)
// const HeadingComponent = () =>(
//     <div id="container">
//         <Title/> {/*can use {Title()} or <Title></Title>*/ }
//         {data}
//         <h1 className="heading">Hello World from functional Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />)

// --------------------------------------------------------------------------------------------

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
