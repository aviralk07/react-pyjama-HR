// NavScrollExample.jsx

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import "./style.css";
import { ArrowCircleRight } from "@phosphor-icons/react";

function NavScrollExample(props) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(true);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isLoginPage ? "showdown" : ""} ${
        !isLoginPage && showNavbar ? "box-shadow" : ""
      }`}
    >
      <Container fluid>
        {isLoginPage && (
          <Navbar.Brand className="nav-bar-img" as={RouterLink} to="/">
            <img src={props.logo} alt="" />
          </Navbar.Brand>
        )}
        {!isLoginPage && (
          <>
            <Navbar.Brand className="nav-bar-img" href="#">
              <img src={props.logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="left-align-nav">
                <Link
                  to="Feature"
                  spy={true}
                  smooth={true}
                  duration={3000}
                  href="#Feature"
                  className="nav-link-item mr-auto link1"
                >
                  Features
                </Link>
                <Nav.Link href="#Blog" className="nav-link-item">
                  Blog
                </Nav.Link>
                <Nav.Link href="#Careers" className="nav-link-item">
                  Careers
                </Nav.Link>
                <Nav.Link href="#Pricing" className="nav-link-item">
                  Pricing
                </Nav.Link>
              </Nav>
              <Nav.Link
                as={RouterLink}
                to="/login"
                className="nav-link-item nav-link-item1 ml-5"
              >
                Login
              </Nav.Link>
              <Button className="btn1 ">
                {props.signupText}
                <span className="arrow-icon-hidden">
                  <ArrowCircleRight size={30} color="#FFFFFF" weight="fill" />
                </span>
              </Button>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
