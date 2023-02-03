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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import NucleoIcons from "vistas/NucleoIcons.js";
import LandingPage from "vistas/LandingPage.js";
import ProfilePage from "vistas/ProfilePage.js";
import RegisterPage from "vistas/RegisterPage.js";
import QuienesSomos from "vistas/Quienes-somos";
import Contacto from "vistas/Contacto";
import Planes from "vistas/Planes/Planes";
import Cartilla from "vistas/Cartilla/Cartilla";

// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/quienes-somos"
        render={(props) => <QuienesSomos {...props} />}
      />
      <Route
        path="/contacto"
        render={(props) => <Contacto {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/planes"
        render={(props) => <Planes {...props} />}
      />
      <Route
        path="/cartilla"
        render={(props) => <Cartilla {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
);
