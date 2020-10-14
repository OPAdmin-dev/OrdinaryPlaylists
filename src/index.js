import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/Main";
import PageNotFound from "./Components/NotFound404";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.less";
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" component={App}>
        <Route component={PageNotFound} />
      </Route>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
