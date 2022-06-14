import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.scss';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__chef_img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="app__chef-title">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">My name is Arata, and I am the Niubiest Chef in the world. I am so Niubi.</p>
        </div>
        <p className="p__opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>

      <div className="app__chef-sign">
        <p>Arata Ishimoto</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
