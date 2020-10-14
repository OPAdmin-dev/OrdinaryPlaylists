import React, { useState, useEffect } from "react";
import "./App.scss";
import "./App.less";

import { HashRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
