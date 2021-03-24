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
/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
// import {
// } from "reactstrap";

class Introduction extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Introduction
        </h1>
        <p className="bd-lead">
          Paper Kit React is a freeby Bootstrap 4, React and Reactstrap UI Kit.
        </p>
        <h2 id="quick-start">Quick start</h2>
        <p>
          To start using the UI Kit you will need to import some files in your
          current project or start from scratch using our template (scroll down
          in this page to view it).
        </p>
        <h3 id="css">CSS</h3>
        <p>
          Copy-paste the stylesheet into your{" "}
          <code className="highlighter-rouge">index.js</code> file before all
          other stylesheets to load our CSS.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`// styles\nimport "assets/css/bootstrap.min.css";\nimport "assets/css/paper-kit.css";\n// import "assets/css/paper-kit.min.css";\n// import "assets/css/paper-kit.css.map";\nimport "assets/demo/demo.css";`}
        </SyntaxHighlighter>
        <p>Or you can import our SCSS:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`// styles\nimport "assets/css/bootstrap.min.css";\nimport "assets/scss/paper-kit.scss";\nimport "assets/demo/demo.css";`}
        </SyntaxHighlighter>
        <h3 id="fonts-and-icons">Fonts and Icons</h3>
        <p>
          Copy-paste the stylesheet{" "}
          <code className="highlighter-rouge">{`<link>`}</code> into your{" "}
          <code className="highlighter-rouge">{`<head>`}</code> before all other
          stylesheets to load the Fonts and Icons (inside your{" "}
          <code className="highlighter-rouge">index.html</code> file).
        </p>
        <SyntaxHighlighter language="html" style={prism}>
          {`<!--     Fonts and icons     -->\n<link\n  href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"\n  rel="stylesheet"\n/>\n<link\n  href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"\n  rel="stylesheet"\n/>`}
        </SyntaxHighlighter>
        <h2 id="local-development">Local Development</h2>
        <p>Follow the next steps to start using our product:</p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/?ref=creativetim" target="_blank">
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/?ref=pdr-quick-start-docs-page"
              target="_blank"
            >
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to the{" "}
            <a
              href="https://www.creative-tim.com/product/paper-kit-react?ref=pdr-quick-start-docs-page"
              target="_blank"
            >
              product page
            </a>{" "}
            (be sure to be logged into your account)
          </li>
          <li>
            Press the download button near <b>Paper Kit React</b> product (this
            will download onto your computer a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
          </li>
          <li>
            Or you can simply run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will install{" "}
            <code className="highlighter-rouge">node_modules</code> and also
            will start your project.
          </li>
          <li>
            If you have an error something containing
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`Module not found`}</SyntaxHighlighter>
            you need to do the following
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install --g cross-env`}</SyntaxHighlighter>
            then change the script, for example the start script from
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "react-scripts start",`}</SyntaxHighlighter>
            to
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            <b>
              The same should be done with any other script that has the above
              error.
            </b>
          </li>
          <li>
            If you have an error containing{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`props.history of undefined`}</SyntaxHighlighter>{" "}
            (this can happen when you integrate our project with another one)
            then you need to make the changes found{" "}
            <a
              href="https://github.com/creativetimofficial/paper-kit-react/issues/70?ref=creativetim"
              target="_blank"
            >
              {" "}
              here
            </a>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to{" "}
                <code className="highlighter-rouge">your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                And after this, you can copy and paste anything that you want
                from our product (the most important is the{" "}
                <code className="highlighter-rouge">src/assets</code> which has
                all of our style, fonts and images).
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app?ref=creativetim"
                  target="_blank"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <a href="https://localhost:3000" target="_blank">
              https://localhost:3000
            </a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html?ref=creativetim"
              target="_blank"
            >
              react
            </a>
          </li>
        </ul>
        <h2 id="live-production">Live Production</h2>
        <p>
          These are some free open source tutorial on how to deploy a React app
          on some servers. Please note that your project might need some
          additional configs to deploy it on these servers (Our demo product
          needs no adition configs):
        </p>
        <ul>
          <li>
            <a
              href="https://blog.heroku.com/deploying-react-with-zero-configuration?ref=creativetim"
              target="_blank"
            >
              tutorial for deploying on heroku
            </a>
          </li>
          <li>
            <a
              href="https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089?ref=creativetim"
              target="_blank"
            >
              tutorial for deploying on github pages and surge
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af?ref=creativetim"
              target="_blank"
            >
              tutorial for deploying on S3 and CloudFront
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Introduction;