/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
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
  Container,
  Button
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
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
      <section style={{display: "flex", flexDirection:"row"}}>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Paper Kit 2
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
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                 Quienes somos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                Planes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                 Cartilla
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                 Centros de atención
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                 Turnos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                 Corporativo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                 Contacto
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Mi cuenta
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Contrat
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </section>
    </Navbar>
  );
}

export default ExamplesNavbar;
