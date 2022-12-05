/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Modal,
    Card,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

// core components

function SectionMiniProject({ title, description, source, live, techs, items }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <Row className="row">
                <Col className="ml-auto mr-auto" lg="6" md="12">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                    {techs.map((tech) => {
                        return (<label className="label label-default mr-2">{tech}</label>);
                    })}
                    <br /><br />
                    <Button
                        className="btn-round"
                        color="success"
                        href={source}
                        target="_blank"
                    >
                        SOURCE CODE
                    </Button>

                    {live ?
                        <Button
                            className="btn-round ml-2"
                            color="success"
                            href={live}
                            outline
                            target="_blank"
                        >
                            DEMO
                        </Button>
                        :
                        <Button
                            className="btn-round ml-2"
                            color="success"
                            type="button"
                            outline
                            onClick={toggleModal}
                        >
                            DEMO
                        </Button>
                    }

                    <Modal isOpen={modal} toggle={toggleModal}>
                        <div className="modal-header">
                            <button
                                aria-label="Close"
                                className="close"
                                type="button"
                                onClick={toggleModal}
                            >
                                <span aria-hidden={true}>×</span>
                            </button>
                            <h5
                                className="modal-title text-center"
                                id="exampleModalLabel"
                            >
                                {title}
                            </h5>
                        </div>
                        <div className="modal-body">
                            This application is not yet deployed, it only runs in localhost.
                        </div>
                        <div className="modal-footer">
                            <div className="left-side">
                                <Button
                                    className="btn-link"
                                    color="default"
                                    type="button"
                                    onClick={toggleModal}
                                >
                                    Okay
                                </Button>
                            </div>
                        </div>
                    </Modal>
                </Col>
                <Col className="ml-auto mr-auto" lg='6' md="12">
                    <Card className="page-carousel">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators
                                items={items}
                                activeIndex={activeIndex}
                                onClickHandler={goToIndex}
                            />
                            {items.map((item) => {
                                return (
                                    <CarouselItem
                                        onExiting={onExiting}
                                        onExited={onExited}
                                        key={item.src}
                                    >
                                        <img src={item.src} alt={item.altText} />
                                        <CarouselCaption
                                            captionText={item.caption}
                                            captionHeader=""
                                        />
                                    </CarouselItem>
                                );
                            })}
                            <a
                                className="left carousel-control carousel-control-prev"
                                data-slide="prev"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    previous();
                                }}
                                role="button"
                            >
                                <span className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="right carousel-control carousel-control-next"
                                data-slide="next"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    next();
                                }}
                                role="button"
                            >
                                <span className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                            </a>
                        </Carousel>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default SectionMiniProject;
