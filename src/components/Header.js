// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return(
      <header>
        <div className="upper-header">
          <Link to="/">I am logo</Link>
          <Link to="/service">Services</Link>
          <Link to="/project">Projects</Link>
          <Link to="/safety">Safety & Quality</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="bottom-header">
          <p>CT Engeering and Construction Sdn Bhd 123, Jalan Besar, Kawasan Kecil, 2018, Kuala Lumpur</p>
          <p>602 - 245 232</p>
          <p>Copyright © 2018 CT Enigeering and Construction All Rights Reserved.</p>
        </div>

      </header>
    )
  }
}
