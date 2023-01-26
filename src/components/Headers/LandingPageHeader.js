/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

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
            <i className="nc-badge" />
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
            <i className="nc-favourite-28" />
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
