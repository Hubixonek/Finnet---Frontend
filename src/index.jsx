import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Root from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />); // Zmiana nazwy komponentu z App na Root
