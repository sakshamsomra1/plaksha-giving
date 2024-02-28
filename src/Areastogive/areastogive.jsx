import React from 'react';
import NavBannerEnd from '../Home/NavAndbannerEnd/navBannerEnd';
import SliderComponent from '../slider/slider';
import logo from '../images/logo-white.png'



function PlakshaPage() {
  return (
    <>
      {/* NAV AND BANNER AREA START */}
      <section className="main_nav_banner">
        <div className="container-fluid px-xl-5 px-lg-5 px-md-3 px-sm-0 px-0">
          <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="" />
            </a>
            <button className="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto text-uppercase">
                <li className="nav-item px-1">
                  <a className="nav-link text-white" href="areas-to-give.html">Areas to Give</a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link text-white" href="how-to-give.html">How to Give</a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link text-white" href="our-donors.html">Our Donors</a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link text-white" href="faqs.html">About</a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link text-white" href="contact.html">Contact</a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link text-white" target="_blank" href="https://plaksha.org/">Home</a>
                </li>
              </ul>
            </div>
            <a className="ml-3 btn btn-white_new text-white" target="_blank" href="#">Make a Gift &nbsp;<i className="fas fa-chevron-right"></i></a>
          </nav>
        </div>
      </section>
      {/* NAV AND BANNER AREA END */}

      <section className="inner_banner_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-3 text-center">
              <div className="shadow p-3 mb-5 bg-white p-5">
                <h2 className="text-uppercase font-weight-600">Areas to Give</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SliderComponent/>
      </section>

      {/* <section className="content_area_inner">
        <div className="container">
          <div className="row py-3">
        
          </div>
        </div>
      </section> */}
    

     
      
    </>
  );
}



export default PlakshaPage;
