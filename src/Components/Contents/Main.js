import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner/Banner';
import './style.scss';
import BannerSm from './BannerSmall/BannerSm';
import Products_laptop from './Products_laptop/Products';
import Products_mobile from './Products_mobile/Products';
import Products_phuKien from './Products_phuKien/Products';
class Main extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <BannerSm />
        <Products_laptop />
        <Products_mobile />
        <Products_phuKien />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
