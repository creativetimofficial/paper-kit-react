

export const Contrata = () => {
    return (
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
    )
}