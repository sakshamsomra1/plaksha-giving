import React from 'react';
import NavBannerEnd from '../Home/NavAndbannerEnd/navBannerEnd';
import SliderComponent from '../slider/slider';
import logo from '../images/logo-white.png'
import Footer from '../Footer/footer';
import Cards from '../Card/Card';
// import Tab from '../tab/tab';
import '../Demo/demo.css'




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

      <section className="inner_banner_area" >
      
        <div className="container" >
          <div className="row" >
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-3 text-center" >
              <div className="shadow p-3 mb-5 bg-white p-5"style={{height:'500px'}}>
               
                <p>
                <h1 className='ttext' style={{fontFamily:'sans-serif'}}>Areas to Give</h1>
                <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown pri.
                </p>
              </div>
            </div>
          </div>
          <Cards/>
        </div>
       


        <div className="about-us" style={{marginTop:'100px'}}>
        <div className="text">
          {/* <h2 className="ttext">Why</h2> */}
          <h3 className="ttext">Give to Plaksha</h3>
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p style={{marginTop:'50px'}}>
            Plaksha is an institution built with the collective philanthropy of
            60+ donors and has a community that is growing consistently. These
            philanthropic contributions to Plaksha help in sustaining
            cutting-edge research, promoting solutions to address societal
            challenges, and assisting students from disadvantaged backgrounds.
            All gifts, irrespective of the amount, go a long way in supporting
            Plaksha's commitment to nurture the next generation of fearless
            leaders, and to addressing the toughest challenges that our planet
            is facing. All gifts, irrespective of the amount, go a long way in supporting
            Plaksha's commitment to nurture the next generation of fearless
            leaders, and to addressing the toughest challenges that our planet
            is facing. All gifts, irrespective of the amount, go a long way in supporting
            Plaksha's commitment to nurture the next generation of fearless
            leaders, and to addressing the toughest challenges that our planet
            is facing.
          </p>
          <div>
            {/* <a className="a-CTA" href="#">
              About Us
            </a> */}
          </div>
        </div>
        <div className="image-container">
          <div className="image image1">
            {/* <img className='dimg' src="https://static.wixstatic.com/media/266ad0_8d3f05c518614300a75e42543e1a5386~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/266ad0_8d3f05c518614300a75e42543e1a5386~mv2.jpg" alt=" Photo" /> */}
            <img
              className="dimg"
              src="https://giving.plaksha.edu.in/images/faqs.jpg"
              alt="plaksha Photo"
            />
          </div>
          <div className="image image2">
            <img
              className="dimg"
              src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/16479513277.jpg"
              alt="plaksha Photo"
            />
          </div>
        </div>
      </div>
        {/* <SliderComponent/> */}
       
      </section>
    
    
      {/* <section className="content_area_inner">
        <div className="container">
          <div className="row py-3">
        
          </div>
        </div>
      </section> */}
      
    <Footer/>

     
      
    </>
  );
}



export default PlakshaPage;
