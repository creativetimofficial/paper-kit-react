import Footer from "componentes/Footer/Footer"
import NavBar from "componentes/Navbar/Navbar"
import { MdOutlineAddIcCall } from "react-icons/md"
import { RiCustomerService2Fill, RiQuestionnaireFill } from "react-icons/ri"
import { Button, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from "reactstrap"


export const Cotiza = () => {
    return (
        <>
            <NavBar/>
            <section style={{ backgroundColor: "rgb(241, 241, 241)", marginTop:"100px"}}>
                <Container className="py-4">
                    <Row>
                        <Col md="3" className="mx-auto">
                            <MdOutlineAddIcCall className="my-2" style={{ fontSize: "5vh", border: "2px solid #f33816", borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
                            <p className="my-2">EMERGENCIAS AL</p>
                            <h3 className="my-2">0800 555 5556</h3>
                        </Col>
                        <Col md="3" className="mx-auto">
                            <RiCustomerService2Fill className="my-2" style={{ fontSize: "5vh", border: "2px solid #f33816", borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
                            <p className="my-2">ATENCIÓN TELEFÓNICA </p>
                            <h3 className="my-2">0810 222 SALUD (72583)</h3>
                        </Col>
                        <Col md="3" className="mx-auto">
                            <RiQuestionnaireFill className="my-2" style={{ fontSize: "5vh", border: "2px solid #f33816", borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
                            <p className="my-2">PREGUNTAS FRECUENTES </p>
                            <h3 className="my-2">Despejá tus dudas</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col md="6 mx-auto">
                        <h4 className="mt-4 text-center">¡Hola! Para poder cotizar el plan a tu medida, necesitamos
                            pedirte algunos datos personales.
                        </h4>
                    </Col>
                </Row>
                <Col md="6 mx-auto">
                    <form action="" method="POST" /* ref={form} onSubmit={sendEmail} */>
                        <div className=" mt-3">
                            <label for="txtNombre">Nombre</label>
                            <input type="text" name="txtNombre" id="txtNombre" className="form-control" /* onChange={(e) => { setName(e.target.value) }}  */ />
                        </div>
                        <div className=" mt-2">
                            <label for="txtApellido">Apellido</label>
                            <input type="text" name="txtApellido" id="txtApellido" className="form-control" /* onChange={(e) => { setEmail(e.target.value) }}  */ />
                        </div>
                        <div className=" mt-2">
                            <label for="txtSexo">Sexo</label>
                            <UncontrolledDropdown id="txtSexo" >
                                <DropdownToggle className="col-6"
                                    caret
                                >
                                    Seleccioná
                                </DropdownToggle>
                                <DropdownMenu dark className="col-6">
                                    <DropdownItem>
                                        Femenino
                                    </DropdownItem>
                                    <DropdownItem>
                                        Masculino
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className=" mt-2">
                            <label for="txtFC">Fecha de nacimiento</label><br />
                            <input type="date" name="txtFC" step="1" min="2013-01-01" max="2023-12-31" /* value="2013-01-01" */ />
                        </div>
                        <div className=" mt-2">
                            <label for="txtDNI">Número de documento</label>
                            <input type="text" name="txtDNI" id="txtDNI" className="form-control" />
                        </div>
                        <div className=" mt-2">
                            <label for="txtProvincia">Provincia</label>
                            <UncontrolledDropdown id="txtProvincia" >
                                <DropdownToggle className="col-12"
                                    caret
                                >
                                    Seleccioná
                                </DropdownToggle>
                                <DropdownMenu dark className="col-12">
                                    <DropdownItem>
                                        Autonomo
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className=" mt-2">
                            <label for="txtLocalidad">Localidad</label>
                            <UncontrolledDropdown id="txtLocalidad" >
                                <DropdownToggle className="col-12"
                                    caret
                                >
                                    Seleccioná
                                </DropdownToggle>
                                <DropdownMenu dark className="col-12">
                                    <DropdownItem>
                                        Autonomo
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className=" mt-2">
                            <label for="txtEmail">E-mail</label>
                            <input type="email" name="txtEmail" id="txtEmail" className="form-control col-6" />
                        </div>

                        <div className=" mt-2">
                            <Row>
                                <Col md="6">
                                    <label for="txtLaburo">Situacion laboral</label>
                                    <UncontrolledDropdown>
                                        <DropdownToggle className="col-12"
                                            caret
                                        >
                                            Situacion laboral
                                        </DropdownToggle>
                                        <DropdownMenu dark className="col-12">
                                            <DropdownItem>
                                                Autonomo
                                            </DropdownItem>
                                            <DropdownItem>
                                                Relacion de dependencia
                                            </DropdownItem>
                                            <DropdownItem>
                                                Monotributista
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Col>
                            </Row>
                        </div>
                        <div className=" mt-2">
                            <label for="txtTelefono">Telefono</label>
                            <input type="number" name="txtTelefono" id="txtTelefono" className="form-control" />
                        </div>
                        {/* <div id="alertaMensaje">
                            <div className="alert alert-success text-center" hidden={true} role="alert">
                                ¡Se ha enviado el mensaje correctamente!
                            </div>
                            <div className="alert alert-danger text-center" hidden={true} role="alert">
                                ¡Faltan completar datos!
                            </div>
                        </div> */}
                        <div className="text-center mt-3 me-5 mb-3">
                            <Button type="submit" className="btn-round col-4" color="danger">Continuar</Button>
                        </div>
                    </form>
                </Col>
            </Container>
            <section style={{ backgroundColor: "rgb(241, 241, 241)" }}>
                <Container className="py-4">
                    <Row>
                        <Col md="3" className="mx-auto">
                            <MdOutlineAddIcCall className="my-2" style={{ fontSize: "5vh", border: "2px solid #f33816", borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
                            <p className="my-2">EMERGENCIAS AL</p>
                            <h3 className="my-2">0800 555 5556</h3>
                        </Col>
                        <Col md="3" className="mx-auto">
                            <RiCustomerService2Fill className="my-2" style={{ fontSize: "5vh", border: "2px solid #f33816", borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
                            <p className="my-2">ATENCIÓN TELEFÓNICA </p>
                            <h3 className="my-2">0810 222 SALUD (72583)</h3>
                        </Col>
                        <Col md="3" className="mx-auto">
                            <RiQuestionnaireFill className="my-2" style={{ fontSize: "5vh", border: "2px solid #f33816", borderRadius: "50%", padding: "10px", backgroundColor: "white" }} />
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