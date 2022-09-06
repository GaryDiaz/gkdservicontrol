import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "../node_modules/metro4/build/css/metro-all.min.css";
import "../node_modules/metro4/build/js/metro";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
