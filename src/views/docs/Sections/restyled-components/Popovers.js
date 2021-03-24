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

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const exampleLiveDemo = `import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <>
        <Button id="Popover1" onClick={this.toggle} size="lg" color="primary">
          Click to toggle popover
        </Button>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          className="popover-primary"
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </Popover>
      </>
    );
  }
}`;

const exampleFourDirections = `import React from "react";

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

class Popovers extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popover1: false,
      popover2: false,
      popover3: false,
      popover4: false
    };
  }
  toggle(popover) {
    this.setState({
      [popover]: !this.state[popover]
    });
  }
  render() {
    return (
      <>
        <Button id="popover1" onClick={() => this.toggle("popover1")}>
          On left
        </Button>
        <Popover
          placement="left"
          isOpen={this.state.popover1}
          target="popover1"
          className="popover-primary"
        >
          <PopoverHeader>Popover On left</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </Popover>
        <Button id="popover2" onClick={() => this.toggle("popover2")}>
          On top
        </Button>
        <Popover
          placement="top"
          isOpen={this.state.popover2}
          target="popover2"
          className="popover-primary"
        >
          <PopoverHeader>Popover On top</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </Popover>
        <Button id="popover3" onClick={() => this.toggle("popover3")}>
          On top
        </Button>
        <Popover
          placement="right"
          isOpen={this.state.popover3}
          target="popover3"
          className="popover-primary"
        >
          <PopoverHeader>Popover On right</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </Popover>
        <Button id="popover4" onClick={() => this.toggle("popover4")}>
          On top
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popover4}
          target="popover4"
          className="popover-primary"
        >
          <PopoverHeader>Popover On bottom</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </Popover>
      </>
    );
  }
}

export default Popovers;
`;

const exampleNextClickClose = `import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <>
        <Button id="Popover1" onClick={this.toggle} size="lg" color="primary">
          Dismissible popover
        </Button>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
          className="popover-primary"
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </Popover>
      </>
    );
  }
}`;

class Popovers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
      popover1: false,
      popover2: false,
      popover3: false,
      popover4: false,
      Popover2: false,
    };
  }
  toggle1 = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  };
  toggle2 = () => {
    this.setState({
      Popover2: !this.state.Popover2,
    });
  };
  toggle = (popover) => {
    this.setState({
      [popover]: !this.state[popover],
    });
  };
  render() {
    return (
      <>
        <h1 className="bd-title">Popovers</h1>
        <p className="bd-lead">
          Documentation and examples for adding Bootstrap popovers, like those
          found in iOS, to any element on your site.
        </p>
        <h2>Static popover</h2>
        <p>Four options are available: top, right, bottom, and left aligned.</p>
        <div className="bd-example bd-example-popover-static">
          <div className="popover bs-popover-top bs-popover-top-docs">
            <div className="arrow" />
            <h3 className="popover-header">Popover top</h3>
            <div className="popover-body">
              <p>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </p>
            </div>
          </div>
          <div className="popover bs-popover-right bs-popover-right-docs">
            <div className="arrow" />
            <h3 className="popover-header">Popover right</h3>
            <div className="popover-body">
              <p>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </p>
            </div>
          </div>
          <div className="popover bs-popover-bottom bs-popover-bottom-docs">
            <div className="arrow" />
            <h3 className="popover-header">Popover bottom</h3>
            <div className="popover-body">
              <p>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </p>
            </div>
          </div>
          <div className="popover bs-popover-left bs-popover-left-docs">
            <div className="arrow" />
            <h3 className="popover-header">Popover left</h3>
            <div className="popover-body">
              <p>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </p>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <h2>Live demo</h2>
        <div className="bd-example">
          <Button
            id="Popover1"
            onClick={this.toggle1}
            size="lg"
            color="primary"
          >
            Click to toggle popover
          </Button>
          <Popover
            placement="right"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            className="popover-primary"
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </Popover>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleLiveDemo}
        </SyntaxHighlighter>
        <h2>Four directions</h2>
        <div className="bd-example">
          <Button id="popover1" onClick={() => this.toggle("popover1")}>
            On left
          </Button>
          <Popover
            placement="left"
            isOpen={this.state.popover1}
            target="popover1"
            className="popover-primary"
          >
            <PopoverHeader>Popover On left</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </Popover>
          <Button id="popover2" onClick={() => this.toggle("popover2")}>
            On top
          </Button>
          <Popover
            placement="top"
            isOpen={this.state.popover2}
            target="popover2"
            className="popover-primary"
          >
            <PopoverHeader>Popover On top</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </Popover>
          <Button id="popover3" onClick={() => this.toggle("popover3")}>
            On top
          </Button>
          <Popover
            placement="right"
            isOpen={this.state.popover3}
            target="popover3"
            className="popover-primary"
          >
            <PopoverHeader>Popover On right</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </Popover>
          <Button id="popover4" onClick={() => this.toggle("popover4")}>
            On top
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popover4}
            target="popover4"
            className="popover-primary"
          >
            <PopoverHeader>Popover On bottom</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </Popover>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleFourDirections}
        </SyntaxHighlighter>
        <h2>Dismiss on next click</h2>
        <p>
          You can automatically dissmis the Popover by adding the{" "}
          <code>toggle</code> prop on it like so:
        </p>
        <div className="bd-example">
          <Button
            id="Popover2"
            onClick={this.toggle2}
            size="lg"
            color="primary"
          >
            Click to toggle popover
          </Button>
          <Popover
            placement="right"
            isOpen={this.state.Popover2}
            target="Popover2"
            toggle={this.toggle2}
            className="popover-primary"
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </Popover>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleNextClickClose}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/popovers/?ref=creativetim"
            target="_blank"
          >
            reactstrap's popover documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Popovers;
