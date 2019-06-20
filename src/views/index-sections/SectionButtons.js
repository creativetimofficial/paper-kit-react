import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionButtons() {
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2>Basic Elements</h2>
          </div>
          <div id="buttons">
            <div className="title">
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
                <Button className="btn-round" color="info" type="button">
                  Round
                </Button>
                <Button className="btn-round" color="info" type="button">
                  <i className="fa fa-heart" />
                  With Icon
                </Button>
                <Button className="btn-just-icon" color="info" type="button">
                  <i className="fa fa-heart" />
                </Button>
                <Button className="btn-link" color="info" type="button">
                  Simple
                </Button>
              </Col>
            </Row>
            <div className="title">
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
            <div className="title">
              <h3>
                <small>Pick your color</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button
                  className="btn-round"
                  color="default"
                  outline
                  type="button"
                >
                  Default
                </Button>
                <Button
                  className="btn-round"
                  color="primary"
                  outline
                  type="button"
                >
                  Primary
                </Button>
                <Button
                  className="btn-round"
                  color="info"
                  outline
                  type="button"
                >
                  Info
                </Button>
                <Button
                  className="btn-round"
                  color="success"
                  outline
                  type="button"
                >
                  Success
                </Button>
                <Button
                  className="btn-round"
                  color="warning"
                  outline
                  type="button"
                >
                  Warning
                </Button>
                <Button
                  className="btn-round"
                  color="danger"
                  outline
                  type="button"
                >
                  Danger
                </Button>
                <Button
                  className="btn-outline-neutral btn-round"
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
                <Button className="btn-round" color="default" type="button">
                  Default
                </Button>
                <Button className="btn-round" color="primary" type="button">
                  Primary
                </Button>
                <Button className="btn-round" color="info" type="button">
                  Info
                </Button>
                <Button className="btn-round" color="success" type="button">
                  Success
                </Button>
                <Button className="btn-round" color="warning" type="button">
                  Warning
                </Button>
                <Button className="btn-round" color="danger" type="button">
                  Danger
                </Button>
                <Button
                  className="btn-neutral btn-round"
                  color="default"
                  type="button"
                >
                  Neutral
                </Button>
              </Col>
            </Row>
          </div>
          <div className="title">
            <h3>Links</h3>
          </div>
          <Row>
            <Col md="8">
              <Button
                className="btn-link"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Default
              </Button>
              <Button
                className="btn-link"
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Primary
              </Button>
              <Button
                className="btn-link"
                color="success"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Success
              </Button>
              <Button
                className="btn-link"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Info
              </Button>
              <Button
                className="btn-link"
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Warning
              </Button>
              <Button
                className="btn-link"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Danger
              </Button>
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Neutral
              </Button>
            </Col>
          </Row>
          <div className="title">
            <h3>Inputs</h3>
          </div>
          <Row>
            <Col sm="3">
              <FormGroup>
                <Input placeholder="Default" type="text" />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="has-success">
                <Input
                  className="form-control-success"
                  defaultValue="Success"
                  id="inputSuccess1"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="has-danger">
                <Input
                  className="form-control-danger"
                  defaultValue="Error"
                  id="inputDanger1"
                  type="text"
                />
                <div className="form-control-feedback">
                  Sorry, that username's taken. Try another?
                </div>
              </FormGroup>
            </Col>
            <Col sm="3">
              <InputGroup>
                <Input placeholder="Username" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="fa fa-group" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Checkboxes</h3>
              </div>
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  Unchecked <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked defaultValue="" type="checkbox" />
                  Checked <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input defaultValue="" disabled type="checkbox" />
                  Disabled unchecked <span className="form-check-sign" />
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
                  Disabled checked <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Radio Buttons</h3>
              </div>
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  Radio is off <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios2"
                    name="exampleRadios"
                    type="radio"
                  />
                  Radio is on <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio disabled">
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios3"
                    name="exampleRadios"
                    type="radio"
                  />
                  Disabled radio is off <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio disabled">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios4"
                    name="exampleRadioz"
                    type="radio"
                  />
                  Disabled radio is on <span className="form-check-sign" />
                </Label>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Toggle Buttons</h3>
              </div>
              <div id="switches">
                <label>
                  <Switch onColor="default" offColor="default" />
                </label>
                <br />
                <label>
                  <Switch
                    defaultValue={false}
                    onColor="default"
                    offColor="default"
                  />
                  <span className="toggle" />
                </label>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Sliders</h3>
              </div>
              <div className="slider" id="sliderRegular" />
              <br />
              <div className="slider slider-primary" id="sliderDouble" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
