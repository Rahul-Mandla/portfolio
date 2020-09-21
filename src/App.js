import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import AppNavbar from "./components/navbar/navbar";
import Home from "./containers/home/home";
import Portfolio from "./containers/portfolio/portfolio";
import About from "./containers/about/about";
function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
