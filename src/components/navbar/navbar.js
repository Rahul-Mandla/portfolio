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
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
const AppNavbar = () => (
  <React.Fragment>
    <Navbar className="navbar " bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          defaultActiveKey="/home"
          as="ul"
          className="d-flex justify-content-around w-100 p-0"
        >
          <Nav.Link as="li" href="#home">
            Home
          </Nav.Link>
          <Nav.Link as="li" href="#portfolio">
            Portfolio
          </Nav.Link>
          <Navbar.Brand className="nav_logo" href="#home">
            <img
              src={require("../../assets/pr11.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav.Link as="li" href="#packs">
            packs
          </Nav.Link>
          <Nav.Link as="li" href="#about">
            About me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
);

export default AppNavbar;
