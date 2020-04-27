import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GuideProvider from "./components/context/guides";
import ServicesProvider from "./components/context/services";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <GuideProvider>
    <ServicesProvider>
      <Router>
        <App />
      </Router>
    </ServicesProvider>
  </GuideProvider>,
  document.getElementById("root")
);
