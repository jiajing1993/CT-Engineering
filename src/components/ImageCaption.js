import React, { Component } from 'react'
import './styles/image-caption.css'

export default class ImageCaption extends Component {
  render() {
    const { image, title } = this.props
    return (
      <div className="image-caption" style={{backgroundImage: `url(${image})`}}>
        <div className="black-screen"></div>
        <div className="hidden-part">
          <p className="title">{ title }</p>
        </div>
      </div>
    )
  }
}
