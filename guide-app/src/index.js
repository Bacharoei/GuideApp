import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GuideProvider from "./components/context/guides";
import ServiceProvider from "./components/context/services";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <GuideProvider>
    <Router>
      <App />
    </Router>
  </GuideProvider>,
  document.getElementById("root")
);
