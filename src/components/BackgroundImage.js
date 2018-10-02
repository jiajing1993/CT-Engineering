import React, { Component } from 'react'



export default class BackgroundImage extends Component {
  render() {
    const bgStyle = {
      backgroundImage: `url(https://www.apple.com/v/environment/h/images/overview/climate_change_large_2x.jpg)`,
      backgroundRepaet: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px',
      display: 'inline-block',
      width: `${this.props.width ? this.props.width : '100%'}`
    }
    return (
      <div style={bgStyle}>
        {this.props.children}
      </div>
    )
  }
}

