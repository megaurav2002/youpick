import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Header from "./header/Header";

ReactDOM.render(
  <div>
    <Header />
    <div className="content">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
