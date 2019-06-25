import React from "react";

// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Buttons
        </h1>
        <p className="bd-lead">
          Use Paper Kit's custom button styles for actions in forms, dialogs,
          and more with support for multiple sizes, states, and more.
        </p>
        <h2 id="examples">Examples</h2>
        <p>
          Paper Kit has changed the predefined button styles from Bootstrap,
          each serving its own semantic purpose, with a few extras thrown in for
          more control.
        </p>
        <div className="bd-example" data-example-id="">
          <Button color="primary" type="button">
            Primary
          </Button>
          <Button color="info" type="button">
            Info
          </Button>
          <Button color="success" type="button">
            Success
          </Button>
          <Button color="danger" type="button">
            Danger
          </Button>
          <Button color="warning" type="button">
            Warning
          </Button>
          <Button color="default" type="button">
            Default
          </Button>
        </div>
        <h2 id="style-buttons">Style buttons</h2>
        <div className="bd-example" data-example-id="">
          <Button color="primary">Default</Button>
          <Button className="btn-round" color="primary">
            Round
          </Button>
          <Button className="btn-round" color="primary">
            <i className="fa fa-heart" />
            With Icon
          </Button>
          <Button className="btn-just-icon" color="primary">
            <i className="fa fa-heart" />
          </Button>
          <Button className="btn-neutral" color="primary">
            Neutral
          </Button>
        </div>
        <h2 id="sizes">Sizes</h2>
        <p>
          Fancy larger or smaller buttons? Add{" "}
          <code className="highlighter-rouge">.btn-lg</code>
          or <code className="highlighter-rouge">.btn-sm</code>
          for additional sizes.
        </p>
        <div className="bd-example" data-example-id="">
          <Button color="primary" size="sm">
            Small
          </Button>
          <Button color="primary">Regular</Button>
          <Button color="primary" size="lg">
            Large
          </Button>
        </div>
        <h2 id="disabled-state">Disabled state</h2>
        <p>
          Make buttons look inactive by adding the{" "}
          <code className="highlighter-rouge">disabled</code>
          boolean attribute to any{" "}
          <code className="highlighter-rouge">{`<button>`}</code>
          element.
        </p>
        <div className="bd-example" data-example-id="">
          <Button color="primary" disabled size="lg" type="button">
            Primary button
          </Button>
          <Button color="secondary" disabled size="lg" type="button">
            Button
          </Button>
        </div>
        <p>
          Disabled buttons using the{" "}
          <code className="highlighter-rouge">{`<a>`}</code>
          element behave a bit different:
        </p>
        <ul>
          <li>
            <code className="highlighter-rouge">{`<a>`}</code>s don’t support
            the <code className="highlighter-rouge">disabled</code>
            attribute, so you must add the{" "}
            <code className="highlighter-rouge">.disabled</code>
            class to make it visually appear disabled.
          </li>
          <li>
            Some future-friendly styles are included to disable all{" "}
            <code className="highlighter-rouge">pointer-events</code>
            on anchor buttons. In browsers which support that property, you
            won’t see the disabled cursor at all.
          </li>
        </ul>
        <div className="bd-example" data-example-id="">
          <Button
            aria-disabled={true}
            className="disabled"
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
            size="lg"
          >
            Primary link
          </Button>
          <Button
            aria-disabled={true}
            className="disabled"
            color="secondary"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
            size="lg"
          >
            Link
          </Button>
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <strong>
            <a
              href="https://getbootstrap.com/docs/4.3/components/buttons/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bootstrap Documentation
            </a>
          </strong>
          .
        </p>
      </>
    );
  }
}

export default Buttons;
