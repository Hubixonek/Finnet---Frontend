import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Root from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

useEffect(() => {
  const element = document.querySelector('p[style*="Powered by MIKR.US"]');
  if (element) {
    element.style.display = "none";
  }
}, []);
