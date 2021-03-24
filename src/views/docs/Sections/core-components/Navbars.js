/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <>
      <h1 class="bd-title" id="content">
        Navbars
      </h1>
      <p>
        We have two (2) demo Navbars in our product. These can be found inside:
      </p>
      <ul>
        <li>
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.js
          </code>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Navbars/IndexNavbar.js
          </code>
        </li>
      </ul>
      <p>
        These are the upper navigation for the{" "}
        <Link to="/register-page" target="_blank">
          register
        </Link>
        ,{" "}
        <Link to="/landing-page" target="_blank">
          landing
        </Link>{" "}
        and{" "}
        <Link to="/profile-page" target="_blank">
          profile
        </Link>{" "}
        pages and for the{" "}
        <Link to="/index" target="_blank">
          index
        </Link>{" "}
        page.
      </p>
      <p>
        They have a product brand text on the left and some buttons and social
        buttons on the right.
      </p>
      <p>
        They are static componnets, i.e. they do not accept any kind of props.
      </p>
      <p>You can go ahead and modify them as you wish.</p>
    </>
  );
}

export default Navbars;
