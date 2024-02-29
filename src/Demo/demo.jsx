import React, { useEffect } from 'react';
import './demo.css';

const Demo = () => {
  useEffect(() => {
    // JavaScript code
    const body = document.querySelector("body"),
      loader = document.querySelector(".loader-wrap"),
      links = document.querySelectorAll('a[href="#"]'),
      nav = document.querySelector("header nav"),
      navToggle = document.querySelector("header nav .toggle"),
      navSpanMiddle = document.querySelector("header nav .toggle .middle"),
      navNavigationBar = document.querySelector("header nav .navigation-bar"),
      navNavigationBarLi = document.querySelectorAll(
          "header nav .navigation-bar li"
      ),
      headerText = document.querySelector("header .text"),
      headerSection = document.querySelector("header"),
      aboutSection = document.querySelector(".about-us"),
      recipeSection = document.querySelector(".recipes"),
      menuSection = document.querySelector(".menu"),
      fixedImageSection = document.querySelector(".fixed-image"),
      footerSection = document.querySelector("footer"),
      dotOne = document.querySelector(".dots .one"),
      dotTwo = document.querySelector(".dots .two"),
      dotThree = document.querySelector(".dots .three"),
      dots = document.querySelectorAll(".dots > div"),
      logoImage = document.querySelector("header nav .logo img"),
      svgDown = document.querySelector("header .arrow-down"),
      svgUp = document.querySelector(".copyright .arrow-up"),
      menuImgs = document.querySelectorAll(".menu .menu-image-container img"),
      boxModel = document.querySelector(".menu .box-model"),
      menuImageContainer = document.querySelector(".menu-image-container"),
      boxModelArrow = document.querySelector(".menu .box-model .arrow"),
      boxModelImage = document.querySelector(".menu .box-model img"),
      pageTitle = document.querySelector("title");

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

    // prevent links click hash
    links.forEach(link =>
        link.addEventListener("click", function(e) {
            e.preventDefault();
        })
    );

    // toggle hamburger menu button
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navSpanMiddle.classList.toggle("hide");
        navNavigationBar.classList.toggle("show");
    });

    // show active navigationbar li
    navNavigationBarLi.forEach(li =>
        li.addEventListener("click", () => {
            const arr = Array.from(li.parentElement.children);
            arr.forEach(li => li.classList.remove("active"));
            li.classList.add("active");
        })
    );

    // svg-up smooth scroll
    svgUp.addEventListener("click", () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    });

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
        if (pageTitle.text === "ROSA- Restaurant") {
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

    // home page JS
    if (pageTitle.text === "ROSA- Restaurant") {
        // svg-down smooth scroll
        svgDown.addEventListener("click", () => {
            window.scroll({
                top: aboutSection.offsetTop - 30,
                behavior: "smooth"
            });
        });

        // dots smooth scroll
        dots.forEach(dot =>
            dot.addEventListener("click", function() {
                window.scrollTo({
                    top: document.querySelector(this.dataset.x).offsetTop - 100,
                    behavior: "smooth"
                });
            })
        );

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
  }, []);
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
            <a href="index.html"><img  id='img' src="https://plaksha.edu.in/images/logo-new.png" alt="Rosa Logo" /></a>
          </div>
          <div className="toggle">
            <span className="first"></span>
            <span className="middle"></span>
            <span className="last"></span>
          </div>
          <div className="navigation-bar">
            <ul>
              <li className="active"><a href="index.html">Home<span className="underline"></span></a></li>
              <li><a href="#">Reservations<span className="underline"></span></a></li>
              <li><a href="#">Menu<span className="underline"></span></a></li>
              <li><a href="#">Blog<span className="underline"></span></a></li>
              <li><a href="#">Features<span className="underline"></span></a></li>
              <li><a href="#">Shop<span className="underline"></span></a></li>
              <li><a href="#">Contact<span className="underline"></span></a></li>
            </ul>
          </div>
        </nav>
        <div className="text">
          <h2 style={{color: "white", marginBottom: "20px"}}>Give To</h2>
          <h1 style={{color: "white"}} >Plaksha University</h1>
          <div className="arrow">
            <span className="left"></span>
            <i className="fas fa-asterisk"></i>
            <span className="right"></span>
          </div>
          {/* <span>Ready To Be Opened</span> */}
          <a href='https://plaksha.edu.in/' className="button"><button>Explore</button></a>
        </div>
        <svg className="svg-down" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xmlSpace="preserve"><path fill="currentColor" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path></svg> 
        <div className="arrow-down">
        </div>
      </header>
      {/* End Header */}

      {/* Start About Us */}
      <div className="about-us">
        <div className="text">
          <h2 className='ttext' >Why</h2>
          <h3 className='ttext'>Give to Plaksha</h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>Plaksha is an institution built with the collective philanthropy of 60+ donors and has a community that is growing consistently. These philanthropic contributions to Plaksha help in sustaining cutting-edge research, promoting solutions to address societal challenges, and assisting students from disadvantaged backgrounds. All gifts, irrespective of the amount, go a long way in supporting Plaksha’s commitment to nurture the next generation of fearless leaders, and to addressing the toughest challenges that our planet is facing.</p>
          <div><a className="a-CTA" href="#">About Us</a></div>
        </div>
        <div className="image-container">
          <div className="image image1">
            {/* <img className='dimg' src="https://static.wixstatic.com/media/266ad0_8d3f05c518614300a75e42543e1a5386~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/266ad0_8d3f05c518614300a75e42543e1a5386~mv2.jpg" alt="Food Photo" /> */}
            <img className='dimg' src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1699600347DSC06261_11zon.jpg" alt="Food Photo" />
          </div>
          <div className="image image2">
            <img className='dimg' src="https://library.plaksha.edu.in/opac-tmpl/bootstrap/images/3.jpeg" alt="Food Photo" />
          </div>
        </div>
      </div>
      {/* End About Us */}

      {/* Start Recipes */}
      <div className="recipes">
        <div className="image"></div>
        <div className="text">
          <h2 style={{fontSize: "60px"}}>Celebrating</h2>
          <h3 style={{fontSize: "40px"}}>Diversity</h3>
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
              <img src="" alt="Food Photo" />
            </div>
          </div>
        </div>
        <div className="menu-image-container">
          <div className="image active">
          <img className='plak' src="https://www.collegebatch.com/static/clg-gallery/plaksha-university-mohali-178436.jpg" alt="Food Photo" />
           
          </div>
          <div className="image">
          <img  className='plak' src="https://images.indianexpress.com/2023/04/plaksha.jpg" alt="Food Photo" />
         
           
          </div>
          <div className="image">
          <img  className='plak' src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1702987113untitled%20design%20%285%291702987113.png" alt="Food Photo" />
          </div>
          <div className="image">
          <img  className='plak' src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1663401598Untitled%20design%20%282%29.png" alt="Food Photo" />
          </div>
        </div>
        <div className="text">
          <h2 className='ttext'>Discover</h2>
          {/* <h3 className='ttext'>Menu</h3> */}
          <div><i className="fas fa-asterisk"></i></div>
          <p>Plaksha’s core vision is to nurture the next generation of fearless leaders who can address the toughest problems in these unpredictable times. It is done by providing an enabling entrepreneurial and innovative ecosystem.
