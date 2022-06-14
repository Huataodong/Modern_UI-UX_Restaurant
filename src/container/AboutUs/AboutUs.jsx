import React from 'react';

import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our experienced chefs utilise only the freshest seasonal ingredients and the most traditional yet creative recipes to create the mouth-watering dishes served at Gold Leaf. With fresh seafood from our live seafood tanks and a wide range of traditional and exquisite dim sums, we offer an utmost Cantonese dining and yum cha experience that is like no others.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Established in Year 2000, Our Restaurant has been the place-to-be for authentic Cantonese yum cha and dining in Melbourne. We offer high quality Cantonese cuisine at affordable prices at our five restaurants across Melbourne in Docklands, Preston, Burwood, Sunshine and Springvale.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;