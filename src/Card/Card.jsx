import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";

const cardsData = [
  {
    image: "https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/16802419241305x735.jpg",
    title:
      "Sustaining cutting-edge research, promoting solutions to societal challenges, assisting studentsAll gifts, big or small, go a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting ",
    subtitle: "Cutting Edge Research",
    description: "Sustaining ",
  },
  {
    image:
      "https://www.ravelin3d.com/assets/cache_image/images/portfolio/Plaksha/Plaksha_office1_0x0_9a9.jpg",
    title:
      "All gifts, big or small, go a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurtureAll gifts, big or small, go a long way in supporting Plaksha's commitment ",
    subtitle: "Sound & Vision",
    description: "Commitment",
  },
  {
    image:
      "https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1702963344DSC05676-min%20%281%29.jpg",
    title:
      "Nurture next generation of fearless leaders to solve the toughest challenges facing our planet.All gifts, big or small, go a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way  in supporting",
    subtitle: "Fearless Leaders",
    description: "Next generation ",
  },
  {
    image:
      "https://pbs.twimg.com/media/FEzt63IVkAEnEDg?format=jpg&name=4096x4096",
    title:
      "Nurture next generation of fearless leaders to solve the toughest challenges facing our planet.All gifts, big or small, go a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way  in supporting",
    subtitle: "Fearless Leaders",
    description: "Next generation ",
  },
  {
    image:
      "https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1663401586Untitled%20design%20%281%29.png",
    title:
      "Nurture next generation of fearless leaders to solve the toughest challenges facing our planet.All gifts, big or small, go a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way in supporting Plaksha's commitment to nurturego a long way  in supporting",
    subtitle: "Fearless Leaders",
    description: "Next generation ",
  },
];

const Article = ({ data, index }) => {
  const { image, title, description ,subtitle} = data;
  const isFirstCard = index === 0;

  return (
    <figure className={`snip1584 first-card`}>
      <img src={image} alt={title} />
      
      <figcaption style={{ padding: "30px", wordWrap: "break-word", whiteSpace: "pre-wrap", overflow: "hidden" ,   backgroundColor:' background-color: rgba(48, 42, 42, 0.342)'}}>
        <h3 style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "bold" }}>{title}</h3>
         
          
          <h2
            className="desc"
            style={{
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              // backgroundColor: "#6b6464",
              padding: "3px 10px",
              borderRadius: "3px",
              marginTop: "90px",
           
            }}
          >

        
            {description}
            <br />
            <p style={{fontSize:"25px",color:'white'}}> {subtitle}</p>
           
          </h2>
     
        {/* <h3 style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "bold" }}>{subtitle}</h3> */}
        
      </figcaption>
      

      <a href="#"></a>
    </figure>
  );
};

const News = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const newsTemplate =
    data.length > 0 ? (
      data.map((item, index) => (
        <div key={index}>
          <Article data={item} />
        </div>
      ))
    ) : (
      <p></p>
    );

  return (
    <div className="news">
      <Slider {...settings}>{newsTemplate}</Slider>
      <strong
        className={`news__count ${data.length > 0 ? "" : "none"}`}
      ></strong>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards">
      <News data={cardsData} />
    </div>
  );
};

export default Cards;
