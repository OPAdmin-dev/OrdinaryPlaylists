import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Containers/Main";
import PageNotFound from "./Components/NotFound404";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </div>
);

export default BaseRouter;
