import React from 'react';
import './pen.css';

function CategoryCard() {
  return (
    <section className="container">
      <div className="category_container">
        <div className="content">
          <img src="assets/UI UX Designer.jpg" className="professio_image" alt="Profession" />
          <img src="assets/John Doe.jpg" className="profile_image" alt="Profile" />
          <div className="profile_detail">
            <span>John Doe</span>
            <p>UI/UX Designer + Graphic Designer</p>
          </div>
          <div className="wrapper">
            <div className="profile_quote">
              <p>"UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."</p>
            </div>
          </div>
        </div>
        <div className="content">
          <img src="assets/UI UX Designer.jpg" className="professio_image" alt="Profession" />
          <img src="assets/John Doe.jpg" className="profile_image" alt="Profile" />
          <div className="profile_detail">
            <span>John Doe</span>
            <p>UI/UX Designer + Graphic Designer</p>
          </div>
          <div className="wrapper">
            <div className="profile_quote">
              <p>"UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."</p>
            </div>
          </div>
        </div>
        <div className="content">
          <img src="assets/UI UX Designer.jpg" className="professio_image" alt="Profession" />
          <img src="assets/John Doe.jpg" className="profile_image" alt="Profile" />
          <div className="profile_detail">
            <span>John Doe</span>
            <p>UI/UX Designer + Graphic Designer</p>
          </div>
          <div className="wrapper">
            <div className="profile_quote">
              <p>"UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."</p>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other profiles */}
      </div>
    </section>
  );
}

export default CategoryCard;
