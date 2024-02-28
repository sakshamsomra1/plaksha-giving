import React from 'react';
import logo from '../../images/logo-white.png'
import vedio from '../../video/1610621344founder1610621344.mp4'
import audio from "../../video/1610621344founder1610621344.ogg"
import './navandbanner.css'
import photo from '../../video/teal.jpg'
import { useEffect } from 'react';
import { useRef } from 'react';


import OwlCarousel from 'react-owl-carousel'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const MainNavBanner = () => {


  const owlOptions = {
    loop: false,

    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };





  // const videoRef = useRef();

  // useEffect(() => {
  //   const video = videoRef.current;

  //   const handlePlay = () => {
  //     video.controls = false;
  //   };

  //   // Add event listener for the 'play' event
  //   video.addEventListener('play', handlePlay);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     video.removeEventListener('play', handlePlay);
  //   };
  // }, []);




  return (

    <section className="main_nav_banner">






 

    






      <div className="container-fluid px-xl-5 px-lg-5 px-md-3 px-sm-0 px-0">
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="" width="260" height="80" />

          </a>
          <button
            className="navbar-toggler order-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                <a className="nav-link text-white" target="_blank" rel="noopener noreferrer" href="https://plaksha.org/">Home</a>

              </li>
            </ul>
          </div>
          <a className=" ml-3 btn btn-white_new text-white" href="#" role="button">Make a Gift &nbsp;<i className="fas fa-chevron-right"></i></a>

        </nav>
      </div>

      <div className="container pt-4">

        <div className="row">
          {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <video width="100%" height="350" controls>
              <source src={vedio} />
              <source src={audio} type="video/ogg" />
            </video>
          </div> */}







          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">

            {/* <p className="light-blue text-left">
              Sustaining cutting-edge research, promoting solutions to societal challenges,
              assisting students — are some of the reasons to give to Plaksha. All gifts,
              big or small, go a long way in supporting Plaksha's commitment to nurture next
              generation of fearless leaders to solve the toughest challenges facing our planet.
            </p>
            <a href="#" className="btn btn-light-blue py-3 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-3 text-uppercase">
              Discover why giving matters &nbsp; <i className="fas fa-chevron-right"></i>
            </a> */}
          </div>

          <div className='owledit'>


         


          <OwlCarousel className="owl-theme" {...owlOptions}>


          
          <img  className='plaksha' src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1663401598Untitled%20design%20%282%29.png" alt="" />
             
              <img className='plaksha' src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1663401586Untitled%20design%20%281%29.png" alt="" />
        
              <img className='plaksha' src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1702989403Untitled%20design%20%288%29.png"alt="" />

          
              <img className='plaksha' src="" alt="" />
  

            
              <img className='plaksha' src={photo} alt="" />
   

            
              <img className='plaksha'  src={photo} alt="" />
            

            
              <img className='plaksha' src={photo} alt="" />
        





            
            {/* Your carousel items */}

          </OwlCarousel>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MainNavBanner;
