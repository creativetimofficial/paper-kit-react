import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";

// core components
import Navbar from "componentes/Navbar/Navbar.js";
import ProfilePageHeader from "componentes/Header/ProfilePageHeader.js";
import Footer from "componentes/Footer/Footer.js";

function Contacto() {
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    });
    return (
        <>
            <Navbar />
            <ProfilePageHeader imagen={"Contacto.jpg"} minHeight={"50vh"}/>
            <Container>
                <Row>
                    <Col md="6">
                        <h4 className="mt-4">Seleccioná un área</h4>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md="6">
                        <form action="" method="POST" /* ref={form} onSubmit={sendEmail} */>
                            <div className=" mt-3">
                                <label for="txtNombre">Nombre</label>
                                <input type="text" name="txtNombre" id="txtNombre" className="form-control" /* onChange={(e) => { setName(e.target.value) }}  *//>
                            </div>
                            <div className=" mt-2">
                                <label for="txtApellido">Apellido</label>
                                <input type="text" name="txtApellido" id="txtApellido" className="form-control" /* onChange={(e) => { setEmail(e.target.value) }}  *//>
                            </div>
                            <div className=" mt-2">
                                <label for="txtTelefono">Telefono</label>
                                <input type="number" name="txtTelefono" id="txtTelefono" className="form-control" />
                            </div>
                            <div className=" mt-2">
                                <label for="txtEmail">E-mail</label>
                                <input type="email" name="txtEmail" id="txtEmail" className="form-control" />
                            </div>
                            <div className=" mt-2">
                                <label for="txtComentario">Comentario</label>
                                <textarea name="message" id="comentarios" placeholder="Comentarios..." cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <div id="alertaMensaje">
                                <div className="alert alert-success text-center" hidden={true} role="alert">
                                    ¡Se ha enviado el mensaje correctamente!
                                </div>
                                <div className="alert alert-danger text-center" hidden={true} role="alert">
                                    ¡Faltan completar datos!
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-end mt-3 me-5 mb-3">
                                <Button type="submit" className="btn-round" color="danger">Enviar</Button>
                            </div>
                        </form>
                    </Col>
                    <Col md="6">
                        <p className="my-4">En PrePaid pensamos y actuamos en función de nuestros asociados. Con nuestra amplia gama de planes procuramos un modelo de atención personalizado. Si tenés alguna consulta podés escribirnos a través de nuestros formularios de contacto.</p>
                        <h3>Emergencias</h3>
                        <h3>0800 555 5556</h3>
                        <h3>Atención telefónica</h3>
                        <h3>0810 222 SALUD (72583)</h3>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Contacto;