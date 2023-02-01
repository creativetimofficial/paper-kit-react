import React from "react";

import "./LandingPageHeader.css";

// reactstrap components
import { Button, Card, Col, Container, Row } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/Feliz-3.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Ahora podés contratar tu plan de salud desde nuestra web.</h1>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline>
              Mi plan de salud
            </Button>
          </div>
        </Container>
      </div>
      {/* separador */}
      <div className="main">
        <div className="text-center separador-cards">
          <Container>
            <Row>
              <Col md="4" className="height-cards">
                <Card className="custom-card" style={{paddingTop:"52px", paddingBottom:"52px"}}>
                <i className="nc-icon nc-single-copy-04 custom-card-icon"/>
                  <h3>Cartilla online</h3>
                </Card>
              </Col>
              <Col md="4" className="height-cards">
                <Card className="custom-card">
                  <i className="nc-icon nc-shop custom-card-icon"/>
                  <h3>Centros de antención</h3>
                </Card>
              </Col>
              <Col md="4" className="height-cards">
                <Card className="custom-card">
                  <i className="nc-icon nc-credit-card custom-card-icon"/>
                  <h3>Planes para vos</h3>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* 2 */}
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/Mujer1.jfif") + ")", minHeight: "53vh"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <i className="nc-icon nc-badge custom-card-icon"/>
            <h1>Tu cuenta Online</h1>
            <h3>Gestioná tus trámites y accedé a la información que necesitás en cualquier momento, desde cualquier lugar.</h3>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline>
              Conocer más
            </Button>
          </div>
        </Container>
      </div>
      {/* 3 */}
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/Mujer2.jfif") + ")", minHeight: "53vh"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <i className="nc-icon nc-favourite-28 custom-card-icon"/>
            <h1>Prepaid Corporativo</h1>
            <h3>Gestioná tus trámites y accedé a la información de tu plan</h3>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline>
              Conocer más
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;