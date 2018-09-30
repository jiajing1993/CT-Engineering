import React, { Component } from 'react'

export default class PlaceholderImage extends Component {
  render() {
    const { width, height } = this.props
    return (
      <img
        width={width}
        height={height}
        style={{objectFit: 'cover'}}
        src="https://media.cntraveler.com/photos/5acf774025b57f283485bf89/4:3/w_480,c_limit/paris%2520home%2520airbnb.jpg"
        alt=""
      />
    )
  }
}
