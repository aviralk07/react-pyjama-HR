import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import "./style.css";

function NavScrollExample(props) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [showNavbar, setShowNavbar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setShowNavbar(true);
  }, []);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isLoginPage ? "showdown" : ""} ${
        !isLoginPage && showNavbar ? "" : "box-shadow"
      }${isNavOpen ? "full-height" : ""}`}
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
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className={`custom-toggle ${isNavOpen ? "cross-icon" : ""}`}
              onClick={handleToggle}
            />
            <Navbar.Collapse
              id="navbarScroll"
              className={`${isNavOpen ? "show" : ""}`}
            >
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
                className="nav-link-item nav-link-item1 ml-3 "
              >
                Login
              </Nav.Link>
              <RouterLink to="/signup">
                <Button className="btn1" onClick={props.signupButtonClick}>
                  {props.signupText}
                  <span className="arrow-icon-hidden">
                    <ArrowCircleRight size={30} color="#FFFFFF" weight="fill" />
                  </span>
                </Button>
              </RouterLink>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
