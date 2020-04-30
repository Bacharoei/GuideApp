import React from "react";
// react-router-dom
import { Route, Switch } from "react-router-dom";
//
// components
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import ErrorPage from "./pages/Error";
import SingleGuide from "./pages/Guide";
import GuideList from "./pages/Guides";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

// react-router-dom

// Pages

//

// components
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
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="*" component={ErrorPage}>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}