“India will have limitless opportunities for the next few years. Opportunities that can only be realized by leveraging technology and entrepreneurship. I envision Plaksha as a learning center where we create a generation of hands-on builders who would be able to solve the grand challenges facing India and the developing world. The University has a unique interdisciplinary approach and problem-solving orientation and has the potential to redefine technology education globally.”

</p>
          <div className="a-CTA">~ Alok Mittal, Founder & Trustee, Plaksha</div>
        </div>
      </div>
      {/* End Menu */}

      {/* Start fixed-image */}
      <div className="fixed-image">
        <div className="text">
          <h2>The Perfect</h2>
          <h3>Blend</h3>
        </div>
      </div>
      {/* End fixed-image */}

      <br />

      {/* Start Reservation */}
      {/* <div className="reservation">
        <div className="text">
          <h2>Culinary</h2>
          <h3>Delight</h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
          <div><a className="a-CTA" href="#">Make a Reservation</a></div>
        </div>
        <div className="image-container">
          <div className="image image1">
            <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-1.jpg" alt="Food Photo" />
          </div>
          <div className="image image2">
            <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-2.jpg" alt="Food Photo" />
          </div>
        </div>
      </div> */}
      {/* End Reservation */}

      {/* Start Footer */}
      <footer>
        <div className="text">
          <h2>ABOUT ROSA</h2>
          <div><i className="fas fa-asterisk"></i></div>
          <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative and enjoyable way, making it perfect for restaurants, bakeries, bars or coffee shops.</p>
        </div>
        <div className="contact-container">
          <div className="social-media">
            <h3>Follow Along</h3>
            <div className="links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-square"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="newsletter">
            <h3>NewsLetter</h3>
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
        <svg className="svg-up" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xmlSpace="preserve"><path fill="#262526" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path></svg>
        <i className="fas fa-angle-double-up arrow-up"></i>
        <ul className="info">
          <li>&copy; ROSA 2017</li>
          <li>13 Hanway Square, London</li>
          <li>Tel: 71494563</li>
          <li>Handcrafted with love by <a href="#">Pixelgrade</a> Team</li>
        </ul>
        <ul className="CTA">
          <li><a href="#">PERMISSIONS AND COPYRIGHT</a></li>
          <li><a href="#">CONTACT THE TEAM</a></li>
        </ul>
      </div>
      {/* End Copy-Right */}

    </div>
  );
};

export default Demo;
