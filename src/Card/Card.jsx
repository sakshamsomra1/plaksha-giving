import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cards.css'

const cardsData = [
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg", "title":"Burgundy Flemming", "subtitle":"Advertising"},
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", "title":"Nigel Nigel", "subtitle":"Sound & Vision"},
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", "title":"Caspian Bellevedere", "subtitle":"Accounting"}
];

const Article = ({ data }) => {
  const { image, title, subtitle } = data;
  return (
    <figure className="snip1584">
      <img src={image} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
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

  const newsTemplate = data.length > 0 ? (
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
      <strong className={`news__count ${data.length > 0 ? '' : 'none'}`}>
       
      </strong>
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
