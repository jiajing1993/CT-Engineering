import React, { Component } from 'react';
import './styles/hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="hero" style={{backgroundImage: `url(${this.props.image})`}}>>
        <div className="text">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Hero;
