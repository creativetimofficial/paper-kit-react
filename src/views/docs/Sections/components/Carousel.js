import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class Carousel extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Carousel
        </h1>
        <p className="bd-lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
        <h2 id="example">Example</h2>
        <p>
          Carousels don’t automatically normalize slide dimensions. As such, you
          may need to use additional utilities or custom styles to appropriately
          size content. While carousels support previous/next controls and
          indicators, they’re not explicitly required. Add and customize as you
          see fit.
        </p>
        <p>
          Be sure to set a unique id on the{" "}
          <code className="highlighter-rouge">.carousel</code>
          for optional controls, especially if you’re using multiple carousels
          on a single page.
        </p>
        <h3 id="with-indicators">With indicators</h3>
        <p>
          You can also add the indicators to the carousel, alongside the
          controls, too.
        </p>
        <div className="bd-example" data-example-id="">
          <div
            className="carousel slide"
            data-ride="carousel"
            id="carouselExampleIndicators"
          >
            <ol className="carousel-indicators">
              <li
                className="active"
                data-slide-to="0"
                data-target="#carouselExampleIndicators"
              />
              <li data-slide-to="1" data-target="#carouselExampleIndicators" />
              <li data-slide-to="2" data-target="#carouselExampleIndicators" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  alt="..."
                  className="d-block w-100"
                  data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  alt="..."
                  className="d-block w-100"
                  data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  alt="..."
                  className="d-block w-100"
                  data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={e => e.preventDefault()}
              role="button"
            >
              <span aria-hidden={true} className="carousel-control-prev-icon" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={e => e.preventDefault()}
              role="button"
            >
              <span aria-hidden={true} className="carousel-control-next-icon" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <strong>
            <a
              href="https://getbootstrap.com/docs/4.3/components/carousel/"
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

export default Carousel;
