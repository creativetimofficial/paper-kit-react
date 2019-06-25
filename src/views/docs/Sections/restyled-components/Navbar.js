import React from "react";

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

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
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
            <code className="highlighter-rouge">.navbar</code>
            with{" "}
            <code className="highlighter-rouge">
              {`.navbar-expand{-sm|-md|-lg|-xl}`}
            </code>
            for responsive collapsing and{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              color scheme
            </a>
            classes.
          </li>
          <li>
            Navbars and their contents are fluid by default. Use{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              optional containers
            </a>
            to limit their horizontal width.
          </li>
          <li>
            Use our <a href="/docs/1.0/utilities/spacing/">spacing</a>
            and <a href="/docs/1.0/utilities/flex/">flex</a>
            utility classes for controlling spacing and alignment within
            navbars.
          </li>
          <li>
            Navbars are responsive by default, but you can easily modify them to
            change that. Responsive behavior depends on our Collapse JavaScript
            plugin.
          </li>
          <li>
            Navbars are hidden by default when printing. Force them to be
            printed by adding{" "}
            <code className="highlighter-rouge">.d-print</code>
            to the <code className="highlighter-rouge">.navbar</code>. See the{" "}
            <a href="/docs/1.0/utilities/display/">display</a>
            utility class.
          </li>
          <li>
            Ensure accessibility by using a{" "}
            <code className="highlighter-rouge">{`<nav>`}</code>
            element or, if using a more generic element such as a{" "}
            <code className="highlighter-rouge">{`<div>`}</code>, add a{" "}
            <code className="highlighter-rouge">role="navigation"</code>
            to every navbar to explicitly identify it as a landmark region for
            users of assistive technologies.
          </li>
        </ul>
        <p>Read on for an example and list of supported sub-components.</p>
        <h3 id="nav">Nav</h3>
        <p>
          Navbar navigation links build on our{" "}
          <code className="highlighter-rouge">.nav</code>
          options with their own modifier class and require the use of{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            toggler classes
          </a>
          for proper responsive styling.{" "}
          <strong>
            Navigation in navbars will also grow to occupy as much horizontal
            space as possible
          </strong>
          to keep your navbar contents securely aligned.
        </p>
        <p>
          Active states—with <code className="highlighter-rouge">.active</code>
          —to indicate the current page can be applied directly to{" "}
          <code className="highlighter-rouge">.nav-link</code>s or their
          immediate parent <code className="highlighter-rouge">.nav-item</code>
          s.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                aria-controls="navbarNav"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbarNav"
                data-toggle="collapse"
                id="navbarNav"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse id="navbarNav" navbar toggler="#navbarNav">
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
        </div>
        <p>
          You may also utilize dropdowns in your navbar nav. Dropdown menus
          require a wrapping element for positioning, so be sure to use separate
          and nested elements for{" "}
          <code className="highlighter-rouge">.nav-item</code>
          and <code className="highlighter-rouge">.nav-link</code>
          as shown below.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                aria-controls="navbarNavDropdown"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbarNavDropdown"
                data-toggle="collapse"
                id="navbarNavDropdown"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbarNavDropdown"
                navbar
                toggler="#navbarNavDropdown"
              >
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
                      aria-expanded={false}
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
        </div>
        <h2 id="color-schemes">Color schemes</h2>
        <p>
          Theming the navbar has never been easier thanks to the combination of
          theming classes and{" "}
          <code className="highlighter-rouge">background-color</code>
          utilities. Choose from{" "}
          <code className="highlighter-rouge">.navbar-light</code>
          for use with light background colors, or{" "}
          <code className="highlighter-rouge">.navbar-dark</code>
          for dark background colors. Then, customize with{" "}
          <code className="highlighter-rouge">.bg-*</code>
          utilities.
        </p>
        <div className="bd-example">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Primary color
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#example-navbar-primary"
                  data-toggle="collapse"
                  id="example-navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <UncontrolledCollapse
                id="example-navbar-primary"
                navbar
                toggler="#example-navbar-primary"
              >
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
          <Navbar className="bg-info" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Info color
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#example-navbar-primary"
                  data-toggle="collapse"
                  id="example-navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <UncontrolledCollapse
                id="example-navbar-primary"
                navbar
                toggler="#example-navbar-primary"
              >
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
          <Navbar className="bg-success" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Success color
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#example-navbar-primary"
                  data-toggle="collapse"
                  id="example-navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <UncontrolledCollapse
                id="example-navbar-primary"
                navbar
                toggler="#example-navbar-primary"
              >
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
          <Navbar className="bg-warning" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Warning color
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#example-navbar-primary"
                  data-toggle="collapse"
                  id="example-navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <UncontrolledCollapse
                id="example-navbar-primary"
                navbar
                toggler="#example-navbar-primary"
              >
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
          <Navbar className="bg-danger" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Danger color
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#example-navbar-primary"
                  data-toggle="collapse"
                  id="example-navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <UncontrolledCollapse
                id="example-navbar-primary"
                navbar
                toggler="#example-navbar-primary"
              >
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
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-transparent"
                  data-toggle="collapse"
                  id="navbar-transparent"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  id="navbar-transparent"
                  navbar
                  toggler="#navbar-transparent"
                >
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
        </div>
        <h2 id="containers">Containers</h2>
        <p>
          When the container is within your navbar, its horizontal padding is
          removed at breakpoints lower than your specified{" "}
          <code className="highlighter-rouge">
            {`.navbar-expand{-sm|-md|-lg|-xl}`}
          </code>
          class. This ensures we’re not doubling up on padding unnecessarily on
          lower viewports when your navbar is collapsed.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar className="navbar-light bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <h2 id="placement">Placement</h2>
        <p>
          Use our <a href="/docs/1.0/utilities/position/">position utilities</a>
          to place navbars in non-static positions. Choose from fixed to the
          top, fixed to the bottom, or stickied to the top (scrolls with the
          page until it reaches the top, then stays there). Fixed navbars use{" "}
          <code className="highlighter-rouge">position: fixed</code>, meaning
          they’re pulled from the normal flow of the DOM and may require custom
          CSS (e.g., <code className="highlighter-rouge">padding-top</code>
          on the <code className="highlighter-rouge">{`<body>`}</code>) to
          prevent overlap with other elements.
        </p>
        <p>
          Also note that{" "}
          <strong>
            <code className="highlighter-rouge">.sticky-top</code>
            uses <code className="highlighter-rouge">position: sticky</code>,
            which{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              isn’t fully supported in every browser
            </a>
          </strong>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar className="navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Default
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <div className="bd-example" data-example-id="">
          <Navbar className="fixed-top navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Fixed top
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <div className="bd-example" data-example-id="">
          <Navbar className="fixed-bottom navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Fixed bottom
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <div className="bd-example" data-example-id="">
          <Navbar className="sticky-top navbar-light bg-primary">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Sticky top
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <h2 id="responsive-behaviors">Responsive behaviors</h2>
        <p>
          Navbars can utilize{" "}
          <code className="highlighter-rouge">.navbar-toggler</code>,{" "}
          <code className="highlighter-rouge">.navbar-collapse</code>, and{" "}
          <code className="highlighter-rouge">
            {`.navbar-expand{-sm|-md|-lg|-xl}`}
          </code>
          classes to change when their content collapses behind a button. In
          combination with other utilities, you can easily choose when to show
          or hide particular elements.
        </p>
        <p>
          For navbars that never collapse, add the{" "}
          <code className="highlighter-rouge">.navbar-expand</code>
          class on the navbar. For navbars that always collapse, don’t add any{" "}
          <code className="highlighter-rouge">.navbar-expand</code>
          class.
        </p>
        <h3 id="toggler">Toggler</h3>
        <p>
          Navbar togglers are left-aligned by default, but should they follow a
          sibling element like a{" "}
          <code className="highlighter-rouge">.navbar-brand</code>, they’ll
          automatically be aligned to the far right. Reversing your markup will
          reverse the placement of the toggler. Below are examples of different
          toggle styles.
        </p>
        <p>
          With no <code className="highlighter-rouge">.navbar-brand</code>
          shown in lowest breakpoint:
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#example-navbar"
                data-toggle="collapse"
                id="example-navbar"
                type="button"
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
              <UncontrolledCollapse
                id="navbarTogglerDemo01"
                navbar
                toggler="#navbarTogglerDemo01"
              >
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
        </div>
        <p>With a brand name shown on the left and toggler on the right:</p>
        <div className="bd-example" data-example-id="">
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Navbar
              </NavbarBrand>
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#example-navbar"
                data-toggle="collapse"
                id="example-navbar"
                type="button"
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
              <UncontrolledCollapse
                id="navbarTogglerDemo02"
                navbar
                toggler="#navbarTogglerDemo02"
              >
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
        </div>
      </>
    );
  }
}

export default NavbarDocs;
