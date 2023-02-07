import { useRef } from "react";
import { Container } from "reactstrap";
import infoPlanes from  "../infoPlanes.json"
const PlanesStandard = () => {
    const prueba = useRef();
    return (
        <>
            <ProfilePageHeader imagen={"familiaPlanes.jpeg"} minHeight={"50vh"} Componente={infoPlanes.name}/>
            <Container>
                <img src={require(infoPlanes?.img)} alt="imagen de plan" className="img-fluid" style={{ marginTop: "-40px" }} />
            </Container>
        </>
    )
}
export default PlanesStandard;