/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavLink } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        color="info"
        expand="xs"
        className="navbar-dark flex-column flex-md-row bd-navbar"
        tag="header"
      >
        <Link to="/" className="navbar-brand mr-0 mr-md-2 navbar-absolute-logo">
          Paper Kit - React
        </Link>
        <Nav className="flex-row d-none d-md-flex" navbar>
          <NavItem>
            <NavLink href="#" className="p-2">
              1.2.0
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/paper-kit-react?ref=pkr-docs-navbar"
              className="p-2"
              target="_blank"
            >
              <i className="fa fa-github" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://twitter.com/CreativeTim?ref=creativetim"
              className="p-2"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </NavLink>
          </NavItem>
        </Nav>
        <div className="navbar-nav-scroll ml-md-auto">
          <Nav className="bd-navbar-nav flex-row" navbar>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar-upgrade-pro"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship" /> Upgrade to PRO
              </Button>
            </NavItem>
            <NavItem>
              <Link to="/documentation" className="nav-link">
                <i className="nc-icon nc-paper" /> Documentation
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                <i className="nc-icon nc-tv-2" /> Live Preview
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/creativetimofficial/paper-kit-react/issues?ref=creativetim"
                target="_blank"
              >
                <i className="nc-icon nc-delivery-fast" /> Report issue
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default Header;
