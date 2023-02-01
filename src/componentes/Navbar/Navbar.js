import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Button,
  Container
} from "reactstrap";

function NavBar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <section style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Prepaid_Standard
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          navbar
          isOpen={navbarCollapse}
        >
          <Container className="float-left">

            <Nav navbar >
              <NavItem>
                <NavLink to="/quienes-somos" tag={Link}>
                  Quienes somos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={"/planes"}
                >
                  Planes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={""}
                >
                  Cartilla
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={""}
                >
                  Centros de atención
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={""}
                >
                  Turnos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={""}
                >
                  Corporativo
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/contacto"
                >
                  Contacto
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="/register-page"
                >
                  Mi Cuenta
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href={""}
                >
                  Contratá
                </Button>
              </NavItem>
            </Nav>
          </Container>
        </Collapse>
      </section>
    </Navbar>
  );
}

export default NavBar;
