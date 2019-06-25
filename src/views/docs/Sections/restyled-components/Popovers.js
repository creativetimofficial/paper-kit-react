import React from "react";

// reactstrap components
import {
  Button,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

class Popovers extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Popovers
        </h1>
        <p className="bd-lead">
          Documentation and examples for adding Bootstrap popovers, like those
          found in iOS, to any element on your site.
        </p>
        <h2 id="static-popover">Static popover</h2>
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
        <h2 id="live-demo">Live demo</h2>
        <div className="bd-example" data-example-id="">
          <Button
            color="danger"
            data-content="And here's some amazing content. It's very engaging. Right?"
            id="tooltip958516564"
            size="lg"
            title="Popover title"
            type="button"
          >
            Click to toggle popover
          </Button>
          <UncontrolledPopover target="tooltip958516564">
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        <h3 id="four-directions">Four directions</h3>
        <div className="bd-example popover-demo">
          <div className="bd-example-popovers">
            <Button
              color="secondary"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="top"
              id="tooltip163409787"
              type="button"
            >
              Popover on top
            </Button>
            <UncontrolledPopover placement="top" target="tooltip163409787">
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="secondary"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="right"
              id="tooltip436498734"
              type="button"
            >
              Popover on right
            </Button>
            <UncontrolledPopover placement="right" target="tooltip436498734">
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="secondary"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="bottom"
              id="tooltip113461198"
              type="button"
            >
              Popover on bottom
            </Button>
            <UncontrolledPopover placement="bottom" target="tooltip113461198">
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="secondary"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="left"
              id="tooltip677809118"
              type="button"
            >
              Popover on left
            </Button>
            <UncontrolledPopover placement="left" target="tooltip677809118">
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
          </div>
        </div>
        <h3 id="dismiss-on-next-click">Dismiss on next click</h3>
        <p>
          Use the <code className="highlighter-rouge">focus</code>
          trigger to dismiss popovers on the user’s next click of a different
          element than the toggle element.
        </p>
        <div className="bd-callout bd-callout-danger">
          <h4 id="specific-markup-required-for-dismiss-on-next-click">
            Specific markup required for dismiss-on-next-click
          </h4>
          <p>
            For proper cross-browser and cross-platform behavior, you must use
            the <code className="highlighter-rouge">{`<a>`}</code>
            tag, <em>not</em>
            the <code className="highlighter-rouge">{`<button>`}</code>
            tag, and you also must include a{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">
              <code className="highlighter-rouge">tabindex</code>
            </a>
            attribute.
          </p>
        </div>
        <div className="bd-example" data-example-id="">
          <Button
            color="danger"
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-trigger="focus"
            id="tooltip135659297"
            role="button"
            size="lg"
            tabindex="0"
            title="Dismissible popover"
          >
            Dismissible popover
          </Button>
          <UncontrolledPopover target="tooltip135659297">
            <PopoverHeader>Dismissible popover</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. Right?
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <a href="https://getbootstrap.com/docs/4.3/components/popovers/">
            Bootstrap Documentation
          </a>
        </p>
      </>
    );
  }
}

export default Popovers;
