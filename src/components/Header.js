import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <img src="img/logo.jpg" className="navbar-left" />
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
