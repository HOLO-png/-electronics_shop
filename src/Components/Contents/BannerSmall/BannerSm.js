import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class BannerSm extends Component {
  render() {
    return (
      <div className="bannerSm">
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="https://intphcm.com/data/upload/banner-la-gi.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="http://mauweb.monamedia.net/laptoppro/wp-content/uploads/2018/02/banner-laptoppro-01.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://minhduongads.com/wp-content/uploads/2020/01/mau-thiet-ke-banner-the-gioi-dien-may-minh-duong-media.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/*Cho thêm hiện thị thông tin*/}
          <div className="carousel-caption d-none d-md-block">
            <h5>MacBookPro Air 2021 </h5>
            <p>Mua MacBookPro có cơ hội nhận được sổ tiết kiệm 😂</p>
          </div>
        </div>
        {/*Slide 2*/}
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
