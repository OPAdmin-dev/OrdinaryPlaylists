import React, { useState, useEffect } from "react";
import "./App.scss";
import "./App.less";

import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Router basename="/React">
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
