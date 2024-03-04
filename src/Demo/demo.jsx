import React, { useEffect } from "react";
import Cards from "../Card/Card";
import "./demo.css";

const Demo = () => {
  useEffect(() => {
    // JavaScript code
    const body = document.querySelector("body");
    const loader = document.querySelector(".loader-wrap");
    const nav = document.querySelector("header nav");
    const navToggle = document.querySelector("header nav .toggle");
    const navSpanMiddle = document.querySelector("header nav .toggle .middle");
    const navNavigationBar = document.querySelector("header nav .navigation-bar");
    const navNavigationBarLi = document.querySelectorAll("header nav .navigation-bar li");
    const headerText = document.querySelector("header .text");
    const headerSection = document.querySelector("header");
    const aboutSection = document.querySelector(".about-us");
    const recipeSection = document.querySelector(".recipes");
    const menuSection = document.querySelector(".menu");
    const fixedImageSection = document.querySelector(".fixed-image");
    const footerSection = document.querySelector("footer");
    const dotOne = document.querySelector(".dots .one");
    const dotTwo = document.querySelector(".dots .two");
    const dotThree = document.querySelector(".dots .three");
    const dots = document.querySelectorAll(".dots > div");
    const logoImage = document.querySelector("header nav .logo img");
    const svgDown = document.querySelector("header .arrow-down");
    const svgUp = document.querySelector(".copyright .arrow-up");
    const menuImgs = document.querySelectorAll(".menu .menu-image-container img");
    const boxModel = document.querySelector(".menu .box-model");
    const menuImageContainer = document.querySelector(".menu-image-container");
    const boxModelArrow = document.querySelector(".menu .box-model .arrow");
    const boxModelImage = document.querySelector(".menu .box-model img");
    const pageTitle = document.querySelector("title");

    // Check if loader exists before operating on it
    if (loader) {
        // remove loader
        function fadeOutEffect() {
            const fadeEffect = setInterval(function() {
                if (!loader.style.opacity) {
                    loader.style.opacity = 1;
                }
                if (loader.style.opacity > 0) {
                    loader.style.opacity -= 0.4;
                } else {
                    body.classList.remove('stop-scroll');
                    loader.classList.add('remove');
                    clearInterval(fadeEffect);
                }
            }, 100);
        }
        window.addEventListener("load", fadeOutEffect);
    } else {
        console.error("Loader element not found in the DOM.");
    }

    // Check if navToggle exists before attaching event listener
    if (navToggle) {
        // toggle hamburger menu button
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("active");
            navSpanMiddle.classList.toggle("hide");
            navNavigationBar.classList.toggle("show");
        });
    }

    // Check if navNavigationBarLi exists before attaching event listener
    if (navNavigationBarLi) {
        // show active navigationbar li
        navNavigationBarLi.forEach(li =>
            li.addEventListener("click", () => {
                const arr = Array.from(li.parentElement.children);
                arr.forEach(li => li.classList.remove("active"));
                li.classList.add("active");
            })
        );
    }

    // Check if svgUp exists before attaching event listener
    if (svgUp) {
        // svg-up smooth scroll
        svgUp.addEventListener("click", () => {
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Check if headerText exists before setting opacity
    if (headerText) {
        window.onscroll = function() {
            // make navbar fixed & change logo color
            if (window.pageYOffset > headerSection.offsetHeight - 75) {
                nav.classList.add("active");

                logoImage.src = "https://plaksha.edu.in/assets/logo-green.png?v=2";
            } else {
                nav.classList.remove("active");
                logoImage.src = "https://plaksha.edu.in/images/logo-new.png";
            }

            // header welcome fade out and in
            if (window.pageYOffset > 0) {
                headerText.style.opacity = -window.pageYOffset / 300 + 1;
            }
            // home page JS
            if (pageTitle.text === "Plaksha University") {
                //change dots background color
                if (window.pageYOffset < headerSection.offsetHeight * 0.5) {
                    dots.forEach(dot => dot.classList.remove("black"));
                    dotTwo.classList.remove("active");
                    dotOne.classList.add("active");
                } else if (
                    window.pageYOffset > headerSection.offsetHeight * 0.5 &&
                    window.pageYOffset < recipeSection.offsetTop * 0.72
                ) {
                    dots.forEach(dot => dot.classList.add("black"));
                } else if (
                    window.pageYOffset > recipeSection.offsetTop * 0.75 &&
                    window.pageYOffset < menuSection.offsetTop * 0.81
                ) {
                    dots.forEach(dot => dot.classList.remove("black"));
                    dotOne.classList.remove("active");
                    dotThree.classList.remove("active");
                    dotTwo.classList.add("active");
                } else if (
                    window.pageYOffset > menuSection.offsetTop * 0.81 &&
                    window.pageYOffset < fixedImageSection.offsetTop * 0.86
                ) {
                    dots.forEach(dot => dot.classList.add("black"));
                    dotThree.classList.remove("active");
                    dotTwo.classList.add("active");
                } else if (
                    window.pageYOffset > fixedImageSection.offsetTop * 0.86 &&
                    window.pageYOffset < footerSection.offsetTop * 0.72
                ) {
                    dots.forEach(dot => dot.classList.remove("black"));
                    dotTwo.classList.remove("active");
                    dotThree.classList.add("active");
                } else if (
                    window.pageYOffset > footerSection.offsetTop * 0.72 &&
                    window.pageYOffset < footerSection.offsetTop * 0.901
                ) {
                    dots.forEach(dot => dot.classList.add("black"));
                } else if (window.pageYOffset > footerSection.offsetTop * 0.901) {
                    dots.forEach(dot => dot.classList.remove("black"));
                }
            }
        };
    }

    // home page JS
    if (pageTitle.text === "Plaksha University") {
        // Check if svgDown exists before attaching event listener
        if (svgDown) {
            // svg-down smooth scroll
            svgDown.addEventListener("click", () => {
                window.scroll({
                    top: aboutSection.offsetTop - 30,
                    behavior: "smooth"
                });
            });
        }

        // Check if dots exist before attaching event listener
        if (dots) {
            // dots smooth scroll
            dots.forEach(dot =>
                dot.addEventListener("click", function() {
                    window.scrollTo({
                        top: document.querySelector(this.dataset.x).offsetTop - 100,
                        behavior: "smooth"
                    });
                })
            );
        }

        // Check if menuImgs exist before attaching event listener
        if (menuImgs) {
            // show box model
            menuImgs.forEach(img =>
                img.addEventListener("click", function() {
                    const arr = Array.from(this.parentElement.parentElement.children);

                    arr.forEach(div => div.classList.remove("active"));

                    this.parentElement.classList.add("active");
                    boxModel.classList.add("active");
                    boxModelImage.src = this.src;
                    boxModelImage.classList.add("active");
                    body.classList.add("hide-scroll");
                })
            );
        }

        // Check if boxModelArrow exists before attaching event listener
        if (boxModelArrow) {
            // box model functions
            function boxModelFun(e) {
                // close box model
                if (
                    e.code === "Escape" ||
                    (e.target.tagName === "DIV" && !e.target.classList.contains("arrow")) ||
                    e.target.classList.contains("close")
                ) {
                    boxModel.classList.remove("active");
                    body.classList.remove("hide-scroll");
                }

                if (boxModel.classList.contains("active")) {
                    if (
                        e.code === "ArrowRight" ||
                        e.code === "ArrowLeft" ||
                        e.target.classList.contains("arrow-right") ||
                        e.target.classList.contains("arrow-left")
                    ) {
                        const arr = Array.from(menuImageContainer.children);
                        const active = arr.find(div => div.classList.contains("active"));

                        // change box model image
                        if (
                            e.target.classList.contains("arrow-right") ||
                            e.code === "ArrowRight"
                        ) {
                            if (active.nextElementSibling === null) {
                                active.parentElement.firstElementChild.classList.add("active");
                                boxModelImage.src =
                                    active.parentElement.firstElementChild.firstElementChild.src;
                            } else {
                                active.nextElementSibling.classList.add("active");
                                boxModelImage.src = active.nextElementSibling.firstElementChild.src;
                            }
                        }

                        // change box model image
                        else if (
                            e.target.classList.contains("arrow-left") ||
                            e.code === "ArrowLeft"
                        ) {
                            if (active.previousElementSibling === null) {
                                active.parentElement.lastElementChild.classList.add("active");
                                boxModelImage.src =
                                    active.parentElement.lastElementChild.lastElementChild.src;
                            } else {
                                active.previousElementSibling.classList.add("active");
                                boxModelImage.src =
                                    active.previousElementSibling.firstElementChild.src;
                            }
                        }
                        active.classList.remove("active");
                    }
                }
            }

            window.addEventListener("keydown", boxModelFun);
            window.addEventListener("click", boxModelFun);
            boxModelArrow.addEventListener("click", boxModelFun);
        }
    }
}, []); // useEffect dependency array

  return (
    <div>
      {/* Start loader */}

      {/* End loader */}

      {/* Start Dots */}
      <div className="dots">
        <div className="active one" data-x="header"></div>
        <div className="two" data-x=".recipes"></div>
        <div className="three" data-x=".fixed-image"></div>
      </div>
      {/* End Dots */}

      {/* Start Header */}
      <header>
        <nav>
          <div className="logo">
            <a href="index.html">
              <img
                id="img"
                src="https://plaksha.edu.in/images/logo-new.png"
                alt="plk Logo"
              />
            </a>
          </div>
          <div className="toggle">
            <span className="first"></span>
            <span className="middle"></span>
            <span className="last"></span>
          </div>
          <div className="navigation-bar ">
            <ul  style={{fontWeight:'bold'}} >
              <li className="active">
                <a href="https://plaksha.edu.in/">
                  Home<span className="underline"></span>
                </a>
              </li>
              <li>
                <a href="/areas-to-give.html">
                  Areas to Give<span className="underline"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  How to Give<span className="underline"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  Our Donors<span className="underline"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  FAQS<span className="underline"></span>
                </a>
              </li>
              {/* <li><a href="#"><span className="underline"></span></a></li> */}
              <li>
                <a href="#">
                  Contact<span className="underline"></span>
                </a>
              </li>
              <li>
              <a className="ml-3 btn btn-white_new text-white" target="_blank" href="#" style={{fontWeight:'bold'}}>Make a Gift &nbsp;<i className="fas fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="text" >
          <h2 style={{ color: "white", marginBottom: "20px" }}>Giving at</h2>
          <h1 style={{ color: "white" }}>Plaksha University</h1>
          <div className="arrow">
            <span className="left"></span>
            <i className="fas fa-asterisk"  style={{color:"white"}}></i>
            <span className="right"></span>
          </div>
          {/* <span>Ready To Be Opened</span> */}
          <a href="https://plaksha.edu.in/" className="button">
            <button>Explore</button>
          </a>
        </div>
        <svg
          className="svg-down"
          width="192"
          height="61"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 160.7 61.5"
          enable-background="new 0 0 160.7 61.5"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
          ></path>
        </svg>
        <div className="arrow-down"></div>
      </header>
      {/* End Header */}

      {/* Start About Us */}
      <div className="about-us">
        <div className="text">
          <h2 className="ttext">Why</h2>
          <h3 className="ttext">Give to Plaksha</h3>
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p>
            Plaksha is an institution built with the collective philanthropy of
            60+ donors and has a community that is growing consistently. These
            philanthropic contributions to Plaksha help in sustaining
            cutting-edge research, promoting solutions to address societal
            challenges, and assisting students from disadvantaged backgrounds.
            All gifts, irrespective of the amount, go a long way in supporting
            Plaksha’s commitment to nurture the next generation of fearless
            leaders, and to addressing the toughest challenges that our planet
            is facing.
          </p>
          <div>
            <a className="a-CTA" href="#">
              About Us
            </a>
          </div>
        </div>
        <div className="image-container">
          <div className="image image1">
            {/* <img className='dimg' src="https://static.wixstatic.com/media/266ad0_8d3f05c518614300a75e42543e1a5386~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/266ad0_8d3f05c518614300a75e42543e1a5386~mv2.jpg" alt=" Photo" /> */}
            <img
              className="dimg"
              src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1699600347DSC06261_11zon.jpg"
              alt="plaksha Photo"
            />
          </div>
          <div className="image image2">
            <img
              className="dimg"
              src="https://media.licdn.com/dms/image/D5622AQE3l9MXQw1j3A/feedshare-shrink_800/0/1706877366214?e=2147483647&v=beta&t=Z6pwTzWT3I0oeV8x4MOo8C9PHcMulmFflTSV2uIpxWA"
              alt="plaksha Photo"
            />
          </div>
        </div>
      </div>
      {/* End About Us */}

      {/* Start Recipes */}
      <div className="recipes">
        <div className="image"></div>
        <div className="text">
          <h2 style={{ fontSize: "60px" }}>Celebrating</h2>
          <h3 style={{ fontSize: "40px" }}>Diversity</h3>
        </div>
      </div>
      {/* End Recipes */}

      {/* Start Menu */}
      <div className="menu">
        <div className="box-model">
          <i className="fas fa-times fa-2x close"></i>
          <div className="arrow">
            <div className="arrow arrow-right"></div>
            <div className="arrow arrow-left"></div>
          </div>
          <div className="box-image-container">
            <div className="box-image">
              <img src="" alt=" Photo" />
            </div>
          </div>
        </div>
        <div className="menu-image-container">
          <div className="image active">
          <img
              className="plak"
              src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1663401598Untitled%20design%20%282%29.png"
              alt=" Photo"
            />
            
          </div>
          <div className="image">
            <img
              className="plak"
              src="https://images.indianexpress.com/2023/04/plaksha.jpg"
              alt="Photo"
            />
          </div>
          <div className="image">
          <img
              className="plak"
              src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1702989387Untitled%20design%20%287%29.png"
              alt=" Photo"
            />
           
          </div>
          <div className="image">
          <img
              className="plak"
              src="https://www.collegebatch.com/static/clg-gallery/plaksha-university-mohali-178436.jpg"
              alt=" Photo"
            />
          
          </div>
        </div>
        <div className="text">
          <h2 className="ttext">Discover</h2>
          {/* <h3 className='ttext'>Menu</h3> */}
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p>
            Plaksha’s core vision is to nurture the next generation of fearless
            leaders who can address the toughest problems in these unpredictable
            times. It is done by providing an enabling entrepreneurial and
            innovative ecosystem. “India will have limitless opportunities for
            the next few years. Opportunities that can only be realized by
            leveraging technology and entrepreneurship. I envision Plaksha as a
            learning center where we create a generation of hands-on builders
            who would be able to solve the grand challenges facing India and the
            developing world. The University has a unique interdisciplinary
            approach and problem-solving orientation and has the potential to
            redefine technology education globally.”
          </p>
          <div className="a-CTA">~ Alok Mittal, Founder & Trustee, Plaksha</div>
        </div>
      </div>
      {/* End Menu */}

      {/* Start fixed-image */}
      <div className="fixed-image">
        <div className="text">
          <h2 style={{ fontSize: "60px" }}>Dreaming </h2>
          <h3 style={{ fontSize: "40px" }}>In Plaksha</h3>
        </div>
      </div>
      {/* End fixed-image */}

      <br />
      {/* <Cards/> */}

      {/* Start Reservation */}
      <div className="reservation">
        <div className="text">
          <h2 className="ttext">Empowering</h2>
          <h3 className="ttext">Next Generation</h3>
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p>
            Plaksha’s vision of reimagining technology education worldwide took
            off in 2019 with the launch of the Tech Leaders Program (TLP). It
            has transformed the landscape of master’s programs in tech. We
            decided to create a very radical program that combined depth in
            technology with real world experience and leadership. “I strongly
            believe that the leaders of tomorrow will be very different from the
            leaders of yesterday, and even today. The skill set for tomorrow’s
            leader will look very different from the traditional strengths we
            are familiar with and Plaksha is doing exactly what is needed to
            cultivate the students into becoming leaders that stay relevant
            despite the changing times.”
          
            <br />
            <br />



          </p>
          <div className="a-CTA">~Rahul Pariyani, TLP Class of 2021</div>
          <br />
            <br />
            <br />
        </div>
        <div className="image-container">
          <div className="image image1">
            <img style={{width:"700px",height:"420px",marginLeft:"100px"}}
              className="plak"
              src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1698996644banner%202-min1698996644.jpg"
              alt="Photo"
            />
            {/* <img src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/16479515176.jpg" alt="Photo" /> */}
          </div>
          {/* <div className="image image2">
            <img src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1676458992financial-aid1676458992.png" alt=" Photo" />
          </div> */}
        </div>
      </div>
      {/* End Reservation */}

      {/* Start Footer */}
      <footer>
        <div className="text">
          <h2>ABOUT </h2>
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p>
          Plaksha is an institution built with the collective philanthropy of 60+ donors and has a community that is growing consistently. All gifts, irrespective of the amount, go a long way in supporting Plaksha's commitment to nurture the next generation of fearless leaders, and to addressing the toughest challenges that our planet is facing.
          </p>
        </div>
        <div className="contact-container">
          <div className="social-media">
            <h3>Follow Along</h3>
            <div className="links">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="newsletter">
            {/* <h3>NewsLetter</h3> */}
            <form method="post">
              <input type="email" name="email" placeholder="Type Your Email" />
              <i className="fas fa-envelope"></i>
            </form>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      {/* Start Copy-Right */}
      <div className="copyright">
        <svg
          className="svg-up"
          width="192"
          height="61"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 160.7 61.5"
          enable-background="new 0 0 160.7 61.5"
          xmlSpace="preserve"
        >
          <path
            fill="#262526"
            d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
          ></path>
        </svg>
        <i className="fas fa-angle-double-up arrow-up"></i>
        <ul className="info">
          <li>&copy; </li>
          <li>Alpha, Sector 101, IT City Rd, Sahibzada Ajit Singh Nagar, Punjab 140306</li>
         
         
        </ul>
        <ul className="CTA">
          <li>
            <a href="#">Plaksha University is established under the Punjab government's 'Punjab Private Universities Policy 2010'.</a>
          </li>
          <li>
            <a href="#">CONTACT </a>
          </li>
        </ul>
      </div>
      {/* End Copy-Right */}
    </div>
  );
};

export default Demo;
