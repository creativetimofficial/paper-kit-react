import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

// core components

function SectionJavaScript() {
  return (
    <>
      <div className="section javascript-components">
        <Container>
          <div className="title">
            <h2>Javascript Components</h2>
          </div>
          <Row id="modals">
            <Col md="6">
              <div className="title">
                <h3>Modal</h3>
              </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
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
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Modal title
                  </h5>
                </div>
                <div className="modal-body">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth. Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar.
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      data-dismiss="modal"
                      type="button"
                    >
                      Never mind
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Popovers</h3>
              </div>
              <Button
                className="btn-round"
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
              <UncontrolledPopover placement="top" target="tooltip344834141">
                <PopoverHeader>Popover on top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round"
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
              <UncontrolledPopover placement="bottom" target="tooltip493417725">
                <PopoverHeader>Popover on bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round"
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
              <UncontrolledPopover placement="left" target="tooltip746845223">
                <PopoverHeader>Popover on left</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round"
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
              <UncontrolledPopover placement="right" target="tooltip909471006">
                <PopoverHeader>Popover on right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <br />
            <Col md="6">
              <div className="title">
                <h3>Datepicker</h3>
              </div>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetime
                        inputProps={{
                          className: "form-control",
                          placeholder: "Datetime Picker Here"
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Tooltips</h3>
              </div>
              <Button
                className="btn-round"
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
                className="btn-round"
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
                className="btn-round"
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
                className="btn-round"
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
          <div className="title">
            <h3>Carousel</h3>
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionJavaScript;
