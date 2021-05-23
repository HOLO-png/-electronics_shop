import Button from '@material-ui/core/Button';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import SearchIcon from '@material-ui/icons/Search';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { area } from '../../../Constants/DataCustomSelect/DataCustomSelect.js';
import HeaderTitel from '../../HeaderTitle/HeaderTitel.js';
import IMG__HEADER from './../../../Constants/AdminConstants/AdminConstants.js';
import CustomSelect from './CustomSelect/index';
import './style.scss';

class Header extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  componentWillMount() {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      console.log(header);

      header.classList.toggle('sticky', window.scrollY > 0);
    });
  }
  render() {
    return (
      <div className="overflow">
        <header className="header">
          <img
            src={IMG__HEADER}
            className="header__banner"
            alt="electronicsImg"
          />
          <a href className="header__logo">
            Electronics Shop 😍
          </a>
          <div className="header__toggle-nav" />
          <nav>
            <form action="" className="header__form">
              <div className="header__select--wrapper">
                <div className="header__icon">
                  <LaptopWindowsIcon />
                </div>
                <CustomSelect props={area} title="Chọn Thiết Bị" />
              </div>
              <div className="header__search--wrapper">
                <div className="header__icon">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="header__search"
                  placeholder="Nhập sản phẩm mà bạn muốn tìm..."
                />
              </div>
              <Button variant="contained" color="primary" disableElevation>
                TÌM KIẾM
              </Button>
            </form>
          </nav>
          <HeaderTitel />
        </header>
      </div>
    );
  }
}

export default Header;
