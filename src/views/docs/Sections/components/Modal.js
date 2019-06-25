import React from "react";

// reactstrap components
import { Button, FormGroup, Input, Modal, Table } from "reactstrap";

class ModalDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Modal
        </h1>
        <p className="bd-lead">
          Use Bootstrap's JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>
        <h2 id="examples">Examples</h2>
        <h3 id="modal-components">Modal components</h3>
        <p>
          Below is a <em>static</em>
          modal example (meaning its{" "}
          <code className="highlighter-rouge">position</code>
          and <code className="highlighter-rouge">display</code>
          have been overridden). Included are the modal header, modal body
          (required for <code className="highlighter-rouge">padding</code>
          ), and modal footer (optional). We ask that you include modal headers
          with dismiss actions whenever possible, or provide another explicit
          dismiss action.
        </p>
        <div className="bd-example bd-example-modal">
          <Modal>
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <div className="left-side">
                <Button
                  className="btn-link"
                  color="default"
                  data-dismiss="modal"
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
        </div>
        <h3 id="live-demo">Live demo</h3>
        <p>
          Toggle a working modal demo by clicking the button below. It will
          slide down and fade in from the top of the page.
        </p>
        <Modal>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLiveLabel">
              Modal title
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
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
        <div className="bd-example">
          <Button
            color="primary"
            data-target="#exampleModalLive"
            data-toggle="modal"
            type="button"
          >
            Launch demo modal
          </Button>
        </div>
        <h3 id="scrolling-long-content">Scrolling long content</h3>
        <p>
          When modals become too long for the user’s viewport or device, they
          scroll independent of the page itself. Try the demo below to see what
          we mean.
        </p>
        <Modal>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
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
        <div className="bd-example">
          <Button
            color="primary"
            data-target="#exampleModalLong"
            data-toggle="modal"
            type="button"
          >
            Launch demo modal
          </Button>
        </div>
        <h3 id="login-modal">Login modal</h3>
        <div className="bd-example">
          <Button
            className="btn-round"
            color="primary"
            data-target="#loginModal"
            data-toggle="modal"
            type="button"
          >
            Login modal
          </Button>
          <Modal>
            <div className="modal-header no-border-header text-center">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
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
        </div>
        <h3 id="tooltips-and-popovers">Tooltips and popovers</h3>
        <p>
          <a href="/docs/1.0/components/tooltips/">Tooltips</a>
          and <a href="/docs/1.0/components/popovers/">popovers</a>
          can be placed within modals as needed. When modals are closed, any
          tooltips and popovers within are also automatically dismissed.
        </p>
        <Modal>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalPopoversLabel">
              Modal title
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
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
                data-container="#exampleModalPopovers"
                data-content="Popover body content is set in this attribute."
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="button"
                title="Popover title"
              >
                button
              </Button>
              triggers a popover on click.
            </p>
            <hr />
            <h5>Tooltips in a modal</h5>
            <p>
              <a
                className="tooltip-test"
                data-container="#exampleModalPopovers"
                href="#pablo"
                onClick={e => e.preventDefault()}
                title="Tooltip"
              >
                This link
              </a>
              and{" "}
              <a
                className="tooltip-test"
                data-container="#exampleModalPopovers"
                href="#pablo"
                onClick={e => e.preventDefault()}
                title="Tooltip"
              >
                that link
              </a>
              have tooltips on hover.
            </p>
          </div>
          <div className="modal-footer">
            <div className="left-side">
              <Button
                className="btn-link"
                color="default"
                data-dismiss="modal"
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
        <div className="bd-example">
          <Button
            color="primary"
            data-target="#exampleModalPopovers"
            data-toggle="modal"
            type="button"
          >
            Launch demo modal
          </Button>
        </div>
        <h3 id="embedding-youtube-videos">Embedding YouTube videos</h3>
        <p>
          Embedding YouTube videos in modals requires additional JavaScript not
          in Bootstrap to automatically stop playback and more.{" "}
          <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">
            See this helpful Stack Overflow post
          </a>
          for more information.
        </p>
        <h2 id="optional-sizes">Optional sizes</h2>
        <p>
          Modals have two optional sizes, available via modifier classes to be
          placed on a <code className="highlighter-rouge">.modal-dialog</code>.
          These sizes kick in at certain breakpoints to avoid horizontal
          scrollbars on narrower viewports.
        </p>
        <div className="bd-example">
          <Button
            color="primary"
            data-target=".bd-example-modal-lg"
            data-toggle="modal"
            type="button"
          >
            Large modal
          </Button>
          <Button
            color="primary"
            data-target=".bd-example-modal-sm"
            data-toggle="modal"
            type="button"
          >
            Small modal
          </Button>
        </div>
        <Modal className="modal-lg" modalclassName="bd-example-modal-lg">
          <div className="modal-header">
            <h4 className="modal-title" id="myLargeModalLabel">
              Large modal
            </h4>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">...</div>
        </Modal>
        <Modal className="modal-sm" modalclassName="bd-example-modal-sm">
          <div className="modal-header">
            <h4 className="modal-title" id="mySmallModalLabel">
              Small modal
            </h4>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">...</div>
        </Modal>
        <h2 id="usage">Usage</h2>
        <p>
          The modal plugin toggles your hidden content on demand, via data
          attributes or JavaScript. It also adds{" "}
          <code className="highlighter-rouge">.modal-open</code>
          to the <code className="highlighter-rouge">{`<body>`}</code>
          to override default scrolling behavior and generates a{" "}
          <code className="highlighter-rouge">.modal-backdrop</code>
          to provide a click area for dismissing shown modals when clicking
          outside the modal.
        </p>
        <h3 id="via-data-attributes">Via data attributes</h3>
        <p>
          Activate a modal without writing JavaScript. Set{" "}
          <code className="highlighter-rouge">data-toggle="modal"</code>
          on a controller element, like a button, along with a{" "}
          <code className="highlighter-rouge">data-target="#foo"</code>
          or <code className="highlighter-rouge">href="#foo"</code>
          to target a specific modal to toggle.
        </p>
        <h3 id="via-javascript">Via JavaScript</h3>
        <p>
          Call a modal with id{" "}
          <code className="highlighter-rouge">myModal</code>
          with a single line of JavaScript:
        </p>
        <h3 id="options">Options</h3>
        <p>
          Options can be passed via data attributes or JavaScript. For data
          attributes, append the option name to{" "}
          <code className="highlighter-rouge">data-</code>, as in{" "}
          <code className="highlighter-rouge">data-backdrop=""</code>.
        </p>
        <Table responsive>
          <tr>
            <th style={{ width: "100px" }}>Name</th>
            <th style={{ width: "50px" }}>Type</th>
            <th style={{ width: "50px" }}>Default</th>
            <th>Description</th>
          </tr>
        </Table>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <a href="https://getbootstrap.com/docs/4.3/components/modal/">
            Bootstrap Documentation
          </a>
        </p>
      </>
    );
  }
}

export default ModalDocs;
