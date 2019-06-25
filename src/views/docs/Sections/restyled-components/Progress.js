import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

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
            <Progress max="100" value="60" />
          </div>
          <div className="progress-container progress-danger">
            <span className="progress-badge">Danger</span>
            <Progress max="100" value="50" />
          </div>
          <div className="progress-container progress-warning">
            <span className="progress-badge">Warning</span>
            <Progress max="100" value="77" />
          </div>
          <div className="progress-container progress-success">
            <span className="progress-badge">Success</span>
            <Progress max="100" value="46" />
          </div>
          <div className="progress-container progress-info">
            <span className="progress-badge">Info</span>
            <Progress max="100" value="90" />
          </div>
        </div>
        <h2 id="multiple-bars">Multiple bars</h2>
        <p>
          Include multiple progress bars in a progress component if you need.
        </p>
        <div className="bd-example" data-example-id="">
          <Progress multi>
            <Progress bar max="100" value="15" />
            <Progress bar barclassName="bg-success" max="100" value="30" />
            <Progress bar barclassName="bg-info" max="100" value="20" />
          </Progress>
        </div>
        <h2 id="striped">Striped</h2>
        <p>
          Add <code className="highlighter-rouge">.progress-bar-striped</code>
          to any <code className="highlighter-rouge">.progress-bar</code>
          to apply a stripe via CSS gradient over the progress bar’s background
          color.
        </p>
        <div className="bd-example" data-example-id="">
          <Progress max="100" value="10" />
          <Progress max="100" value="25" />
          <Progress max="100" value="50" />
          <Progress max="100" value="75" />
          <Progress max="100" value="100" />
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <a href="https://getbootstrap.com/docs/4.3/components/progress/">
            Bootstrap Documentation
          </a>
        </p>
      </>
    );
  }
}

export default ProgressDocs;
