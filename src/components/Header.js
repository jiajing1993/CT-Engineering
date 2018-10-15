// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import logo from '../images/CT_logo.png';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: false,
    }
  }

  toggleHeader = () => {
    console.log(this.state.isHidden)
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }
  render() {
    return(
      <div>
        <header className={`${ this.state.isHidden ? "hide" : ""}`}>
          <div className="upper-header">
            <Link to="/">
              <img src={logo} alt=""/>
            </Link>
            <Link to="/company">Company</Link>
            <Link to="/project">Projects</Link>
            <Link to="/safety">Safety & Quality</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="bottom-header">
            <p>CT Engeering and Construction Sdn Bhd 123, Jalan Besar, Kawasan Kecil, 2018, Kuala Lumpur</p>
            <br/>
            <p>602 - 245 232</p>
            <br/>
            <p>Copyright © 2018 CT Enigeering and Construction All Rights Reserved.</p>
          </div>
        </header>
        <div className="toggle" onClick={this.toggleHeader}>
          <div class={`nav-icon1 ${ this.state.isHidden ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}
