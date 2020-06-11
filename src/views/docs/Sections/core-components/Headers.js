/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <h1 class="bd-title" id="content">
        Headers
      </h1>
      <p>
        We have three (3) demo Headers in our product. These can be found
        inside:
      </p>
      <ul>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/IndexHeader.js
          </code>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/LandingPageHeader.js
          </code>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/ProfilePageHeader.js
          </code>
        </li>
      </ul>
      <p>
        These are the upper parts of the{" "}
        <Link to="/index" target="_blank">
          index
        </Link>
        ,{" "}
        <Link to="/landing-page" target="_blank">
          landing
        </Link>{" "}
        and{" "}
        <Link to="/profile-page" target="_blank">
          profile
        </Link>{" "}
        pages.
      </p>
      <p>
        They come with a title and a subtitle, over an image that fits the
        entire screen.
      </p>
    </>
  );
}

export default Headers;
