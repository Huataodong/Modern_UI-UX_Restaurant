import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '2rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">109 Shakespeare Avenue, Magill, Adelaide</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 11:00 am - 10:00 pm</p>
        <p className="p__opensans">Sat - Sun: 11:00 am - 11:00 pm</p>
      </div>
      <br />
      <a href="mailto:hunterbiu1205@gmail.com">
        <button className="custom__button" type="button">Visit Us</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>

  </div>
);

export default FindUs;
