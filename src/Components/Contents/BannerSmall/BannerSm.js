import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class BannerSm extends Component {
  render() {
    return (
      <div className="bannerSm">
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
          {/*Cho hiện thị chỉ số nếu muốn*/}
          <ol className="carousel-indicators">
            <li
              data-target="#mycarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#mycarousel" data-slide-to={1} className />
            <li data-target="#mycarousel" data-slide-to={2} className />
          </ol>
          {/*Hết tạo chỉ số*/}
          {/*Các slide bên trong carousel-inner*/}
          <div className="carousel-inner">
            {/*Slide 1 thiết lập hiện thị đầu tiên .active*/}
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/banner-laptoppro-01.jpg"
              />
              {/*Cho thêm hiện thị thông tin*/}
              <div className="carousel-caption d-none d-md-block">
                <h5>MacBookPro Air 2021 </h5>
                <p>Mua MacBookPro có cơ hội nhận được sổ tiết kiệm 😂</p>
              </div>
            </div>
            {/*Slide 2*/}
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/banner-laptoppro-01.jpg"
              />
            </div>
            {/*Slide 3*/}
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/banner-laptoppro-01.jpg"
              />
            </div>
          </div>
          {/*Cho thêm khiển chuyển slide trước, sau nếu muốn*/}
          <a
            className="carousel-control-prev"
            href="#mycarousel"
            role="button"
            data-slide="prev"
          >
            {' '}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />{' '}
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            {' '}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            />{' '}
            <span className="sr-only">Next</span>{' '}
          </a>
          {/*Hết tạo điều khiển chuyển Slide*/}
        </div>
        <div className="cards">
          <div class="card">
            <img
              class="card-img-top"
              src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2017/12/100000_banner-vui-xmax-trung-x-phone-v2-400x200.jpg"
              alt=""
            />
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2017/12/100000_banner-sony-xa1-plus-400x200.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

BannerSm.propTypes = {};

export default BannerSm;
