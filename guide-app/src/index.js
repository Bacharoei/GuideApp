import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GuideProvider from "./components/context/guides";
import ServicesProvider from "./components/context/services";
import { UserProvider } from "./components/context/users";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <UserProvider>
    <GuideProvider>
      <ServicesProvider>
        <Router>
          <App />
        </Router>
      </ServicesProvider>
    </GuideProvider>
  </UserProvider>,
  document.getElementById("root")
);
