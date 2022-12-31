import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement("h1", {
  id: 'heading1'
}, "Let's ignite our App");
const heading2 = React.createElement("h2", {
  id: 'heading2'
}, "App is ignited 🔥");

const container = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);