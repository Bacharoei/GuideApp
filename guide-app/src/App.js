import React from "react";

// react-router-dom
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SingleGuide from "./pages/Guide";
import GuideList from "./pages/Guides";
import ErrorPage from "./pages/Error";
import About from "./pages/About";
//

// components
import Navbar from "./components/Navbar/Navbar";
//

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/guides/:id" children={<SingleGuide />}></Route>
        <Route path="/guides">
          <GuideList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route component={ErrorPage}>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}
