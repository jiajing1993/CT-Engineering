import React, { Component } from 'react'
import './styles/hero-pyjamas.css'

export default class HeroPyjamas extends Component {
  render() {
    return (
      <section className="hero-pyjamas">
        <img src={this.props.image} alt=""/>
        <div className="hero-pyjamas-contain">
          { this.props.children }
        </div>
      </section>
    )
  }
}
