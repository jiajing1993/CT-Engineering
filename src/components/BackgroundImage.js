import React, { Component } from 'react'

const DEFAULT_IMG = "https://www.apple.com/v/environment/h/images/overview/climate_change_large_2x.jpg"

export default class BackgroundImage extends Component {
  render() {
    let image = this.props.image_url || DEFAULT_IMG
    const bgStyle = {
      backgroundImage: `url(${image})`,
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

