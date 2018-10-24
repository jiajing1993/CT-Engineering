// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import logo from '../images/ct-logo.png';
import { withRouter } from 'react-router'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: false,
      floatingButton: false
    }
  }

  componentDidMount() {
    let that = this;
    window.onscroll = function() {
      if(window.pageYOffset > 200) {
        that.setState({
          floatingButton: true,
        })
      }else{
        that.setState({
          floatingButton: false,
        })
      }
    };
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
            <Link to="/" onClick={this.toggleHeader}>
              <img src={logo} alt=""/>
            </Link>
            <Link to="/company" className={`${this.props.location.pathname === "/company" ? "active" : ""}`} onClick={this.toggleHeader}>Company</Link>
            <Link to="/project" className={`${this.props.location.pathname === "/project" ? "active" : ""}`} onClick={this.toggleHeader}>Projects</Link>
            <Link to="/safety" className={`${this.props.location.pathname === "/safety" ? "active" : ""}`} onClick={this.toggleHeader}>Safety & Quality</Link>
            <Link to="/gallery" className={`${this.props.location.pathname === "/gallery" ? "active" : ""}`} onClick={this.toggleHeader}>Gallery</Link>
          </div>
          <div className="hidden-bottom-header"></div>
          <div className="bottom-header">
            <p>C.T. Engineering & Construction Sdn. Bhd.</p>
            <p>764, Jalan Platinum Utama, 81700 Pasir Gudang, Johor</p>
            <br/>
            <p>+6 07-251 1192</p>
            <br/>
            <p>Copyright © 2018 - All Rights Reserved.</p>
          </div>
        </header>
        <div className={`toggle ${ this.state.floatingButton ? "floating" : ""}`} onClick={this.toggleHeader}>
          <div className={`span-wrapper ${ this.state.isHidden ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

const AppWithRouter = withRouter(Header)
export default AppWithRouter;