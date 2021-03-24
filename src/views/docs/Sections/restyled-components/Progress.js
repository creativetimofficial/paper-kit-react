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
/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Progress } from "reactstrap";

const codeBackgrounds = `import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

// core components

function Example(){
  return (
    <>
      <div className="progress-container progress-primary">
        <span className="progress-badge">Primary</span>
        <Progress
          max="100"
          value="60"
          barClassName="progress-bar-primary"
        />
      </div>
      <div className="progress-container progress-danger">
        <span className="progress-badge">Danger</span>
        <Progress max="100" value="50" barClassName="progress-bar-danger" />
      </div>
      <div className="progress-container progress-warning">
        <span className="progress-badge">Warning</span>
        <Progress
          max="100"
          value="77"
          barClassName="progress-bar-warning"
        />
      </div>
      <div className="progress-container progress-success">
        <span className="progress-badge">Success</span>
        <Progress
          max="100"
          value="46"
          barClassName="progress-bar-success"
        />
      </div>
      <div className="progress-container progress-info">
        <span className="progress-badge">Info</span>
        <Progress max="100" value="90" barClassName="progress-bar-info" />
      </div>
    </>
  );
}

export default Example;`;

const codeMultiple = `import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

// core components

function Example(){
  return (
    <>
      <Progress multi>
        <Progress bar max="100" value="15" />
        <Progress bar barClassName="bg-success" max="100" value="30" />
        <Progress bar barClassName="bg-info" max="100" value="20" />
      </Progress>
    </>
  );
}

export default Example;`;

const codeStriped = `import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

// core components

function Example(){
  return (
    <>
      <Progress
        striped
        max="100"
        value="10"
        barClassName="progress-bar-primary"
      />
      <Progress
        striped
        max="100"
        value="25"
        barClassName="progress-bar-success"
      />
      <Progress
        striped
        max="100"
        value="50"
        barClassName="progress-bar-info"
      />
      <Progress
        striped
        max="100"
        value="75"
        barClassName="progress-bar-warning"
      />
      <Progress
        striped
        max="100"
        value="100"
        barClassName="progress-bar-danger"
      />
    </>
  );
}

export default Example;`;

class ProgressDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Progress
        </h1>
        <p className="bd-lead">
          Documentation and examples for using Bootstrap custom progress bars
          featuring support for stacked bars, animated backgrounds, and text
          labels.
        </p>
        <h2 id="backgrounds">Backgrounds</h2>
        <p>
          Use background utility classes to change the appearance of individual
          progress bars.
        </p>
        <div className="bd-example" data-example-id="">
          <div className="progress-container progress-primary">
            <span className="progress-badge">Primary</span>
            <Progress
              max="100"
              value="60"
              barClassName="progress-bar-primary"
            />
          </div>
          <div className="progress-container progress-danger">
            <span className="progress-badge">Danger</span>
            <Progress max="100" value="50" barClassName="progress-bar-danger" />
          </div>
          <div className="progress-container progress-warning">
            <span className="progress-badge">Warning</span>
            <Progress
              max="100"
              value="77"
              barClassName="progress-bar-warning"
            />
          </div>
          <div className="progress-container progress-success">
            <span className="progress-badge">Success</span>
            <Progress
              max="100"
              value="46"
              barClassName="progress-bar-success"
            />
          </div>
          <div className="progress-container progress-info">
            <span className="progress-badge">Info</span>
            <Progress max="100" value="90" barClassName="progress-bar-info" />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBackgrounds}
        </SyntaxHighlighter>
        <h2 id="multiple-bars">Multiple bars</h2>
        <p>
          Include multiple progress bars in a progress component if you need.
        </p>
        <div className="bd-example" data-example-id="">
          <Progress multi>
            <Progress bar max="100" value="15" />
            <Progress bar barClassName="bg-success" max="100" value="30" />
            <Progress bar barClassName="bg-info" max="100" value="20" />
          </Progress>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeMultiple}
        </SyntaxHighlighter>
        <h2 id="striped">Striped</h2>
        <p>
          Add <code className="highlighter-rouge">striped</code> to any{" "}
          <code className="highlighter-rouge">ProgressBar</code> to apply a
          stripe via CSS gradient over the progress bar’s background color.
        </p>
        <div className="bd-example" data-example-id="">
          <Progress
            striped
            max="100"
            value="10"
            barClassName="progress-bar-primary"
          />
          <Progress
            striped
            max="100"
            value="25"
            barClassName="progress-bar-success"
          />
          <Progress
            striped
            max="100"
            value="50"
            barClassName="progress-bar-info"
          />
          <Progress
            striped
            max="100"
            value="75"
            barClassName="progress-bar-warning"
          />
          <Progress
            striped
            max="100"
            value="100"
            barClassName="progress-bar-danger"
          />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStriped}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/progress/?ref=creativetim"
            target="_blank"
          >
            reactstrap documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default ProgressDocs;
