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

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, Modal,
  InputGroupAddon,
  InputGroupText,
  InputGroup, } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function DonationPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/Donation-page-background.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Make Donation Today!</h3>
                <div className="social-line text-center">
                  <Button
                    color="neutral"
                    outline
                    type="button"
                    className="mr-1"
                    onClick={(e) => e.preventDefault()}
                  >
                     <strong class="fa-stack">
                        $10    
                      </strong>
                  </Button>
                  <Button
                    color="neutral"
                    outline
                    type="button"
                    className="mr-1"
                    onClick={(e) => e.preventDefault()}
                  >
                      <strong class="fa-stack">
                        $20    
                      </strong>
                  </Button>
                  <Button
                    color="neutral"
                    outline
                    type="button"
                    className="mr-1"
                    onClick={(e) => e.preventDefault()}
                  >
                      <strong class="fa-stack">
                        $30    
                      </strong>
                  </Button>
                  {/* <Button
                    className="btn-neutral mr-1
                    "
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Other
                  </Button> */}
                  <Button
                    className="btn-neutral"
                  >
                      <Input placeholder="$ Other Amount" type="text" />
                  </Button>
                  
                </div>
                <Form className="register-form">
                  <label>Patrion Name</label>
                  <Input placeholder="Full Name" type="text" />
                  {/* <label>Password</label>
                  <Input placeholder="Password" type="password" /> */}
                  <Button block className="btn-round" color="danger" onClick={toggleModal}>
                    Donate
                  </Button>
                  <Modal isOpen={modal} toggle={toggleModal}>
                    <div className="modal-header">
                      <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={toggleModal}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                      <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                      >
                        Thank you for your Donation
                      </h5>
                    </div>
                    <div className="modal-body">
                      <i>I wanted to take a moment to express my heartfelt thanks for your donation to our fundraiser to build houses for those affected by the tragedy in Rwanda. Your generous contribution will make a real difference in the lives of those who are in need, providing them with safe and secure housing. We appreciate your kindness and support, and we will ensure that your donation is used wisely to achieve our goals. Thank you again for your contribution and for being a part of this important effort to make a positive impact in the world.</i>
                    
                    </div>
                    <div className="modal-footer">
                      <div className="left-side">
                        <Button
                          className="btn-link"
                          color="default"
                          type="button"
                          onClick={toggleModal}
                        >
                          Close
                        </Button>
                      </div>
                      <div className="divider" />
                    </div>
                  </Modal>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6>
        </div>
      </div>
    </>
  );
}

export default DonationPage;
