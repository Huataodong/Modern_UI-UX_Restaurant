import React from 'react';

import { SubHeading } from '../../components';
import './Header.scss';

const Header = () => (
  <div className="app__header app__wrapper " id="home">

    <div className="app__header_bg"></div>

    <div className="app__header_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Renowned for high quality Cantonese cuisine made from the freshest seasonal ingredients. Our Restaurant has been the place for authentic Cantonese yum cha and dining experience in Melbourne over the last decades. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

  </div>
);

export default Header;