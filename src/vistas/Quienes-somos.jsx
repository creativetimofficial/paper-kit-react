import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import Navbar from "componentes/Navbar/Navbar.js";
import ProfilePageHeader from "componentes/Header/ProfilePageHeader.js";
import Footer from "componentes/Footer/Footer.js";
// import img from "../assets/img/family.jpeg"

function QuienesSomos() {
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
            <ProfilePageHeader imagen={"family.jpeg"} alturaBanner={"-143px"}/>
            <Container>
                <Row>
                    <Col md="6">
                        <h2 className="mt-4">Acompañarte siempre y en todo momento.</h2>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md="6">
                        <p className="my-4">Somos una empresa de medicina prepaga comprometida con el bienestar y la salud de nuestros asociados. Desde hace más de 45 años brindamos cobertura médica de primer nivel, en cada rincón el país.</p>
                        <p className="my-4">Somos parte de un gran Grupo Asociativo conformado por la Asociación de Cooperativas Argentinas (ACA), el Grupo Asegurador La Segunda, Coovaeco Turismo y Fundación Nodos. Nuestros valores cooperativos expresan nuestro origen y un propósito que nos define y nos permite comprender que los asociados, antes que asociados, son</p>
                    </Col>
                    <Col md="6">
                        <p className="my-4">personas. Comprendemos que cada una de ellas merece un trato integral, dedicado, personal y de calidad. Comprendemos esencialmente, que su salud está por delante de cualquier circunstancia. Los protegemos porque esa es nuestra razón de ser. Los acompañamos siempre y en todo momento porque esa es nuestra forma de ser. El arraigado sentido de pertenencia y la convicción diaria de todos los que formamos parte de Avalian motiva la eficiencia de nuestro servicio y la calidez de nuestra atención. Estamos evolucionando para estar más cerca. Para cuidarnos para lo que viene.</p>
                    </Col>
                </Row>
            </Container>
            <Row style={{ backgroundColor: "rgb(241, 241, 241)" }}  className="mb-5 w-100 mx-auto">
                <Col md="6">
                    <img className="img-fluid" src="https://th.bing.com/th/id/R.620ceb9b8d8f51e2972a06a220ea044f?rik=vCG6%2bczMe3xumw&riu=http%3a%2f%2fwww.usat.edu.pe%2fweb%2fwp-content%2fuploads%2f2020%2f09%2fFamilia.jpg&ehk=DRYbvSqxyT8evVDzsmX%2fQYtNp3qcd719m7MGMpPCPJQ%3d&risl=&pid=ImgRaw&r=0" alt="prueba" />
                </Col>
                <Col md="6">
                    <h4>Nos mueve un propósito</h4>
                    <p>Cuidar y mantener la salud  de nuestros asociados, garantizando el acceso a una cobertura geográfica nacional e integrada.</p>
                    <Container>
                        <Row>
                            <h4>Nos guían nuestros valores</h4>
                        </Row>
                    </Container>
                    <Row>
                        <Col md="6">
                            <p><b>Nos mueve un propósito</b></p>
                            <p>Cuidar y mantener la salud  de nuestros asociados, garantizando el acceso a una cobertura geográfica nacional e integrada.</p>
                            <p><b>Nos mueve un propósito</b></p>
                            <p>Cuidar y mantener la salud  de nuestros asociados, garantizando el acceso a una cobertura geográfica nacional e integrada.</p>
                            <p><b>Nos mueve un propósito</b></p>
                            <p>Cuidar y mantener la salud  de nuestros asociados, garantizando el acceso a una cobertura geográfica nacional e integrada.</p>
                        </Col>
                        <Col md="6">
                            <p><b>Nos mueve un propósito</b></p>
                            <p>Cuidar y mantener la salud  de nuestros asociados, garantizando el acceso a una cobertura geográfica nacional e integrada.</p>
                            <p><b>Nos mueve un propósito</b></p>
                            <p>Cuidar y mantener la salud  de nuestros asociados, garantizando el acceso a una cobertura geográfica nacional e integrada.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </>
    );
}

export default QuienesSomos;
