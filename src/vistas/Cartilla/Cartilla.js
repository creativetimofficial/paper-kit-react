import ProfilePageHeader from "componentes/Header/ProfilePageHeader";
import NavBar from "componentes/Navbar/Navbar";
import { useState } from "react";
import { Button, Container, Form, Row, Col } from "reactstrap";
import "./Cartilla.css"

const Cartilla = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <NavBar />
            <ProfilePageHeader imagen={"family.jpeg"} alturaBanner={"50vh"} nombreComponente={"AAAAAAAAAAAAAAA"} />
            <Container>
                <Row className="w-100 my-4">
                    <input type="checkbox" id="switch" onClick={() => setToggle(!toggle)} /><label className="inputToggle" texto={toggle ? "Buscar por localidad" : "Buscar por dirección"} for="switch"><span style={{ position: "inherit", textAlign: "left" }}>Buscar por localidad</span><span style={{ position: "inherit", textAlign: "right", float: "right" }}>Buscar por dirección</span></label>
                    {/* <Button>Buscar por localidad</Button>
                    <Button>Buscar por cercanía</Button> */}
                </Row>
                <Form>
                    <Row className="my-4">
                        <Col>
                            <label className="w-100" for="credencial">¿Cúal es tu credencial?</label>
                            <select name="credencial" className="form-control">
                                <option>
                                    prueba
                                </option>
                            </select>
                        </Col>
                        <Col>
                            <label className="w-100" for="credencial">¿Cúal es tu credencial?</label>
                            <select name="credencial" className="form-control mb-2">
                                <option>
                                    prueba
                                </option>
                            </select>
                            <select name="credencial" className="form-control mb-2">
                                <option>
                                    prueba
                                </option>
                            </select>
                            <select name="credencial" className="form-control mb-2">
                                <option>
                                    prueba
                                </option>
                            </select>
                        </Col>
                        <Col>
                            <label className="w-100" for="credencial">¿Cúal es tu credencial?</label>
                            <select name="credencial" className="form-control mb-2">
                                <option>
                                    prueba
                                </option>
                            </select>
                            <select name="credencial" className="form-control mb-2">
                                <option>
                                    prueba
                                </option>
                            </select>
                            {!toggle &&
                                <select name="credencial" className="form-control">
                                    <option>
                                        prueba
                                    </option>
                                </select>}
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className="btn-round">Buscar</Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}
export default Cartilla;