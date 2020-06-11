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
/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const code1 = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar color="primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Navbar
          </NavbarBrand>
          <button
            className="navbar-toggler"
            id="navbarNav"
            type="button"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setBodyClick(true);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNav">
            <Nav navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="disabled"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const code2 = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar color="primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Navbar
          </NavbarBrand>
          <button
            className="navbar-toggler"
            id="navbarNavDropdown"
            type="button"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setBodyClick(true);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
            <Nav navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  Dropdown link
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeColor = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar color="primary" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Primary color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-primary"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-primary">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-sun-fog-29" />
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-single-02" />
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-settings" />
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Info color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-info"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-info">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-sun-fog-29" />
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-single-02" />
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-settings" />
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar color="success" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Success color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-success"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-success">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-sun-fog-29" />
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-single-02" />
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-settings" />
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar color="warning" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Warning color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-warning"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-warning">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-sun-fog-29" />
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-single-02" />
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-settings" />
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar color="danger" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Danger color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-danger"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-danger">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-sun-fog-29" />
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-single-02" />
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-settings" />
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <div
        className="navigation-example"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ilya-yakover.jpg") + ")"
        }}
      >
        <Navbar className="navbar-transparent" expand="md">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Transparent
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler-right"
              id="navbar-transparent"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar" />
              <span className="navbar-toggler-bar" />
              <span className="navbar-toggler-bar" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-transparent">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    <i
                      aria-hidden={true}
                      className="fa fa-facebook-official"
                    />
                      Facebook
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    <i aria-hidden={true} className="fa fa-twitter" />
                      Twitter
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    <i aria-hidden={true} className="fa fa-instagram" />
                      Instagram
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Example`;

const codeContainers = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      <Navbar className="navbar-light bg-primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Navbar
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeDefault = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      <Navbar className="navbar-light bg-primary">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Default
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeFixedTop = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      <Navbar className="fixed-top navbar-light bg-primary">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Fixed top
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeFixedBottom = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      <Navbar className="fixed-bottom navbar-light bg-primary">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Fixed bottom
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeStickyTop = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      <Navbar className="sticky-top navbar-light bg-primary">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Sticky top
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeHidden = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar color="primary" expand="lg">
        <Container>
          <button
            className="navbar-toggler"
            id="navbarTogglerDemo01"
            type="button"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setBodyClick(true);
            }}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Hidden brand
            </NavbarBrand>
            <Nav className="mr-auto mt-2 mt-lg-0" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Link
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="disabled"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Form className="form-inline ml-auto">
              <FormGroup className="has-white">
                <Input placeholder="Search" type="text" />
              </FormGroup>
            </Form>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Example`;

const codeNavbar = `import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function Example() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
        <Navbar color="primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo02"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo02">
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="has-white">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Example`;

