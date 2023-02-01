import Footer from "componentes/Footer/Footer";
import NavBar from "componentes/Navbar/Navbar";
import "./Planes.css"
import { Button, Col, Container, Row } from "reactstrap";
import ProfilePageHeader from "componentes/Header/ProfilePageHeader";

const Planes = () => {
    return (
        <>
            <NavBar />
            <main id="planes">
                <ProfilePageHeader imagen={"Contacto.jpg"} minHeight={"50vh"} />
                <Container>

                    <Row className="w-100 m-auto">
                        <Col md={3} className="mb-5">
                            <img src={require("assets/img/plan1.png")} alt="imagen de plan" className="img-fluid" style={{ marginTop: "-40px" }} />
                            <h2>Plan Cerca</h2>
                            <h5>Un plan práctico y accesible que te acerca a lo que necesitas.</h5>
                            <p style={{ height: "180px" }}>
                                Una opción simple, ágil y nativamente digital, que cuenta con una cartilla de prestadores seleccionada por proximidad e incluye un set de servicios digitales como credencial digital, e-doc, app, cartilla online y Ava, tu asistente virtual.
                            </p>
                            <Row className="my-5 m-auto">
                                <Button
                                    className="btn-round my-4"
                                    color="danger"
                                    href={""}
                                >
                                    Saber Más
                                </Button>
                            </Row>
                        </Col>
                        <Col md={3} className="mb-5">
                            <img src={require("assets/img/plan2.png")} alt="imagen de plan" className="img-fluid" style={{ marginTop: "-40px" }} />
                            <h2>Plan Cerca</h2>
                            <h5>Un plan práctico y accesible que te acerca a lo que necesitas.</h5>
                            <p style={{ height: "180px" }}>
                                Nuestro Plan Integral cuenta con una amplia cartilla de prestadores de alcance nacional y una importante combinación de coberturas a precios accesibles, a través de la aplicación de copagos.
                            </p>
                            <Row className="my-5 m-auto">
                                <Button
                                    className="btn-round my-4"
                                    color="danger"
                                    href={""}
                                >
                                    Saber Más
                                </Button>
                            </Row>
                        </Col>
                        <Col md={3} className="mb-5">
                            <img src={require("assets/img/plan3.png")} alt="imagen de plan" className="img-fluid" style={{ marginTop: "-40px" }} />
                            <h2>Plan Cerca</h2>
                            <h5>Un plan práctico y accesible que te acerca a lo que necesitas.</h5>
                            <p style={{ height: "180px" }}>
                                Amplia cartilla de prestadores, internación en habitación individual con baño privado, importante descuento en farmacias adheridas, servicio de emergencias y urgencias sin cargo, y consultas a domicilio con accesibles copagos.
                            </p>
                            <Row className="my-5 m-auto">
                                <Button
                                    className="btn-round my-4"
                                    color="danger"
                                    href={""}
                                >
                                    Saber Más
                                </Button>
                            </Row>
                        </Col>
                        <Col md={3} className="mb-5">
                            <img src={require("assets/img/plan4.png")} alt="imagen de plan" className="img-fluid" style={{ marginTop: "-40px" }} />
                            <h2>Plan Cerca</h2>
                            <h5>Un plan práctico y accesible que te acerca a lo que necesitas.</h5>
                            <p style={{ height: "180px" }}>
                                Agilidad y máxima calidad de servicios con detalles de confort. Amplia cartilla de prestadores y centros médicos de prestigio, internación en suite y consultas a domicilio y servicio de emergencias y urgencias sin cargo.
                            </p>
                            <Row className="my-5 m-auto">
                                <Button
                                    className="btn-round my-4"
                                    color="danger"
                                    href={""}
                                >
                                    Saber Más
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="w-100 mt-5">
                        <Col md={6}>
                            <p>
                                <b>En Avalian pensamos y actuamos en función de nuestros asociados.
                                    Con nuestra amplia gama de Planes Médicos procuramos un modelo de atención en su concepto más amplio, apuntando claramente a la promoción de la salud, educando en la prevención y auspiciando conductas saludables para disminuir los factores de riesgo.
                                </b>
                            </p>
                        </Col>
                        <Col md={6}>
                            <img src={require("assets/img/planes.png")} alt="tarjetas de planes" className="img-fluid" />
                        </Col>
                    </Row>
                    <Row className=" mb-5 ">
                        <Col className="mb-2" md={6}>
                            <img src={require("assets/img/consultorioPaciente.jpg")} alt="tarjetas de planes" style={{ minHeight: "200px", height: "230px", width: "inherit" }} />
                        </Col>
                        <Col className="mb-2" md={6}>
                            <img src={require("assets/img/consultorioVacio.jpg")} alt="tarjetas de planes" style={{ minHeight: "200px", height: "230px", width: "inherit" }} />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}
export default Planes;