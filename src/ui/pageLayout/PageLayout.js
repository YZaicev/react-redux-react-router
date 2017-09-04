import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from './header/HeaderComponent'

import './PageLayout.css'

class PageLayout extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        {this.props.children}
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout