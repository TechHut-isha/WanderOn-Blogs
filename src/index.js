import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import Context from "./context/Blogs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>
);
