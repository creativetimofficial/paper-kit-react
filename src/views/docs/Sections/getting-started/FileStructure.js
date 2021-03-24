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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
// import {
// } from "reactstrap";

const files = `paper-kit-react-master
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   └── bootstrap.min.css.map
    │   ├── demo
    │   │   └── demo.css
    │   ├── fonts
    │   ├── img
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   └── scss
    │       ├── paper-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── paper-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── paper-kit.scss
    ├── components
    │   ├── Footers
    │   │   └── DemoFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── ProfilePage.js
        │   └── RegisterPage.js
        └── index-sections
            ├── SectionButtons.js
            ├── SectionCarousel.js
            ├── SectionDark.js
            ├── SectionDownload.js
            ├── SectionExamples.js
            ├── SectionJavaScript.js
            ├── SectionLogin.js
            ├── SectionNavbars.js
            ├── SectionNavigation.js
            ├── SectionNotifications.js
            ├── SectionNucleoIcons.js
            ├── SectionProgress.js
            └── SectionTypography.js`;

class FileStructure extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          File Structure
        </h1>
        <p className="bd-lead">
          Paper Kit React is a freeby Bootstrap 4, React and Reactstrap UI Kit.
        </p>
        <h2 id="paper-kit-react-structure">Paper Kit React Structure</h2>
        <p>
          Once you have downloaded the archive and opened it, you will find the
          following structure:
        </p>
        <SyntaxHighlighter language="bash" style={prism}>
          {files}
        </SyntaxHighlighter>
        <h2 id="restyled-components">Restyled Components</h2>
        <p>
          Here is the list of Bootstrap 4 components that we restyled in Paper
          kit:
        </p>
        <ul>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Textarea</li>
          <li>Menu</li>
          <li>Dropdown</li>
          <li>Progress Bars</li>
          <li>Navigation Menu</li>
          <li>Pagination</li>
          <li>Labels</li>
          <li>Notifications</li>
          <li>Typography</li>
          <li>Images</li>
          <li>Tooltips</li>
          <li>Popovers</li>
          <li>Modal</li>
          <li>Carousel</li>
        </ul>
        <h2 id="new-components">New Components</h2>
        <p>
          Besides giving the existing Bootstrap elements a new look, we added
          new ones, so that the interface and consistent and homogenous.
        </p>
        <p>Going through them, we added:</p>
        <ul>
          <li>Checkboxes</li>
          <li>Radio Buttons</li>
          <li>Sliders</li>
          <li>Datetime</li>
        </ul>
      </>
    );
  }
}

export default FileStructure;