function NavbarDocs() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <h1 className="bd-title" id="content">
        Navbar
      </h1>
      <p className="bd-lead">
        Documentation and examples for Bootstrap's powerful, responsive
        navigation header, the navbar. Includes support for branding,
        navigation, and more, including support for our collapse plugin.
      </p>
      <h2 id="how-it-works">How it works</h2>
      <p>
        Here’s what you need to know before getting started with the navbar:
      </p>
      <ul>
        <li>
          Navbars require a wrapping{" "}
          <code className="highlighter-rouge">Navbar</code> component with{" "}
          <code className="highlighter-rouge">
            {"expand={'sm'|'md'|'lg'|'xl'}"}
          </code>{" "}
          prop for responsive collapsing and <a href="#color-schemes">color</a>{" "}
          prop for color scheme classes.
        </li>
        <li>
          Navbars and their contents are fluid by default. Use{" "}
          <a href="#containers">optional containers</a> to limit their
          horizontal width.
        </li>
        <li>
          Navbars are responsive by default, but you can easily modify them to
          change that.
        </li>
        <li>
          Navbars are hidden by default when printing. Force them to be printed
          by adding <code className="highlighter-rouge">.d-print</code> to the{" "}
          <code className="highlighter-rouge">Navbar</code>.
        </li>
      </ul>
      <p>Read on for an example and list of supported sub-components.</p>
      <h3 id="nav">Nav</h3>
      <p>
        <b>
          Navigation in navbars will also grow to occupy as much horizontal
          space as possible
        </b>{" "}
        to keep your navbar contents securely aligned.
      </p>
      <p>
        Active states—with <code className="highlighter-rouge">active</code>{" "}
        prop to indicate the current page can be applied directly to{" "}
        <code className="highlighter-rouge">NavLink</code>s or their immediate
        parent <code className="highlighter-rouge">NavItem</code>s.
      </p>
      <div className="bd-example" data-example-id="">
        <Navbar color="primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarNav"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNav">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {code1}
      </SyntaxHighlighter>
      <p>
        You may also utilize dropdowns in your navbar nav. Dropdown menus
        require a wrapping element for positioning, so be sure to use separate
        and nested elements for{" "}
        <code className="highlighter-rouge">.nav-item</code>
        and <code className="highlighter-rouge">.nav-link</code>
        as shown below.
      </p>
      <div className="bd-example" data-example-id="">
        <Navbar color="primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarNavDropdown"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Pricing
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbarDropdownMenuLink"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    Dropdown link
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {code2}
      </SyntaxHighlighter>
      <h2 id="color-schemes">Color schemes</h2>
      <p>
        Theming the navbar has never been easier thanks to the combination of
        theming classes and{" "}
        <code class="highlighter-rouge">background-color</code> utilities.
        Choose from <code class="highlighter-rouge">light</code> for use with
        light background colors, or <code class="highlighter-rouge">dark</code>{" "}
        for dark background colors. Then, customize with{" "}
        <code class="highlighter-rouge">{`color={*}`}</code> prop.
      </p>
      <div className="bd-example">
        <Navbar color="primary" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Primary color
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="example-navbar-primary"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setBodyClick(true);
                }}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-primary">
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-sun-fog-29" />
                    <p>Discover</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-single-02" />
                    <p>Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-settings" />
                    <p>Settings</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar color="info" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Info color
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="example-navbar-info"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setBodyClick(true);
                }}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-info">
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-sun-fog-29" />
                    <p>Discover</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-single-02" />
                    <p>Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-settings" />
                    <p>Settings</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar color="success" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Success color
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="example-navbar-success"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setBodyClick(true);
                }}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-success">
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-sun-fog-29" />
                    <p>Discover</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-single-02" />
                    <p>Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-settings" />
                    <p>Settings</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar color="warning" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Warning color
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="example-navbar-warning"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setBodyClick(true);
                }}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-warning">
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-sun-fog-29" />
                    <p>Discover</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-single-02" />
                    <p>Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-settings" />
                    <p>Settings</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar color="danger" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Danger color
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="example-navbar-danger"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setBodyClick(true);
                }}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-danger">
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-sun-fog-29" />
                    <p>Discover</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-single-02" />
                    <p>Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-settings" />
                    <p>Settings</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <div
          className="navigation-example"
          style={{
            backgroundImage:
              "url(" + require("assets/img/ilya-yakover.jpg") + ")",
          }}
        >
          <Navbar className="navbar-transparent" expand="md">
            <Container>
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Transparent
              </NavbarBrand>
              <button
                className="navbar-toggler navbar-toggler-right"
                id="navbar-transparent"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setBodyClick(true);
                }}
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-transparent">
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i
                        aria-hidden={true}
                        className="fa fa-facebook-official"
                      />{" "}
                      Facebook
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i aria-hidden={true} className="fa fa-twitter" /> Twitter
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i aria-hidden={true} className="fa fa-instagram" />{" "}
                      Instagram
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeColor}
      </SyntaxHighlighter>
      <h2 id="containers">Containers</h2>
      <p>
        When the container is within your navbar, its horizontal padding is
        removed at breakpoints lower than your specified{" "}
        <code class="highlighter-rouge">
          expand={"sm" | "md" | "lg" | "xl"}
        </code>{" "}
        prop. This ensures we’re not doubling up on padding unnecessarily on
        lower viewports when your navbar is collapsed.
      </p>
      <div className="bd-example" data-example-id="">
        <Navbar className="navbar-light bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Navbar
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeContainers}
      </SyntaxHighlighter>
      <h2 id="placement">Placement</h2>
      <p>
        Use our <code>position utilities</code> to place navbars in non-static
        positions. Choose from fixed to the top, fixed to the bottom, or
        stickied to the top (scrolls with the page until it reaches the top,
        then stays there). Fixed navbars use{" "}
        <code class="highlighter-rouge">position: fixed</code>, meaning they’re
        pulled from the normal flow of the DOM and may require custom CSS (e.g.,{" "}
        <code class="highlighter-rouge">padding-top</code> on the{" "}
        <code class="highlighter-rouge">&lt;body&gt;</code>) to prevent overlap
        with other elements.
      </p>
      <p>
        Also note that{" "}
        <strong>
          <code class="highlighter-rouge">.sticky-top</code> uses{" "}
          <code class="highlighter-rouge">position: sticky</code>, which{" "}
          <a
            href="https://caniuse.com/#feat=css-sticky?ref=creativetim"
            target="_blank"
          >
            isn’t fully supported in every browser
          </a>
        </strong>
        .
      </p>
      <div className="bd-example" data-example-id="">
        <Navbar className="navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Default
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeDefault}
      </SyntaxHighlighter>
      <div className="bd-example" data-example-id="">
        <Navbar className="fixed-top navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Fixed top
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeFixedTop}
      </SyntaxHighlighter>
      <div className="bd-example" data-example-id="">
        <Navbar className="fixed-bottom navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Fixed bottom
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeFixedBottom}
      </SyntaxHighlighter>
      <div className="bd-example" data-example-id="">
        <Navbar className="sticky-top navbar-light bg-primary">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Sticky top
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeStickyTop}
      </SyntaxHighlighter>
      <h2 id="responsive-behaviors">Responsive behaviors</h2>
      <p>
        Navbars can utilize <code class="highlighter-rouge">NavbarToggler</code>
        , <code class="highlighter-rouge">NavbarCollapse</code>, and{" "}
        <code class="highlighter-rouge">
          expand={"sm" | "md" | "lg" | "xl"}
        </code>{" "}
        to change when their content collapses behind a button. In combination
        with other utilities, you can easily choose when to show or hide
        particular elements.
      </p>
      <p>
        For navbars that never collapse, add the{" "}
        <code class="highlighter-rouge">expand</code> prop on the navbar. For
        navbars that always collapse, don’t add{" "}
        <code class="highlighter-rouge">expand</code> prop.
      </p>
      <h3 id="toggler">Toggler</h3>
      <p>
        Navbar togglers are left-aligned by default, but should they follow a
        sibling element like a{" "}
        <code class="highlighter-rouge">NavbarBrand</code>, they’ll
        automatically be aligned to the far right. Reversing your markup will
        reverse the placement of the toggler. Below are examples of different
        toggle styles.
      </p>
      <p>
        With no <code className="highlighter-rouge">NavbarBrand</code>
        shown in lowest breakpoint:
      </p>
      <div className="bd-example" data-example-id="">
        <Navbar color="primary" expand="lg">
          <Container>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo01"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Hidden brand
              </NavbarBrand>
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="has-white">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeHidden}
      </SyntaxHighlighter>
      <p>With a brand name shown on the left and toggler on the right:</p>
      <div className="bd-example" data-example-id="">
        <Navbar color="primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Navbar
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo02"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo02">
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Form className="form-inline ml-auto">
                <FormGroup className="has-white">
                  <Input placeholder="Search" type="text" />
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeNavbar}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        Please refer to{" "}
        <a
          href="https://reactstrap.github.io/components/navbar/?ref=creativetim"
          target="_blank"
        >
          reactstrap navbar documentation
        </a>
        .
      </p>
    </>
  );
}

export default NavbarDocs;
