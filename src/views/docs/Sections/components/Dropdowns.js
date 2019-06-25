import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Dropdowns
        </h1>
        <p className="bd-lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin.
        </p>
        <h2 id="examples">Examples</h2>
        <p>
          Wrap the dropdown’s toggle (your button or link) and the dropdown menu
          within <code className="highlighter-rouge">.dropdown</code>, or
          another element that declares{" "}
          <code className="highlighter-rouge">position: relative;</code>.
          Dropdowns can be triggered from{" "}
          <code className="highlighter-rouge">{`<a>`}</code>
          or <code className="highlighter-rouge">{`<button>`}</code>
          elements to better fit your potential needs.
        </p>
        <h3 id="single-button-dropdowns">Single button dropdowns</h3>
        <p>
          Any single <code className="highlighter-rouge">.btn</code>
          can be turned into a dropdown toggle with some markup changes. Here’s
          how you can put them to work with either{" "}
          <code className="highlighter-rouge">{`<button>`}</code>
          elements:
        </p>
        <div className="bd-example" data-example-id="">
          <UncontrolledDropdown>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="secondary"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
            >
              Dropdown button
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <p>
          And with <code className="highlighter-rouge">{`<a>`}</code>
          elements:
        </p>
        <div className="bd-example" data-example-id="">
          <UncontrolledDropdown className="show">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="secondary"
              data-toggle="dropdown"
              href="#pablo"
              id="dropdownMenuLink"
              onClick={e => e.preventDefault()}
              role="button"
            >
              Dropdown link
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <p>The best part is you can do this with any button variant, too:</p>
        <div className="bd-example">
          <ButtonGroup className="dropdown">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="primary"
              data-toggle="dropdown"
              type="button"
            >
              Primary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup className="dropdown">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="secondary"
              data-toggle="dropdown"
              type="button"
            >
              Secondary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup className="dropdown">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="success"
              data-toggle="dropdown"
              type="button"
            >
              Success
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup className="dropdown">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="info"
              data-toggle="dropdown"
              type="button"
            >
              Info
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup className="dropdown">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="warning"
              data-toggle="dropdown"
              type="button"
            >
              Warning
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup className="dropdown">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="danger"
              data-toggle="dropdown"
              type="button"
            >
              Danger
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
        </div>
        <h3 id="split-button-dropdowns">Split button dropdowns</h3>
        <p>
          Similarly, create split button dropdowns with virtually the same
          markup as single button dropdowns, but with the addition of{" "}
          <code className="highlighter-rouge">.dropdown-toggle-split</code>
          for proper spacing around the dropdown caret.
        </p>
        <p>
          We use this extra class to reduce the horizontal{" "}
          <code className="highlighter-rouge">padding</code>
          on either side of the caret by 25% and remove the{" "}
          <code className="highlighter-rouge">margin-left</code>
          that’s added for regular button dropdowns. Those extra changes keep
          the caret centered in the split button and provide a more
          appropriately sized hit area next to the main button.
        </p>
        <div className="bd-example">
          <ButtonGroup>
            <Button color="primary" type="button">
              Primary
            </Button>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="dropdown-toggle-split"
              color="primary"
              data-toggle="dropdown"
              type="button"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup>
            <Button color="secondary" type="button">
              Secondary
            </Button>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="dropdown-toggle-split"
              color="secondary"
              data-toggle="dropdown"
              type="button"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup>
            <Button color="success" type="button">
              Success
            </Button>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="dropdown-toggle-split"
              color="success"
              data-toggle="dropdown"
              type="button"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup>
            <Button color="info" type="button">
              Info
            </Button>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="dropdown-toggle-split"
              color="info"
              data-toggle="dropdown"
              type="button"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup>
            <Button color="warning" type="button">
              Warning
            </Button>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="dropdown-toggle-split"
              color="warning"
              data-toggle="dropdown"
              type="button"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
          <ButtonGroup>
            <Button color="danger" type="button">
              Danger
            </Button>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              className="dropdown-toggle-split"
              color="danger"
              data-toggle="dropdown"
              type="button"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </ButtonGroup>
          {/* /btn-group */}
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <strong>
            <a
              href="https://getbootstrap.com/docs/4.3/components/dropdowns/"
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

export default Dropdowns;
