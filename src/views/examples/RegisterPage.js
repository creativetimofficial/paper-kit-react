import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <div
          className=" page-header"
          style={{ backgroundImage: "url('../assets/img/login-image.jpg')" }}
        >
          <div className=" filter" />
          <Container>
            <Row>
              <Col className=" ml-auto mr-auto" lg="4">
                <Card className=" card-register">
                  <h3 className=" title mx-auto">Welcome</h3>
                  <div className=" social-line text-center">
                    <Button
                      className=" btn-neutral btn-just-icon"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-facebook-square" />
                    </Button>
                    <Button
                      className=" btn-neutral btn-just-icon"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-google-plus" />
                    </Button>
                    <Button
                      className=" btn-neutral btn-just-icon"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className=" fa fa-twitter" />
                    </Button>
                  </div>
                  <Form className=" register-form">
                    <label>Email</label>
                    <Input placeholder="Email" type="text" />
                    <label>Password</label>
                    <Input placeholder="Password" type="password" />
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
              </Col>
            </Row>
          </Container>
          <div className=" footer register-footer text-center">
            <h6>
              © <script>document.write(new Date().getFullYear())</script>, made
              with <i className=" fa fa-heart heart" />
              by Creative Tim
            </h6>
          </div>
        </div>
      </>
    );
  }
}

export default RegisterPage;
