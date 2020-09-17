import React from "react";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./components/navbar/navbar";
import Home from "./containers/home/home";
import Portfolio from "./containers/portfolio/portfolio";
import About from "./containers/about/about";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
      </header>
      {/* <Home/> */}
      {/* <About/> */}
      <Portfolio />
    </div>
  );
}

export default App;
