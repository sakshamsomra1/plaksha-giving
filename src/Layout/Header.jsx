import React, { useState } from 'react'
import "../Public/CSS/header.css"
import { NavLink } from 'react-router-dom'
import { Button } from 'bootstrap'
import { Col, Container, Row } from 'react-bootstrap'

function Header() {
  // Defining the by default variable 
  const [currentImage,setCurrentImage] =useState("https://giving.plaksha.edu.in/images/areas2.jpg");
  const [currentHeading,setCurrentHeading] = useState("Areas to give");


  const handleNavClickLink = (Image,heading) =>
  {
    setCurrentImage = (Image);
    setCurrentHeading = (heading);
  };
  return (
    <>
        <div className='giving-header'>
            <div className='top-part'>
                <div className='logo'>
                    <img src='https://giving.plaksha.edu.in/images/logo-white.png?v=1'  />
                </div>
                <div className='navigation'>
                        <nav>
                          <NavLink to="/" >Home</NavLink>
                          <NavLink to="/how-to-give" heading="How to give" >How to give</NavLink>
                          <NavLink to="/areas-to-give" >Areas to give</NavLink>
                          <NavLink to="/areas-to-give" >Our donors</NavLink>
                          <NavLink to="/areas-to-give" >Faqs</NavLink>
                          <NavLink to="/areas-to-give" >Contact</NavLink>
                          <a href="https://plaksha.edu.in/" >plaksha home</a>
                          <a className='home-nav-btn'>Make a Gift</a>
                        </nav>
                </div>
            </div>
            <div className='bottom-port'>
                <Container className='pt-4'>
                    <Row>
                      <Col>
                            <img src="https://giving.plaksha.edu.in/images/areas2.jpg" alt="" width="100%" height="100%"  />
                      </Col>
                      <Col className='d-flex align-self-center flex-column'>
                          <h1 className='header-heading'>Areas to Give</h1>
                          <p className='header-desc'>Explore the different areas you can support to reimagine technology education and research</p>
                      </Col>
                    </Row>
                </Container>
            </div>  
        </div>
    </>
  )
}

export default Header