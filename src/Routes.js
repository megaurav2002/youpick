import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";

const FourOhFour = () => <h1>404</h1>;

const Routes = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={FourOhFour} />
    </Switch>
  </div>;

export default Routes;
