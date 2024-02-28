import React from 'react';
import Nav from '../Nav/nav'


const ContactPage =()=> {

    return (
      <div>
        <Nav/>
       

        <section className="inner_banner_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-3 text-center">
                <div className="shadow p-3 mb-5 bg-white p-5">
                  <h2 className="text-uppercase font-weight-600">Contact</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content_area_inner contact">
          <div className="container">
            <div className="row mb-5">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
                <div className="card py-3 px-4 shadow-sm">
                  <h3 className="font-weight-bold pb-4 h3">
                    Address
                  </h3>
                  <p>Alpha, Sector 101, IT City Rd, Sahibzada Ajit Singh Nagar, Punjab 140306</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
                <div className="card py-3 px-4 shadow-sm">
                  <h3 className="font-weight-bold pb-4 h3">
                    Phone
                  </h3>
                  <p><a href="tel:+911726670999" className="text-dark pb-2 font-weight-bold"><i className="fas fa-phone-alt"></i> +91 172 6670999 </a></p>
                  <p>We are available Monday through Friday, 8 a.m. to 5 p.m. Pacific Time.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
                <div className="card py-3 px-4 shadow-sm">
                  <h3 className="font-weight-bold pb-4 h3">
                    Connect With Us
                  </h3>
                  <form className="text-left">
                    <div className="form-group">
                      <select className="form-control">
                        <option value="option 1">Options to Select</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                        <option value="option 4">Option 4</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-xl-8 col-lg-8 col-md-12 col-12 col-sm-12">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-right">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                  <p>Checks should be made out to Stanford University. Please include a note telling us how youd like your gift to be used.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.097100978794!2d76.72416471424742!3d30.631220897570696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe97919cad48b%3A0xf8f99185e7d5540!2sPlaksha!5e0!3m2!1sen!2sin!4v1625081270529!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </section>

       
        
      </div>
    );
  }


export default ContactPage;
