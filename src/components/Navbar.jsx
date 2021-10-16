import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul>
        <Link to="/">WikiCountries</Link>
      </ul>
    );
  }
}

export default Navbar;
