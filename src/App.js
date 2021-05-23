import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Sidebar from './Components/Dashboard/Sidebar/Sidebar';
import Header from './Components/Dashboard/Header/Header';
import Banner from './Components/Contents/Banner/Banner';
import Main from './Components/Contents/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
