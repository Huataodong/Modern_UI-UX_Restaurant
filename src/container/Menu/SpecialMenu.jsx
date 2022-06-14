import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.scss';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_specialties ">
        <p className="app__specialMenu-menu_heading">SPECIALITIES</p>
        <div className="app__specialMenu-menu_items">
          {data.specialities.map((specialitie, index) => (
            <MenuItem key={specialitie.title + index} title={specialitie.title} price={specialitie.price} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_banquets">
        <p className="app__specialMenu-menu_heading">BANQUETS <br /> $52.00 Per Person</p>
        <div className="app__specialMenu-menu_items">
          {data.banquets.map((banquet, index) => (
            <MenuItem key={banquet.title + index} title={banquet.title} />
          ))}
        </div>
      </div>


    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className="custom__button">View More</button>
    </div>

  </div>
);

export default SpecialMenu;
