import React from "react";

// reactstrap components
import { Row, Container, Col } from "reactstrap";
import "./Footer.css"
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row className="mb-4 justify-content-between">
          <Col md={3} sm={12}>
            <img src={require("assets/img/logo-avalian-nav.png")} alt="logo prepaid" />
          </Col>
          <Col sm={12} md={2}>
            <h3 className="mb-3" ><b>Quienes somos</b></h3>
            <a href="#"><b>Nosotros</b></a>
            <br />
            <a href="#"><b>De dónde venimos</b></a>
            <br />
            <a href="#"><b>Grupo Asociativo</b></a>
            <br />
            <a href="#"><b>Cooperativismo</b></a>
            <br />
            <a href="#"><b>Trabajá con nosotros</b></a>
          </Col>
          <Col sm={12} md={2}>
            <h3 className="mb-3"><b>Planes</b></h3>
            <a href="#"><b>Cartillas</b></a>
            <br />
            <a href="#"><b>Centros de atención</b></a>
            <br />
            <a href="#"><b>Tu cuenta online</b></a>
          </Col>
          <Col sm={12} md={2}>
            <h3 className="mb-3"><b>Información util</b></h3>
            <a href="#"><b>Emergencias</b></a>
            <br />
            <a href="#"><b>Asistencia al viajero</b></a>
            <br />
            <a href="#"><b>Información administrativa</b></a>
            <br />
            <a href="#"><b>Preguntas frecuentes</b></a>
            <br />
            <a href="#"><b>Reglamento general</b></a>
            <br />
            <a href="#"><b>Bajas</b></a>
            <br />
            <a href="#"><b>Tramite de arrepentimiento</b></a>
          </Col>
          <Col  className="flex flex-col" sm={12} md={2}>
            <h3><b>Novedades</b></h3>
            <h3><b>Contacto</b></h3>
            <h3><FaLinkedinIn className="redes"  /><FaInstagram className="redes" /><FaFacebookF className="redes" /><FaTwitter className="redes" /></h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>Superintendencia de Servicios de Salud Órgano de Control de Obras Sociales y Entidades de Medicina Prepaga www.salud.gov.ar - RNEMP N° 1194 (provisorio) </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
