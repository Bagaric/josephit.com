import React, { Component } from 'react';
import './Header.css';

import logo from '../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Joseph IT</h1>
      </header>
    );
  }
}

export default Header;
