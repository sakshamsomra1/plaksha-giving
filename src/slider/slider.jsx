import React from "react";
import img1 from "../images/img_1.jpg"
import img2 from "../images/img_2.jpg"
import img3 from "../images/img_3.jpg"

const SliderComponent = () => {
  return (
    <section className="tlfclass_section my-xl-5 my-lg-5 my-md-5 my-sm-3 my-2">
      <div className="container py-xl-5 py-lg-5 py-md-5 py-sm-3 py-3">
      
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div id="demo" className="carousel slide" data-ride="carousel">
              {/* The slideshow */}
              <div className="container carousel-inner no-padding">
                <div className="carousel-item active">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-inline-block p-0">
                    <div className="content">
                      <a className="card m-2" href="#!">
                        <div
                          className="front w-100"
                          style={{ backgroundImage: `url(${img1})` }}
                        >
                          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div className="back">
                          <div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-inline-block p-0">
                    <div className="content">
                      <a className="card m-2" href="#!">
                        <div
                          className="front w-100"
                          style={{ backgroundImage: `url(${img2})` }}
                        >
                          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div className="back">
                          <div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-inline-block p-0">
                    <div className="content">
                      <a className="card m-2" href="#!">
                        <div
                          className="front w-100"
                          style={{ backgroundImage: `url(${img3})` }}
                        >
                          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div className="back">
                          <div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-inline-block p-0">
                    <div className="content">
                      <a className="card m-2" href="#!">
                        <div
                          className="front w-100"
                          style={{ backgroundImage: `url(${img3})` }}
                        >
                          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div className="back">
                          <div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-inline-block p-0">
                    <div className="content">
                      <a className="card m-2" href="#!">
                        <div
                          className="front w-100"
                          style={{ backgroundImage: `url(${img2})` }}
                        >
                          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div className="back">
                          <div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-inline-block p-0">
                    <div className="content">
                      <a className="card m-2" href="#!">
                        <div
                          className="front w-100"
                          style={{ backgroundImage: `url(${img1})` }}
                        >
                          <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div className="back">
                          <div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Add other carousel items */}
                </div>
                {/* Add other carousel items */}
              </div>
              {/* Left and right controls */}
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon d-none"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon d-none"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">{/* Add content for below the carousel */}</div>
      </div>
    </section>
  );
};

export default SliderComponent;
