import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./header/Header";

ReactDOM.render(
  <div>
    <Header />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
