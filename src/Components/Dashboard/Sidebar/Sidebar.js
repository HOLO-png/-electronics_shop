import React, { Component } from 'react';
import './style.scss';
// import { NavLink, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Sidebar extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  render() {
    return (
      <div className="left-menu">
        <nav className="left-menu__navbar">
          <ul className="left-menu__navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                <i className="fas fa-h-square"></i>
                <span className="link-text">Trang Chủ</span>
              </div>
            </li>

            <li className="nav-item">
              <div to="/post" className="nav-link">
                <i className="fab fa-pushed"></i>
                <span className="link-text">Liên Hệ</span>
              </div>
            </li>

            <li className="nav-item">
              <div to="/favorite" className="nav-link">
                <i className="fas fa-heart"></i>
                <span className="link-text">Yêu Thích</span>
              </div>
            </li>

            <li className="nav-item">
              <div to="/contact" className="nav-link">
                <i className="fas fa-ad"></i>
                <span className="link-text">Đầu Tư</span>
              </div>
            </li>

            <li className="nav-item" id="nav-item--hidden">
              <div to="/about" className="nav-link">
                <i className="fas fa-id-card-alt"></i>
                <span className="link-text">Về Chúng Tôi</span>
              </div>
            </li>

            <li className="nav-item">
              <div to="/setting" className="nav-link">
                <i className="fas fa-wrench"></i>
                <span className="link-text">Cài đặt</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Sidebar;
