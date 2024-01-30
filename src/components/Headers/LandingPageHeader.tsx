/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
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
          backgroundColor: 'black',
          // backgroundImage:
          //   "url(" + require("assets/img/fabio-mangione.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">

              <h1>Desenvolva, colabore e cresça junto</h1>
              <h3>Nosso propósito está focado em criar uma experiência simplificada
                para testar, impulsionar, alavancar e escalar novos negócios digitais.
                Em minutos preparar uma loja diversificada em diferentes marketplaces
                você escolhe o Nicho de mercado, ou área que deseja atuar.
                E nós cuidamos da parte chata desse processo.
              </h3>

            <br />
            <Button
              href="#comofunciona"
              className="btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              Veja com funciona
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Colabore
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
