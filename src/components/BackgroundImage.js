import React, { Component } from 'react'

const bgStyle = {
  backgroundImage: `url(https://www.apple.com/v/environment/h/images/overview/climate_change_large_2x.jpg)`,
  backgroundRepaet: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px'
};

export default class BackgroundImage extends Component {
  render() {
    return (
      <div style={bgStyle}>
        {this.props.children}
      </div>
    )
  }
}

