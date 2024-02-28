import React from 'react';
import Cards from '../../Card/Card';
// import Demo from '../../demo/demo';
import SliderComponent from '../../slider/slider';

import OwlCarousel from 'react-owl-carousel'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const NavBannerEnd = () => {



    const owlOptions = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      };


    




    return (

    
        <>
        
        <section className="hgmd_section my-xl-5 my-lg-5 my-md-5 my-sm-2 my-2 py-xl-5 py-lg-5 py-md-5 py-sm-3 py-3">
            <div className="container">
                {/* <div className="row mb-xl-5 mb-lg-5 mb-md-5 mb-sm-2 mb-2 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-2 pb-2">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h2 className="font-weight-600 text-center">                        
                            How Gifts Make a Difference
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <h6 className="highlight_subtext text-center text-white mb-4">Enables Cutting-edge Research</h6>
                        <p className="px-4 mt-4 pt-2">Plaksha’s aim is to create a research and innovation ecosystem that will address the 
                            toughest challenges of our times. Giving to Plaksha enables initiating and sustaining 
                            our research efforts in areas including future of mobility, smart agriculture, affordable 
                            health systems, sustainable urban systems and water-food-energy nexus.</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <h6 className="highlight_subtext text-center text-white mb-4">Improves quality of Academics</h6>
                        <p className="px-4 mt-4 pt-2">Plaksha intends to provide top class interdisciplinary education in an 
                            experiential manner while developing an entrepreneurial mindset among students. Giving to Plaksha 
                            enables onboarding dynamic faculty, setting up academic programs & infrastructure at Plaksha.</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <h6 className="highlight_subtext text-center text-white mb-4">Enriches life of students</h6>
                        <p className="px-4 mt-4 pt-2">Plaksha is committed to ensure that no student is denied 
                            access to education as a result of financial constraints. Giving to Plaksha enables 
                            setting up scholarships & financial aid to enable exceptionally talented and driven 
                            students who may otherwise not have the means or opportunity to study at Plaksha</p>
                    </div>
                </div> */}

                <Cards/>
               


            </div>
        </section>
        <div className="row mb-xl-5 mb-lg-5 mb-md-5 mb-sm-3 mb-3">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <h2 className="font-weight-600 text-center">Stories of Giving</h2>
          </div>
        </div>
        <SliderComponent/>

        </>
    );
}

export default NavBannerEnd ;
