import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        className="py-3 sticky-top"
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ opacity: "0.94" }}
      >
        <Container>
          <NavLink to={"/"}>
            Genius Car
            {/* <img
              style={{ width: "8rem" }}
              src={logo}
              className="img-fluid"
              alt="Logo of this page"
            ></img> */}
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
              <Link className="btn btn-primary px-3" to={"/login"}>
                Login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
