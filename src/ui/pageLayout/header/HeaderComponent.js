import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

Header.propTypes = {}

export default Header