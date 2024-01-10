import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",
    {
        id: "parent"
    },
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello World"), React.createElement("h2", {}, "Hello World H2 Tag!")]
    )
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

