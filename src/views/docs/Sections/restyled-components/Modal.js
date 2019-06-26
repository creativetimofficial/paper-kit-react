/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Modal,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  UncontrolledTooltip
} from "reactstrap";

const codeLiveDemo = `import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function Example() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  return(
    <>
      <Button color="primary" type="button" onClick={() => setLiveDemo(true)}>
        Launch demo modal
      </Button>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLiveDemo(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;

const codeScrollingLongContent = `import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function Example() {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
  return(
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setScrollingLongContent(true)}
      >
        Launch demo modal
      </Button>
      <Modal isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setScrollingLongContent(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setScrollingLongContent(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => setScrollingLongContent(false)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;

const codeLoginModal = `import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function Example() {
  const [loginModal, setLoginModal] = React.useState(false);
  return(
    <>
      <Button
        className="btn-round"
        color="primary"
        type="button"
        onClick={() => setLoginModal(true)}
      >
        Login modal
      </Button>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h6 className="text-muted">Welcome</h6>
          <h3 className="modal-title text-center">Paper Kit</h3>
          <p>Log in to your account</p>
        </div>
        <div className="modal-body">
          <FormGroup>
            <label>Email</label>
            <Input defaultValue="" placeholder="Email" type="text" />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input defaultValue="" placeholder="Password" type="password" />
          </FormGroup>
          <Button block className="btn-round" color="default">
            Log in
          </Button>
        </div>
        <div className="modal-footer no-border-footer">
          <span className="text-muted text-center">
            Looking{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              create an account
            </a>
            ?
          </span>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;

const codeTooltipsAndPopovers = `import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal, UncontrolledPopover, PopoverHeader, PopoverBody, UncontrolledTooltip } from "reactstrap";

function Example() {
  const [tooltipsAndPopovers, setTooltipsAndPopovers] = React.useState(false);
  return(
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setTooltipsAndPopovers(true)}
      >
        Launch demo modal
      </Button>
      <Modal
        isOpen={tooltipsAndPopovers}
        toggle={() => setTooltipsAndPopovers(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setTooltipsAndPopovers(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <h5>Popover in a modal</h5>
          <p>
            This{" "}
            <Button
              className="popover-test"
              color="secondary"
              role="button"
              id="popover1"
            >
              button
            </Button>{" "}
            <UncontrolledPopover target="#popover1" placement="top">
              <PopoverHeader>Popover Title</PopoverHeader>
              <PopoverBody>Popover body content is set here.</PopoverBody>
            </UncontrolledPopover>
            triggers a popover on click.
          </p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p>
            <a className="tooltip-test" href="#pablo" id="tooltip1">
              This link
            </a>{" "}
            <UncontrolledTooltip target="#tooltip1" placement="top">
              Tooltip
            </UncontrolledTooltip>
            and{" "}
            <a className="tooltip-test" href="#pablo" id="tooltip2">
              that link
            </a>{" "}
            <UncontrolledTooltip target="#tooltip2" placement="top">
              Tooltip
            </UncontrolledTooltip>
            have tooltips on hover.
          </p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              onClick={() => setTooltipsAndPopovers(false)}
              type="button"
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button className="btn-link" color="danger" type="button">
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;

const codeOptionalSizes = `import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function Example() {
  const [largeModal, setLargeModal] = React.useState(false);
  const [smallModal, setSmallModal] = React.useState(false);
  return(
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setLargeModal(true)}
      >
        Large modal
      </Button>
      <Button
        color="primary"
        type="button"
        onClick={() => setSmallModal(true)}
      >
        Small modal
      </Button>
      <Modal
        isOpen={largeModal}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        toggle={() => setLargeModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="myLargeModalLabel">
            Large modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLargeModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
      </Modal>
      <Modal
        isOpen={smallModal}
        className="modal-sm"
        modalClassName="bd-example-modal-sm"
        toggle={() => setSmallModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="mySmallModalLabel">
            Small modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setSmallModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
      </Modal>
    </>
  );
}

export default Example;`;

function ModalDocs() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  const [tooltipsAndPopovers, setTooltipsAndPopovers] = React.useState(false);
  const [largeModal, setLargeModal] = React.useState(false);
  const [smallModal, setSmallModal] = React.useState(false);
  return (
    <>
      <h1 className="bd-title" id="content">
        Modal
      </h1>
      <p className="bd-lead">
        Use Bootstrap's JavaScript modal plugin to add dialogs to your site for
        lightboxes, user notifications, or completely custom content.
      </p>
      <h2 id="examples">Examples</h2>
      <h3 id="live-demo">Live demo</h3>
      <p>
        Toggle a working modal demo by clicking the button below. It will slide
        down and fade in from the top of the page.
      </p>
      <div className="bd-example">
        <Button color="primary" type="button" onClick={() => setLiveDemo(true)}>
          Launch demo modal
        </Button>
      </div>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLiveDemo(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => setLiveDemo(false)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeLiveDemo}
      </SyntaxHighlighter>
      <h3 id="scrolling-long-content">Scrolling long content</h3>
      <p>
        When modals become too long for the user’s viewport or device, they
        scroll independent of the page itself. Try the demo below to see what we
        mean.
      </p>
      <div className="bd-example">
        <Button
          color="primary"
          type="button"
          onClick={() => setScrollingLongContent(true)}
        >
          Launch demo modal
        </Button>
      </div>
      <Modal
        isOpen={scrollingLongContent}
        toggle={() => setScrollingLongContent(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setScrollingLongContent(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setScrollingLongContent(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => setScrollingLongContent(false)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeScrollingLongContent}
      </SyntaxHighlighter>
      <h3 id="login-modal">Login modal</h3>
      <div className="bd-example">
        <Button
          className="btn-round"
          color="primary"
          type="button"
          onClick={() => setLoginModal(true)}
        >
          Login modal
        </Button>
      </div>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h6 className="text-muted">Welcome</h6>
          <h3 className="modal-title text-center">Paper Kit</h3>
          <p>Log in to your account</p>
        </div>
        <div className="modal-body">
          <FormGroup>
            <label>Email</label>
            <Input defaultValue="" placeholder="Email" type="text" />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input defaultValue="" placeholder="Password" type="password" />
          </FormGroup>
          <Button block className="btn-round" color="default">
            Log in
          </Button>
        </div>
        <div className="modal-footer no-border-footer">
          <span className="text-muted text-center">
            Looking{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              create an account
            </a>
            ?
          </span>
        </div>
      </Modal>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeLoginModal}
      </SyntaxHighlighter>
      <h3 id="tooltips-and-popovers">Tooltips and popovers</h3>
      <p>
        <Link to="/documentation/tooltips">Tooltips</Link> and{" "}
        <Link to="/documentation/popovers">popovers</Link> can be placed within
        modals as needed. When modals are closed, any tooltips and popovers
        within are also automatically dismissed.
      </p>
      <div className="bd-example">
        <Button
          color="primary"
          type="button"
          onClick={() => setTooltipsAndPopovers(true)}
        >
          Launch demo modal
        </Button>
      </div>
      <Modal
        isOpen={tooltipsAndPopovers}
        toggle={() => setTooltipsAndPopovers(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setTooltipsAndPopovers(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <h5>Popover in a modal</h5>
          <p>
            This{" "}
            <Button
              className="popover-test"
              color="secondary"
              role="button"
              id="popover1"
            >
              button
            </Button>{" "}
            <UncontrolledPopover target="#popover1" placement="top">
              <PopoverHeader>Popover Title</PopoverHeader>
              <PopoverBody>Popover body content is set here.</PopoverBody>
            </UncontrolledPopover>
            triggers a popover on click.
          </p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p>
            <a className="tooltip-test" href="#pablo" id="tooltip1">
              This link
            </a>{" "}
            <UncontrolledTooltip target="#tooltip1" placement="top">
              Tooltip
            </UncontrolledTooltip>
            and{" "}
            <a className="tooltip-test" href="#pablo" id="tooltip2">
              that link
            </a>{" "}
            <UncontrolledTooltip target="#tooltip2" placement="top">
              Tooltip
            </UncontrolledTooltip>
            have tooltips on hover.
          </p>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              onClick={() => setTooltipsAndPopovers(false)}
              type="button"
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button className="btn-link" color="danger" type="button">
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeTooltipsAndPopovers}
      </SyntaxHighlighter>
      <h3 id="embedding-youtube-videos">Embedding YouTube videos</h3>
      <p>
        Embedding YouTube videos in modals requires additional JavaScript not in
        Bootstrap to automatically stop playback and more.{" "}
        <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">
          See this helpful Stack Overflow post
        </a>{" "}
        for more information.
      </p>
      <h2 id="optional-sizes">Optional sizes</h2>
      <p>
        Modals have two optional sizes, available via modifier classes to be
        placed on <code>size</code> prop of the <code>&lt;Modal&gt;</code> tag.
        These sizes kick in at certain breakpoints to avoid horizontal
        scrollbars on narrower viewports.
      </p>
      <div className="bd-example">
        <Button
          color="primary"
          type="button"
          onClick={() => setLargeModal(true)}
        >
          Large modal
        </Button>
        <Button
          color="primary"
          type="button"
          onClick={() => setSmallModal(true)}
        >
          Small modal
        </Button>
      </div>
      <Modal
        isOpen={largeModal}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        toggle={() => setLargeModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="myLargeModalLabel">
            Large modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLargeModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
      </Modal>
      <Modal
        isOpen={smallModal}
        className="modal-sm"
        modalClassName="bd-example-modal-sm"
        toggle={() => setSmallModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="mySmallModalLabel">
            Small modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setSmallModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
      </Modal>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeOptionalSizes}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        For props please refer to{" "}
        <a
          href="https://reactstrap.github.io/components/modals/"
          target="_blank"
        >
          reactstrap modal documentation
        </a>
        .
      </p>
    </>
  );
}

export default ModalDocs;
