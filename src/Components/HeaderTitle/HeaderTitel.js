import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class HeaderTitel extends Component {
  render() {
    return (
      <ul className="header-title">
        <li className="header-title__item">
          <img
            src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/3d-printer-24x24.png"
            alt="sanpham"
          />
          <a href>Sản Phẩm</a>
        </li>
        <li className="header-title__item">
          <img
            src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2017/12/headset-1-24x24.png"
            alt="sanpham"
          />
          <a href>Phụ Kiện</a>
        </li>
        <li className="header-title__item">
          <img
            src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2017/12/gift-1-24x24.png"
            alt="sanpham"
          />
          <a href>Khuyến mãi</a>
        </li>
        <li className="header-title__item">
          <img
            src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/employee-24x24.png"
            alt="sanpham"
          />
          <a href>Tuyển Dụng</a>
        </li>
        <li className="header-title__item">
          <img
            src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2017/12/folded-newspaper-1-24x24.png"
            alt="sanpham"
          />
          <a href>Tin Công Nghệ</a>
        </li>
        <li className="header-title__item">
          <img
            src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/mechanic-24x24.png"
            alt="sanpham"
          />
          <a href>Dịch Vụ</a>
        </li>
      </ul>
    );
  }
}

HeaderTitel.propTypes = {};

export default HeaderTitel;
