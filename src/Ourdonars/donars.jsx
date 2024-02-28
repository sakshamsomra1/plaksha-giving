import Nav from '../Nav/nav'
import SliderComponent from '../slider/slider.jsx';

const Donars = () => {
    return ( 
        <div>
        <Nav/>
        <section className="inner_banner_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-3 text-center">
              <div className="shadow p-3 mb-5 bg-white p-5">
                <h2 className="text-uppercase font-weight-600">Our Donors</h2>
                <p>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      
      </section>
            <SliderComponent/>
        </div>
     );
}
 
export default Donars;