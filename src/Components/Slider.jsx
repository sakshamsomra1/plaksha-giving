import React from 'react'
import { Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../Public/CSS/Slider.css';
import { Link } from 'react-router-dom';



function Slider() {

    const frontSideStyle= {
        backgroundColor:'#0d4153',
        backgroundImage: 'url(https://giving.plaksha.edu.in/images/image3.png)',
    }
    
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <>
            <h2 className='heading-slider'>How Gifts Make a Difference</h2>
            <Row>
                <OwlCarousel className='owl-theme ' {...options} >
            
                    <div class='item'>
                        <div className='container'>
                            <Link  className='card'>
                            <div className='slide-item'>
                                        <div className='front-side' style={frontSideStyle}>
                                                <p>Giving wings to Rashmi's Silicon Valley dreams</p>
                                        </div>
                                        <div className='back-side'>
                                            <div>
                                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolorem quaerat perspiciatis atque corporis quam, nihil necessitatibus provident magnam consequatur nam, praesentium iste harum vitae, ratione dolorum repellat in id?</strong></p>
                                            </div>
                                        </div>
                            </div>
                            </Link>
                        
                            <Link  className='card'>
                            <div className='slide-item'>
                                        <div className='front-side' style={frontSideStyle}>
                                                <p>Giving wings to Rashmi's Silicon Valley dreams</p>
                                        </div>
                                        <div className='back-side'>
                                            <div>
                                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolorem quaerat perspiciatis atque corporis quam, nihil necessitatibus provident magnam consequatur nam, praesentium iste harum vitae, ratione dolorum repellat in id?</strong></p>
                                            </div>
                                        </div>
                            </div>
                            </Link>

                        </div>
                    </div>
                    <div class='item'>
                        <div className='container'>
                            <Link  className='card'>
                            <div className='slide-item'>
                                        <div className='front-side' style={frontSideStyle}>
                                                <p>Giving wings to Rashmi's Silicon Valley dreams</p>
                                        </div>
                                        <div className='back-side'>
                                            <div>
                                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolorem quaerat perspiciatis atque corporis quam, nihil necessitatibus provident magnam consequatur nam, praesentium iste harum vitae, ratione dolorum repellat in id?</strong></p>
                                            </div>
                                        </div>
                            </div>
                            </Link>
                        
                            <Link  className='card'>
                            <div className='slide-item'>
                                        <div className='front-side' style={frontSideStyle}>
                                                <p>Giving wings to Rashmi's Silicon Valley dreams</p>
                                        </div>
                                        <div className='back-side'>
                                            <div>
                                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolorem quaerat perspiciatis atque corporis quam, nihil necessitatibus provident magnam consequatur nam, praesentium iste harum vitae, ratione dolorum repellat in id?</strong></p>
                                            </div>
                                        </div>
                            </div>
                            </Link>

                        </div>
                    </div>
             
                    <div class='item'>
                        <div className='container'>
                            <Link  className='card'>
                            <div className='slide-item'>
                                        <div className='front-side' style={frontSideStyle}>
                                                <p>Giving wings to Rashmi's Silicon Valley dreams</p>
                                        </div>
                                        <div className='back-side'>
                                            <div>
                                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolorem quaerat perspiciatis atque corporis quam, nihil necessitatibus provident magnam consequatur nam, praesentium iste harum vitae, ratione dolorum repellat in id?</strong></p>
                                            </div>
                                        </div>
                            </div>
                            </Link>
                        
                            <Link  className='card'>
                            <div className='slide-item'>
                                        <div className='front-side' style={frontSideStyle}>
                                                <p>Giving wings to Rashmi's Silicon Valley dreams</p>
                                        </div>
                                        <div className='back-side'>
                                            <div>
                                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolorem quaerat perspiciatis atque corporis quam, nihil necessitatibus provident magnam consequatur nam, praesentium iste harum vitae, ratione dolorum repellat in id?</strong></p>
                                            </div>
                                        </div>
                            </div>
                            </Link>

                        </div>
                    </div>
             
                  
             
                  
               
                  
                </OwlCarousel>
            </Row>

        </>
    )
}

export default Slider