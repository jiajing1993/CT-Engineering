import React, { Component } from 'react'
import './styles/page-jumbotron.css'

export default class PageJumbotron extends Component {
  // expecting image
  // title
  render() {
    const { title, image } = this.props
    return (
      <section className="page-jumbotron" style={{backgroundImage: `url(${image})`}} >
        <nav>
          <p>{ title }</p>
          <div className="link">
            <a href="#">Background</a>
            <a href="#">Mission</a>
            <a href="#">Vision</a>
          </div>
        </nav>
      </section>
    )
  }
}
