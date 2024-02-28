import React from 'react';

const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container-fluid">
                <div className="row mt-5 mx-1">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                        <ul className="footer_nav">
                            <li>
                                <a href="areas-to-give.html">Areas to Give</a>
                            </li>
                            <li>
                                <a href="how-to-give.html">How to Give</a>
                            </li>
                            <li>
                                <a href="our-donors.html">Our Donors</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="border-light p-xl-4 p-lg-4 p-md-4 p-sm-3 p-3">
                            <h4 className="text-white font-weight-bold">Connect with Us</h4>
                            <p className="pt-3">
                                <a href="mailto:development@plaksha.org">development@plaksha.org</a>
                            </p>
                            <p className="pt-4">
                                Alpha, Sector 101, IT City Rd, Sahibzada Ajit Singh Nagar, Punjab 140306
                            </p>
                            <ul className="social_media mt-5">
                                <li>
                                    <a href="https://twitter.com/PlakshaUniv" target="_bank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/plakshauniversity/" target="_bank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/plaksha_mohali/" target="_bank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mx-1 mt-5 footer_text_copy">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <p className="mb-5 pb-3">Plaksha is a registered trademark of Reimagining Higher Education Foundation (RHEF).
                            RHEF has received a letter of intent from the Punjab Government to set up Plaksha University.
                            The undergraduate program will start after legislation of the university.</p>
                        <p>&copy; Copyright reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
