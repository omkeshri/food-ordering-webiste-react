import React from "react";
import ReactDOM from "react-dom/client";

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
const Title = ()=>(
    <h1 className="head">
        Namaste
    </h1>
);

const data = 10000;

// Component Composition (component inside component)
const HeadingComponent = () =>(
    <div id="container">
        <Title/> {/*can use {Title()} or <Title></Title>*/ }
        {data}
        <h1 className="heading">Hello World from functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)

