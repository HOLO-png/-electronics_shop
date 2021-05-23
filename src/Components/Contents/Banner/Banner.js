import React, { Component } from 'react';
import './style.scss';
// import PropTypes from 'prop-types';

class Banner extends Component {
  render() {
    return (
      <section className="sec">
        <div className="circle" />
        <div className="content">
          <div className="content__textBox">
            <h2>
              It sells <span>electronics</span> here <br />
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              quam dignissimos hic iste iusto non magnam similique veritatis,
              laborum atque ad dicta tempora repellat id.
            </p>
            <a href>View All Product</a>
          </div>
          <div className="content__imgBox">
            <img
              src="https://f16-group-zf.zdn.vn/8705606bb2145d4a0405/291736725995132896"
              alt="01"
              className="content__img"
            />
          </div>
        </div>
        <ul className="thumb">
          <li>
            <img
              src="http://pngimg.com/uploads/macbook/small/macbook_PNG101753.png"
              alt="02"
            />
          </li>
          <li>
            <img
              src="http://pngimg.com/uploads/iphone/small/iphone_PNG5736.png"
              alt="03"
            />
          </li>
          <li>
            <img
              src="http://pngimg.com/uploads/xbox/small/xbox_PNG17521.png"
              alt="04"
            />
          </li>
        </ul>
        <ul className="sci">
          <li>
            <a href>
              <img src="../img/images/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href>
              <img src="../img/images/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href>
              <img src="../img/images/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

Banner.propTypes = {};

export default Banner;
