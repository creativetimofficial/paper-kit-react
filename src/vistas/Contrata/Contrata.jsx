import Footer from "componentes/Footer/Footer";
import NavBar from "componentes/Navbar/Navbar";
import { createRef } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap"
import { MdOutlineAddIcCall } from "react-icons/md"
import { RiCustomerService2Fill, RiQuestionnaireFill } from "react-icons/ri"


export const Contrata = () => {
    let pageHeader = createRef();
    return (
        <>
            <NavBar />
            <div
                style={{
                    backgroundImage: "url(" + require("assets/img/MedicaContrata.jfif") + ")"
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1>Tu plan de salud ahora se contrata online</h1>
                        <h2>Además accedés<br />
                            a un 45% de ahorro.</h2>
                        <br />
                        <Button className="btn-round" color="neutral" type="button" outline>
                            Continuar
                        </Button>
                    </div>
                </Container>
            </div>
            <div
                style={{
                    backgroundImage: "url(" + require("assets/img/FamiliaContrata.jpg") + ")"
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 style={{ marginBottom: "80px", marginTop: "106px" }}>Planes de Salud<br />
                            a tu medida.</h1>
                        <br />
                        <div className="text-center" >
                            <Container >
                                <Row style={{ marginTop: "75px" }}>
                                    <Col className="height-cards">
                                        <Card className="custom-card" style={{ backgroundColor: "transparent", color: "white", boxShadow: "unset" }}>
                                            <i className="nc-icon nc-single-copy-04 custom-card-icon" />
                                            <h3>Pagás solo lo que usas:<b />abono fijo accesible.</h3>
                                        </Card>
                                    </Col>
                                    <Col className="height-cards">
                                        <Card className="custom-card" style={{ backgroundColor: "transparent", color: "white", boxShadow: "unset" }}>
                                            <i className="nc-icon nc-shop custom-card-icon" />
                                            <h3>Opciones con<b />habitación individual.</h3>
                                        </Card>
                                    </Col>
                                    <Col className="height-cards">
                                        <Card className="custom-card" style={{ backgroundColor: "transparent", color: "white", boxShadow: "unset" }}>
                                            <i className="nc-icon nc-credit-card custom-card-icon" />
                                            <h3>Servicios de urgencias,<b />las 24 horas.</h3>
                                        </Card>
                                    </Col>
                                    <Col className="height-cards">
                                        <Card className="custom-card" style={{ backgroundColor: "transparent", color: "white", boxShadow: "unset" }}>
                                            <i className="nc-icon nc-credit-card custom-card-icon" />
                                            <h3>Experiencia en<b />prestadores y servicios.</h3>
                                        </Card>
                                    </Col>
                                    <Col className="height-cards">
                                        <Card className="custom-card" style={{ backgroundColor: "transparent", color: "white", boxShadow: "unset" }}>
                                            <i className="nc-icon nc-credit-card custom-card-icon" />
                                            <h3>Asistencia al viajero<b />nacional e internacional.</h3>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
            <section style={{ backgroundColor: "rgb(241, 241, 241)" }}>
                <Container className="py-4">
                    <Row>
                        <Col md="3" className="mx-auto">
                            <MdOutlineAddIcCall className="my-2" style={{ fontSize: "5vh",border: "2px solid #f33816", borderRadius: "50%", padding:"10px", backgroundColor:"white"}}/>
                            <p className="my-2">EMERGENCIAS AL</p>
                            <h3 className="my-2">0800 555 5556</h3>
                        </Col>
                        <Col md="3" className="mx-auto">
                            <RiCustomerService2Fill className="my-2" style={{ fontSize: "5vh",border: "2px solid #f33816", borderRadius: "50%", padding:"10px", backgroundColor:"white"}}/>
                            <p className="my-2">ATENCIÓN TELEFÓNICA </p>
                            <h3 className="my-2">0810 222 SALUD (72583)</h3>
                        </Col>
                        <Col md="3" className="mx-auto">
                            <RiQuestionnaireFill className="my-2" style={{ fontSize: "5vh",border: "2px solid #f33816", borderRadius: "50%", padding:"10px", backgroundColor:"white"}}/>
                            <p className="my-2">PREGUNTAS FRECUENTES </p>
                            <h3 className="my-2">Despejá tus dudas</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}