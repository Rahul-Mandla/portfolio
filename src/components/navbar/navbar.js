// import React from 'react';
// import "./navbar.css";
// const Navbar = () => (
//     <React.Fragment>
//        <ul className="navbar">
//            <li>Home</li>
//            <li>Portfolio</li>
//            <li>
//                <img className="nav_logo"
//                src={require("../../assets/pr11.png")}/>
//            </li>
//            <li>Packs</li>
//            <li>About</li>
//            </ul>
//     </React.Fragment>
// );
// export default Navbar;

import React from "react";
import { Navlink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
const AppNavbar = () => (
  <React.Fragment>
    <Navbar fixed="top" className="navbar text-center" bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          defaultActiveKey="/home"
          as="ul"
          className="d-flex justify-content-around w-100 p-0"
        >
          <Link to="/">
            <Nav.Link as="li">Home</Nav.Link>
          </Link>
          <Link to="/Portfolio">
            <Nav.Link as="li">Portfolio</Nav.Link>
          </Link>
          <Link to="/">
            <Navbar.Brand className="nav_logo">
              <img
                src={require("../../assets/pr12.png")}
                width="30"
                height="30"
                className="d-inline-block align-top nav_logo"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Link to="/packs">
            <Nav.Link as="li">packs</Nav.Link>
          </Link>
          <Link to="/about">
            <Nav.Link as="li">About me</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
);

export default AppNavbar;
