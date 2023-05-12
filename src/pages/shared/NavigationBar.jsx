import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        className="py-3 sticky-top"
        bg="light"
        variant="light"
        expand="lg"
        style={{ opacity: "0.94" }}
      >
        <Container>
          <NavLink to={"/"}>
            <img
              style={{ width: "3rem" }}
              src={logo}
              className="img-fluid"
              alt="Logo of this page"
            ></img>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/about"}
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/services"}
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center">
              <Link
                className="btn btn-outline-warning px-3"
                to={"/appointment"}
              >
                Appointment
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
