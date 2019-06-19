import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Alert,
  Button,
  Card,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

class Index extends React.Component {
  render() {
    return (
      <>
        <div
          className=" page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/antoine-barres.jpg") + ")"
          }}
        >
          <div className=" filter" />
          <div className=" content-center">
            <Container>
              <div className=" title-brand">
                <h1 className=" presentation-title">Paper Kit 2</h1>
                <div className=" fog-low">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
                <div className=" fog-low right">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
              </div>
              <h2 className=" presentation-subtitle text-center">
                Make your mark with a Free Bootstrap 4 UI Kit!
              </h2>
            </Container>
          </div>
          <div
            className=" moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
            }}
          />
          <h6 className=" category category-absolute">
            Designed and coded by{" "}
            <a
              href="https://www.creative-tim.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="..."
                className=" creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              />
            </a>
          </h6>
        </div>
        <div className=" main">
          <div className=" section section-buttons">
            <Container>
              <div className=" title">
                <h2>Basic Elements</h2>
              </div>
              <div id="buttons">
                <div className=" title">
                  <h3>
                    Buttons <br />
                    <small>Pick your style</small>
                  </h3>
                </div>
                <Row>
                  <Col md="8">
                    <Button color="info" type="button">
                      Default
                    </Button>
                    <Button className=" btn-round" color="info" type="button">
                      Round
                    </Button>
                    <Button className=" btn-round" color="info" type="button">
                      <i className=" fa fa-heart" />
                      With Icon
                    </Button>
                    <Button
                      className=" btn-just-icon"
                      color="info"
                      type="button"
                    >
                      <i className=" fa fa-heart" />
                    </Button>
                    <Button className=" btn-link" color="info" type="button">
                      Simple
                    </Button>
                  </Col>
                </Row>
                <div className=" title">
                  <h3>
                    <small>Pick your size</small>
                  </h3>
                </div>
                <Row>
                  <Col md="8">
                    <Button color="danger" outline size="sm" type="button">
                      Small
                    </Button>
                    <Button color="danger" outline type="button">
                      Regular
                    </Button>
                    <Button color="danger" outline size="lg" type="button">
                      Large
                    </Button>
                  </Col>
                </Row>
                <div className=" title">
                  <h3>
                    <small>Pick your color</small>
                  </h3>
                </div>
                <Row>
                  <Col md="8">
                    <Button
                      className=" btn-round"
                      color="default"
                      outline
                      type="button"
                    >
                      Default
                    </Button>
                    <Button
                      className=" btn-round"
                      color="primary"
                      outline
                      type="button"
                    >
                      Primary
                    </Button>
                    <Button
                      className=" btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      Info
                    </Button>
                    <Button
                      className=" btn-round"
                      color="success"
                      outline
                      type="button"
                    >
                      Success
                    </Button>
                    <Button
                      className=" btn-round"
                      color="warning"
                      outline
                      type="button"
                    >
                      Warning
                    </Button>
                    <Button
                      className=" btn-round"
                      color="danger"
                      outline
                      type="button"
                    >
                      Danger
                    </Button>
                    <Button
                      className=" btn-outline-neutral btn-round"
                      color="default"
                      type="button"
                    >
                      Neutral
                    </Button>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md="8">
                    <Button
                      className=" btn-round"
                      color="default"
                      type="button"
                    >
                      Default
                    </Button>
                    <Button
                      className=" btn-round"
                      color="primary"
                      type="button"
                    >
                      Primary
                    </Button>
                    <Button className=" btn-round" color="info" type="button">
                      Info
                    </Button>
                    <Button
                      className=" btn-round"
                      color="success"
                      type="button"
                    >
                      Success
                    </Button>
                    <Button
                      className=" btn-round"
                      color="warning"
                      type="button"
                    >
                      Warning
                    </Button>
                    <Button className=" btn-round" color="danger" type="button">
                      Danger
                    </Button>
                    <Button
                      className=" btn-neutral btn-round"
                      color="default"
                      type="button"
                    >
                      Neutral
                    </Button>
                  </Col>
                </Row>
              </div>
              <div className=" title">
                <h3>Links</h3>
              </div>
              <Row>
                <Col md="8">
                  <Button
                    className=" btn-link"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Default
                  </Button>
                  <Button
                    className=" btn-link"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Primary
                  </Button>
                  <Button
                    className=" btn-link"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Success
                  </Button>
                  <Button
                    className=" btn-link"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Info
                  </Button>
                  <Button
                    className=" btn-link"
                    color="warning"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Warning
                  </Button>
                  <Button
                    className=" btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Danger
                  </Button>
                  <Button
                    className=" btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Neutral
                  </Button>
                </Col>
              </Row>
              <div className=" title">
                <h3>Inputs</h3>
              </div>
              <Row>
                <Col sm="3">
                  <FormGroup>
                    <Input placeholder="Default" type="text" />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup className=" has-success">
                    <Input
                      className=" form-control-success"
                      defaultValue="Success"
                      id="inputSuccess1"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <FormGroup className=" has-danger">
                    <Input
                      className=" form-control-danger"
                      defaultValue="Error"
                      id="inputDanger1"
                      type="text"
                    />
                    <div className=" form-control-feedback">
                      Sorry, that username's taken. Try another?
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="3">
                  <InputGroup>
                    <Input placeholder="Username" type="text" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i aria-hidden={true} className=" fa fa-group" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="3" sm="6">
                  <div className=" title">
                    <h3>Checkboxes</h3>
                  </div>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      Unchecked <span className=" form-check-sign" />
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input defaultChecked defaultValue="" type="checkbox" />
                      Checked <span className=" form-check-sign" />
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input defaultValue="" disabled type="checkbox" />
                      Disabled unchecked <span className=" form-check-sign" />
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input
                        defaultChecked
                        defaultValue=""
                        disabled
                        type="checkbox"
                      />
                      Disabled checked <span className=" form-check-sign" />
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg="3" sm="6">
                  <div className=" title">
                    <h3>Radio Buttons</h3>
                  </div>
                  <div className=" form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                      />
                      Radio is off <span className=" form-check-sign" />
                    </Label>
                  </div>
                  <div className=" form-check-radio">
                    <Label check>
                      <Input
                        defaultChecked
                        defaultValue="option2"
                        id="exampleRadios2"
                        name="exampleRadios"
                        type="radio"
                      />
                      Radio is on <span className=" form-check-sign" />
                    </Label>
                  </div>
                  <div className=" form-check-radio disabled">
                    <Label check>
                      <Input
                        defaultValue="option3"
                        disabled
                        id="exampleRadios3"
                        name="exampleRadios"
                        type="radio"
                      />
                      Disabled radio is off{" "}
                      <span className=" form-check-sign" />
                    </Label>
                  </div>
                  <div className=" form-check-radio disabled">
                    <Label check>
                      <Input
                        defaultChecked
                        defaultValue="option4"
                        disabled
                        id="exampleRadios4"
                        name="exampleRadioz"
                        type="radio"
                      />
                      Disabled radio is on <span className=" form-check-sign" />
                    </Label>
                  </div>
                </Col>
                <Col lg="3" sm="6">
                  <div className=" title">
                    <h3>Toggle Buttons</h3>
                  </div>
                  <div id="switches">
                    <label>
                      <input
                        data-off-color="primary"
                        data-on-color="primary"
                        data-toggle="switch"
                        defaultChecked
                        type="checkbox"
                      />
                      <span className=" toggle" />
                    </label>
                    <br />
                    <label>
                      <input
                        data-off-color="primary"
                        data-on-color="primary"
                        data-toggle="switch"
                        type="checkbox"
                      />
                      <span className=" toggle" />
                    </label>
                  </div>
                </Col>
                <Col lg="3" sm="6">
                  <div className=" title">
                    <h3>Sliders</h3>
                  </div>
                  <div className=" slider" id="sliderRegular" />
                  <br />
                  <div className=" slider slider-primary" id="sliderDouble" />
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section section-navbars">
            <Container id="menu-dropdown">
              <div className=" title">
                <h3>Menu</h3>
              </div>
              <br />
              <Row>
                <Col md="6">
                  <Navbar className=" bg-primary" expand="lg">
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Menu
                    </NavbarBrand>
                    <button
                      aria-controls="navbarSupportedContent"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-menu"
                      data-toggle="collapse"
                      id="navbar-menu"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      id="navbar-menu"
                      navbar
                      toggler="#navbar-menu"
                    >
                      <Nav className=" mr-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Link
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Link
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
                            id="dropdownMenuButton"
                            nav
                            onClick={e => e.preventDefault()}
                            role="button"
                          >
                            Dropdown
                          </DropdownToggle>
                          <DropdownMenu
                            aria-labelledby="dropdownMenuButton"
                            className=" dropdown-info"
                          >
                            <DropdownItem header>Dropdown header</DropdownItem>
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
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Separated link
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another separated link
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </UncontrolledCollapse>
                  </Navbar>
                </Col>
                <Col md="6">
                  <Navbar className=" bg-danger" expand="lg">
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Icons
                    </NavbarBrand>
                    <button
                      aria-controls="navbarSupportedContent"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-menu-icon"
                      data-toggle="collapse"
                      id="navbar-menu-icon"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      id="navbar-menu-icon"
                      navbar
                      toggler="#navbar-menu-icon"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem className=" active">
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-email-85"
                            />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-single-02"
                            />
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
                            nav
                            onClick={e => e.preventDefault()}
                            role="button"
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-settings-gear-65"
                            />
                          </DropdownToggle>
                          <DropdownMenu className=" dropdown-danger" right>
                            <DropdownItem
                              header
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Dropdown header
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
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Separated link
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </UncontrolledCollapse>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section section-navigation">
            <Container className=" tim-container">
              <div className=" title">
                <h3>Navigation Areas</h3>
              </div>
            </Container>
            <div id="navbar">
              <div
                className=" navigation-example"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ilya-yakover.jpg") + ")"
                }}
              >
                <Navbar className=" bg-primary" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Primary Color
                    </NavbarBrand>
                    <button
                      aria-controls="navbarNav"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right burger-menu"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      id="navbar-primary"
                      navbar
                      toggler="#navbar-primary"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-compass-05"
                            />
                             Discover
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-single-02"
                            />
                             Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-settings-gear-65"
                            />
                             Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
                <Navbar className=" bg-info" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Info Color
                    </NavbarBrand>
                    <button
                      aria-controls="navbarNav"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-info"
                      data-toggle="collapse"
                      id="navbar-info"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      id="navbar-info"
                      navbar
                      toggler="#navbar-info"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Discover
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
                <Navbar className=" bg-success" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Success Color
                    </NavbarBrand>
                    <button
                      aria-controls="navbarNav"
                      aria-expanded={true}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-success"
                      data-toggle="collapse"
                      id="navbar-success"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      className=" show"
                      id="navbar-success"
                      navbar
                      style={{}}
                      toggler="#navbar-success"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-compass-05"
                            />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-single-02"
                            />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" nc-icon nc-settings-gear-65"
                            />
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
                <Navbar className=" bg-warning" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Warning Color
                    </NavbarBrand>
                    <button
                      aria-controls="navbarNav"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-warning"
                      data-toggle="collapse"
                      id="navbar-warning"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      id="navbar-warning"
                      navbar
                      toggler="#navbar-warning"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-facebook-official"
                            />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i aria-hidden={true} className=" fa fa-twitter" />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-google-plus"
                            />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-instagram"
                            />
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
                <Navbar className=" bg-danger" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Danger Color
                    </NavbarBrand>
                    <button
                      aria-controls="navbarNav"
                      aria-expanded={true}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-danger"
                      data-toggle="collapse"
                      id="navbar-danger"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      className=" show"
                      id="navbar-danger"
                      navbar
                      style={{}}
                      toggler="#navbar-danger"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-facebook-official"
                            />
                            Share
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i aria-hidden={true} className=" fa fa-twitter" />
                            Tweet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-pinterest"
                            />
                            Pin
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
                <Navbar className=" navbar-transparent pt-0" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Transparent
                    </NavbarBrand>
                    <button
                      aria-controls="navbarNav"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler navbar-toggler-right"
                      data-target="#navbar-transparent"
                      data-toggle="collapse"
                      id="navbar-transparent"
                      type="button"
                    >
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                      <span className=" navbar-toggler-bar" />
                    </button>
                    <UncontrolledCollapse
                      id="navbar-transparent"
                      navbar
                      toggler="#navbar-transparent"
                    >
                      <Nav className=" ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-facebook-official"
                            />
                            Facebook
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i aria-hidden={true} className=" fa fa-twitter" />
                            Twitter
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className=" fa fa-instagram"
                            />
                            Instagram
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
          <div className=" section">
            <Container>
              <Row>
                <Col md="6">
                  <div className=" title">
                    <h3>Progress Bar</h3>
                    <br />
                  </div>
                  <Progress max="100" value="25" />
                  <br />
                  <Progress max="100" value="50" />
                  <br />
                  <Progress max="100" value="100" />
                  <br />
                  <Progress multi>
                    <Progress bar max="100" value="15" />
                    <Progress
                      bar
                      barClassName=" progress-bar-success"
                      max="100"
                      value="30"
                    />
                    <Progress
                      bar
                      barClassName=" progress-bar-warning"
                      max="100"
                      value="20"
                    />
                  </Progress>
                </Col>
                <Col md="6">
                  <div className=" title">
                    <h3>Pagination</h3>
                    <br />
                  </div>
                  <nav aria-label="Page navigation example">
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Previous"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i aria-hidden={true} className=" fa fa-angle-left" />
                          <span className=" sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          4
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          5
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Next"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className=" fa fa-angle-right"
                          />
                          <span className=" sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                  <br />
                  <nav aria-label="...">
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className=" active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3 <span className=" sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          4
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          5
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Next
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md="6">
                  <div className=" title">
                    <h3>Navigation Tabs</h3>
                  </div>
                  <div className=" nav-tabs-navigation">
                    <div className=" nav-tabs-wrapper">
                      <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            className=" active"
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            Messages
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                  <TabContent className=" text-center" id="my-tab-content">
                    <TabPane className=" active" id="home" role="tabpanel">
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                    </TabPane>
                    <TabPane id="profile" role="tabpanel">
                      <p>Here is your profile.</p>
                    </TabPane>
                    <TabPane id="messages" role="tabpanel">
                      <p>Here are your messages.</p>
                    </TabPane>
                  </TabContent>
                </Col>
                <Col md="6">
                  <div className=" title">
                    <h3>Labels</h3>
                  </div>
                  <Label className=" label-default">Default</Label>
                  <Label className=" label-primary">Primary</Label>
                  <Label className=" label-info">Info</Label>
                  <Label className=" label-success">Success</Label>
                  <Label className=" label-warning">Warning</Label>
                  <Label className=" label-danger">Danger</Label>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className=" tim-container">
            <div className=" title">
              <h3>Notifications</h3>
            </div>
          </Container>
          <div id="notifications">
            <Alert color="info">
              <Container>
                <span>This is a plain notification!</span>
              </Container>
            </Alert>
            <Alert color="success">
              <Container>
                <span>This is a notification with close button.</span>
              </Container>
            </Alert>
            <Alert className=" alert-with-icon" color="warning">
              <Container>
                <div className=" alert-wrapper">
                  <div className=" message">
                    <i className=" nc-icon nc-bell-55" />
                    This is a notification with close button and icon.
                  </div>
                </div>
              </Container>
            </Alert>
            <Alert className=" alert-with-icon" color="danger">
              <Container>
                <div className=" alert-wrapper">
                  <div className=" message">
                    <i className=" nc-icon nc-bell-55" />
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </div>
                </div>
              </Container>
            </Alert>
          </div>
          {/* end notifications */}
          <Container className=" tim-container">
            <div className=" title">
              <h3>Typography</h3>
            </div>
            <div id="typography">
              <Row>
                <div className=" typography-line">
                  <h1>
                    <span className=" note">Header 1</span>
                    Thinking in textures
                  </h1>
                </div>
                <div className=" typography-line">
                  <h2>
                    <span className=" note">Header 2</span>
                    Thinking in textures
                  </h2>
                </div>
                <div className=" typography-line">
                  <h3>
                    <span className=" note">Header 3</span>
                    Thinking in textures
                  </h3>
                </div>
                <div className=" typography-line">
                  <h4>
                    <span className=" note">Header 4</span>
                    Thinking in textures
                  </h4>
                </div>
                <div className=" typography-line">
                  <h5>
                    <span className=" note">Header 5</span>
                    Thinking in textures
                  </h5>
                </div>
                <div className=" typography-line">
                  <h6>
                    <span className=" note">Header 6</span>
                    Thinking in textures
                  </h6>
                </div>
                <div className=" typography-line">
                  <p>
                    <span className=" note">Paragraph</span>
                    Thinking in textures
                  </p>
                </div>
                <div className=" typography-line">
                  <span className=" note">Quote</span>
                  <blockquote className=" blockquote">
                    <p className=" mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <br />
                    <footer className=" blockquote-footer">
                      Someone famous in{" "}
                      <cite title="source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className=" typography-line">
                  <span className=" note">Muted text</span>
                  <p className=" text-muted">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                  </p>
                </div>
                <div className=" typography-line">
                  <span className=" note">Primary text</span>
                  <p className=" text-primary">
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
                <div className=" typography-line">
                  <span className=" note">Success text</span>
                  <p className=" text-success">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </p>
                </div>
                <div className=" typography-line">
                  <span className=" note">Info text</span>
                  <p className=" text-info">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna.
                  </p>
                </div>
                <div className=" typography-line">
                  <span className=" note">Warning text</span>
                  <p className=" text-warning">
                    Etiam porta sem malesuada magna mollis euismod.
                  </p>
                </div>
                <div className=" typography-line">
                  <span className=" note">Danger text</span>
                  <p className=" text-danger">
                    Donec ullamcorper nulla non metus auctor fringilla.
                  </p>
                </div>
                <div className=" typography-line">
                  <h2>
                    <span className=" note">Small tag</span>
                    Header with small subtitle <br />
                    <small>".small" is a tag for the headers</small>
                  </h2>
                </div>
              </Row>
            </div>
            <br />
            <div id="images">
              <Container>
                <div className=" title">
                  <h3>Images</h3>
                </div>
                <Row>
                  <Col md="3" sm="6">
                    <h4 className=" images-title">Rounded Image</h4>
                    <img
                      alt="..."
                      className=" img-rounded img-responsive"
                      src={require("assets/img/uriel-soberanes.jpg")}
                    />
                    <div className=" img-details">
                      <div className=" author">
                        <img
                          alt="..."
                          className=" img-circle img-no-padding img-responsive"
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                      </div>
                      <p>Sonia Green</p>
                    </div>
                  </Col>
                  <Col className=" mr-auto ml-auto" md="2" sm="3">
                    <h4 className=" images-title">Circle Image</h4>
                    <img
                      alt="..."
                      className=" img-circle img-no-padding img-responsive"
                      src={require("assets/img/faces/kaci-baum-2.jpg")}
                    />
                    <p className=" text-center">Brigitte Bardot</p>
                  </Col>
                  <Col className=" mr-auto" md="2" sm="3">
                    <h4 className=" images-title">Thumbnail</h4>
                    <img
                      alt="..."
                      className=" img-thumbnail img-responsive"
                      src={require("assets/img/faces/erik-lucatero-2.jpg")}
                    />
                    <p className=" text-center">John Keynes</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
          <div className=" section javascript-components">
            <Container>
              <div className=" title">
                <h2>Javascript Components</h2>
              </div>
              <Row id="modals">
                <Col md="6">
                  <div className=" title">
                    <h3>Modal</h3>
                  </div>
                  {/* Button trigger modal */}
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-target="#myModal"
                    data-toggle="modal"
                    outline
                    type="button"
                  >
                    Launch demo modal
                  </Button>
                  {/* Modal */}
                  <Modal>
                    <div className=" modal-header">
                      <button
                        aria-label="Close"
                        className=" close"
                        data-dismiss="modal"
                        type="button"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                      <h5
                        className=" modal-title text-center"
                        id="exampleModalLabel"
                      >
                        Modal title
                      </h5>
                    </div>
                    <div className=" modal-body">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth. Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </div>
                    <div className=" modal-footer">
                      <div className=" left-side">
                        <Button
                          className=" btn-link"
                          color="default"
                          data-dismiss="modal"
                          type="button"
                        >
                          Never mind
                        </Button>
                      </div>
                      <div className=" divider" />
                      <div className=" right-side">
                        <Button
                          className=" btn-link"
                          color="danger"
                          type="button"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Modal>
                </Col>
                <Col md="6">
                  <div className=" title">
                    <h3>Popovers</h3>
                  </div>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-content="Here will be some very useful information about this popover."
                    data-placement="top"
                    id="tooltip344834141"
                    outline
                    title="Popover on top"
                    type="button"
                  >
                    On top
                  </Button>
                  <UncontrolledPopover
                    placement="top"
                    target="tooltip344834141"
                  >
                    <PopoverHeader>Popover on top</PopoverHeader>
                    <PopoverBody>
                      Here will be some very useful information about this
                      popover.
                    </PopoverBody>
                  </UncontrolledPopover>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-content="Here will be some very useful information about this popover."
                    data-placement="bottom"
                    id="tooltip493417725"
                    outline
                    title="Popover on bottom"
                    type="button"
                  >
                    On bottom
                  </Button>
                  <UncontrolledPopover
                    placement="bottom"
                    target="tooltip493417725"
                  >
                    <PopoverHeader>Popover on bottom</PopoverHeader>
                    <PopoverBody>
                      Here will be some very useful information about this
                      popover.
                    </PopoverBody>
                  </UncontrolledPopover>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-content="Here will be some very useful information about this popover."
                    data-placement="left"
                    id="tooltip746845223"
                    outline
                    title="Popover on left"
                    type="button"
                  >
                    On left
                  </Button>
                  <UncontrolledPopover
                    placement="left"
                    target="tooltip746845223"
                  >
                    <PopoverHeader>Popover on left</PopoverHeader>
                    <PopoverBody>
                      Here will be some very useful information about this
                      popover.
                    </PopoverBody>
                  </UncontrolledPopover>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-content="Here will be some very useful information about this popover."
                    data-placement="right"
                    id="tooltip909471006"
                    outline
                    title="Popover on right"
                    type="button"
                  >
                    On right
                  </Button>
                  <UncontrolledPopover
                    placement="right"
                    target="tooltip909471006"
                  >
                    <PopoverHeader>Popover on right</PopoverHeader>
                    <PopoverBody>
                      Here will be some very useful information about this
                      popover.
                    </PopoverBody>
                  </UncontrolledPopover>
                </Col>
                <br />
                <Col md="6">
                  <div className=" title">
                    <h3>Datepicker</h3>
                  </div>
                  <Row>
                    <Col sm="6">
                      <FormGroup>
                        <InputGroup className=" date" id="datetimepicker">
                          <ReactDatetime
                            inputProps={{
                              className: "form-control",
                              placeholder: "Datetime Picker Here"
                            }}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <span className=" glyphicon glyphicon-calendar">
                                <i
                                  aria-hidden={true}
                                  className=" fa fa-calendar"
                                />
                              </span>
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className=" title">
                    <h3>Tooltips</h3>
                  </div>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-placement="left"
                    id="tooltip392938669"
                    outline
                    type="button"
                  >
                    On left
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="left"
                    target="tooltip392938669"
                  >
                    On left
                  </UncontrolledTooltip>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-placement="right"
                    id="tooltip354225297"
                    outline
                    type="button"
                  >
                    On right
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="right"
                    target="tooltip354225297"
                  >
                    On right
                  </UncontrolledTooltip>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-placement="top"
                    id="tooltip739061283"
                    outline
                    type="button"
                  >
                    On top
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target="tooltip739061283"
                  >
                    On top
                  </UncontrolledTooltip>
                  <Button
                    className=" btn-round"
                    color="danger"
                    data-placement="bottom"
                    id="tooltip984013562"
                    outline
                    type="button"
                  >
                    On bottom
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="tooltip984013562"
                  >
                    On bottom
                  </UncontrolledTooltip>
                </Col>
              </Row>
              <div className=" title">
                <h3>Carousel</h3>
              </div>
            </Container>
          </div>
          <div className=" section pt-o" id="carousel">
            <Container>
              <Row>
                <Col className=" ml-auto mr-auto" md="8">
                  <Card className=" page-carousel">
                    <div
                      className=" carousel slide"
                      data-ride="carousel"
                      id="carouselExampleIndicators"
                    >
                      <ol className=" carousel-indicators">
                        <li
                          className=" active"
                          data-slide-to="0"
                          data-target="#carouselExampleIndicators"
                        />
                        <li
                          data-slide-to="1"
                          data-target="#carouselExampleIndicators"
                        />
                        <li
                          data-slide-to="2"
                          data-target="#carouselExampleIndicators"
                        />
                      </ol>
                      <div className=" carousel-inner" role="listbox">
                        <div className=" carousel-item active">
                          <img
                            alt="..."
                            className=" d-block img-fluid"
                            src={require("assets/img/soroush-karimi.jpg")}
                          />
                          <div className=" carousel-caption d-none d-md-block">
                            <p>Somewhere</p>
                          </div>
                        </div>
                        <div className=" carousel-item">
                          <img
                            alt="..."
                            className=" d-block img-fluid"
                            src={require("assets/img/federico-beccari.jpg")}
                          />
                          <div className=" carousel-caption d-none d-md-block">
                            <p>Somewhere else</p>
                          </div>
                        </div>
                        <div className=" carousel-item">
                          <img
                            alt="..."
                            className=" d-block img-fluid"
                            src={require("assets/img/joshua-stannard.jpg")}
                          />
                          <div className=" carousel-caption d-none d-md-block">
                            <p>Here it is</p>
                          </div>
                        </div>
                      </div>
                      <a
                        className=" left carousel-control carousel-control-prev"
                        data-slide="prev"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <span className=" fa fa-angle-left" />
                        <span className=" sr-only">Previous</span>
                      </a>
                      <a
                        className=" right carousel-control carousel-control-next"
                        data-slide="next"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <span className=" fa fa-angle-right" />
                        <span className=" sr-only">Next</span>
                      </a>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section section-dark section-nucleo-icons">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className=" title">Nucleo Icons</h2>
                  <br />
                  <p className=" description">
                    Paper Kit comes with 100 custom icons made by our friends
                    from NucleoApp. The official package contains over 2.100
                    thin icons which are looking great in combination with Paper
                    Kit Make sure you check all of them and use those that you
                    like the most.
                  </p>
                  <br />
                  <Button
                    className=" btn-round"
                    color="danger"
                    href="nucleo-icons.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Demo Icons
                  </Button>
                  <Button
                    className=" btn-round"
                    color="danger"
                    href="https://nucleoapp.com/?ref=1712"
                    outline
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View All Icons
                  </Button>
                </Col>
                <Col lg="6" md="12">
                  <div className=" icons-container">
                    <i className=" nc-icon nc-time-alarm" />
                    <i className=" nc-icon nc-atom" />
                    <i className=" nc-icon nc-camera-compact" />
                    <i className=" nc-icon nc-watch-time" />
                    <i className=" nc-icon nc-key-25" />
                    <i className=" nc-icon nc-diamond" />
                    <i className=" nc-icon nc-user-run" />
                    <i className=" nc-icon nc-layout-11" />
                    <i className=" nc-icon nc-badge" />
                    <i className=" nc-icon nc-bulb-63" />
                    <i className=" nc-icon nc-favourite-28" />
                    <i className=" nc-icon nc-planet" />
                    <i className=" nc-icon nc-tie-bow" />
                    <i className=" nc-icon nc-zoom-split" />
                    <i className=" nc-icon nc-cloud-download-93" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section section-dark">
            <Container>
              <Row>
                <Col className=" ml-auto mr-auto text-center" md="8">
                  <h2 className=" title">Completed with examples</h2>
                  <p className=" description">
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go. More importantly, looking at them will
                    give you a picture of what you can built with this powerful
                    kit.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className=" section section-image section-login"
            style={{
              backgroundImage:
                "url(" + require("assets/img/login-image.jpg") + ")"
            }}
          >
            <Container>
              <Row>
                <Col className=" mx-auto" lg="4" md="6">
                  <Card className=" card-register">
                    <h3 className=" title mx-auto">Welcome</h3>
                    <div className=" social-line text-center">
                      <Button
                        className=" btn-neutral btn-just-icon mt-0"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className=" fa fa-facebook-square" />
                      </Button>
                      <Button
                        className=" btn-neutral btn-just-icon mt-0"
                        color="google"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className=" fa fa-google-plus" />
                      </Button>
                      <Button
                        className=" btn-neutral btn-just-icon mt-0"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className=" fa fa-twitter" />
                      </Button>
                    </div>
                    <Form className=" register-form">
                      <label>Email</label>
                      <InputGroup className=" form-group-no-border">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" />
                      </InputGroup>
                      <label>Password</label>
                      <InputGroup className=" form-group-no-border">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" nc-icon nc-key-25" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" type="password" />
                      </InputGroup>
                      <Button block className=" btn-round" color="danger">
                        Register
                      </Button>
                    </Form>
                    <div className=" forgot">
                      <Button
                        className=" btn-link"
                        color="danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Forgot password?
                      </Button>
                    </div>
                  </Card>
                  <div className=" col text-center">
                    <Button
                      className=" btn-outline-neutral btn-round"
                      color="default"
                      href="./examples/register-page.html"
                      rel="noopener noreferrer"
                      size="lg"
                      target="_blank"
                    >
                      View Register Page
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section section-dark">
            <Container>
              <Row className=" example-page">
                <Col className=" text-center" md="6">
                  <a
                    href="examples/landing.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className=" img-rounded img-responsive"
                      src={require("assets/img/examples/landing-page.png")}
                      style={{ width: "100%" }}
                    />
                  </a>
                  <Button
                    className=" btn-outline-neutral btn-round"
                    color="default"
                    href="./examples/landing-page.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Landing Page
                  </Button>
                </Col>
                <Col className=" text-center" md="6">
                  <a
                    href="examples/profile.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className=" img-rounded img-responsive"
                      src={require("assets/img/examples/profile-page.png")}
                      style={{ width: "100%" }}
                    />
                  </a>
                  <Button
                    className=" btn-outline-neutral btn-round"
                    color="default"
                    href="./examples/profile-page.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Profile Page
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section">
            <Container className=" text-center">
              <Row>
                <Col className=" ml-auto mr-auto text-center" md="8">
                  <h2 className=" title">Do you like what you see?</h2>
                  <p className=" description">
                    Cause if you do, it can be yours for Free. Hit the button
                    below and download it. Start a new project or give an old
                    Bootstrap 4 project a new look.
                  </p>
                </Col>
                <Col className=" ml-auto mr-auto download-area" md="5">
                  <Button
                    className=" btn-round"
                    color="danger"
                    href="http://www.creative-tim.com/product/paper-kit-2"
                  >
                    Download free HTML
                  </Button>
                </Col>
              </Row>
              <Row className=" text-center upgrade-pro">
                <Col className=" ml-auto mr-auto" md="8">
                  <h2 className=" title">Want more?</h2>
                  <p className=" description">
                    We've just launched{" "}
                    <a
                      className=" text-danger"
                      href="http://demos.creative-tim.com/paper-kit-2-pro/presentation.html?ref=utp-pk2-demos"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Paper Kit 2 PRO
                    </a>
                    . It has a huge number of components, sections and example
                    pages.
                  </p>
                </Col>
                <Col className=" ml-auto mr-auto" sm="5">
                  <Button
                    className=" btn-round"
                    color="info"
                    href="https://www.creative-tim.com/product/paper-kit-2-pro?ref=utp-pk-demos"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i aria-hidden={true} className=" nc-icon nc-spaceship" />
                    Upgrade to PRO
                  </Button>
                </Col>
              </Row>
              <Row className=" justify-content-md-center sharing-area text-center">
                <Col className=" text-center" lg="8" md="12">
                  <h3>Thank you for supporting us!</h3>
                </Col>
                <Col className=" text-center" lg="8" md="12">
                  <Button
                    className="twitter-sharrre btn-round"
                    color="twitter-bg"
                    href="#pablo"
                    id="tooltip3373767"
                    onClick={e => e.preventDefault()}
                  >
                    <i className=" fa fa-twitter" />
                    Twitter
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip3373767">
                    Tweet!
                  </UncontrolledTooltip>
                  <Button
                    className="linkedin-sharrre btn-round"
                    color="google-bg"
                    href="#pablo"
                    id="tooltip840791273"
                    onClick={e => e.preventDefault()}
                  >
                    <i className=" fa fa-google-plus" />
                    Google
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip840791273">
                    Share!
                  </UncontrolledTooltip>
                  <Button
                    className="facebook-sharrre btn-round"
                    color="facebook-bg"
                    href="#pablo"
                    id="tooltip68961360"
                    onClick={e => e.preventDefault()}
                  >
                    <i className=" fa fa-facebook-square" />
                    Facebook
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip68961360">
                    Share!
                  </UncontrolledTooltip>
                  <Button
                    className="sharrre btn-round"
                    color="github-bg"
                    href="https://github.com/creativetimofficial/paper-kit"
                    id="tooltip864353654"
                  >
                    <i className=" fa fa-github" />
                    Star
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip864353654">
                    Star on Github
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
