import ReactDOM from "react-dom/client";
import "./index.scss";
import Root from "./App";
import "bootstrap/dist/css/bootstrap.css";

const element = document.querySelector(
  'p[style="position:fixed;box-sizing:border-box;bottom:25px;right:25px;height:auto;width:auto;margin:0;font-size:11px;padding:7px 20px;background:rgba(255,255,255,.6);color:rgba(0,0,0,1);border-radius:100px;-webkit-backdrop-filter: blur(5px);backdrop-filter: blur(5px);"]'
);

if (element) {
  element.remove();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
