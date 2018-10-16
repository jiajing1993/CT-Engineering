import React, { Component } from 'react'
import './styles/page-jumbotron.css'

export default class PageJumbotron extends Component {
  string_parameterize = (str1) => {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
  };
  render() {
    const { image } = this.props

    return (
      <section className="page-jumbotron" style={{backgroundImage: `url(${image})`}} >
        <nav>
          <div className="link">
            {
              this.props.anchors.map((anchor) => {
                return (
                  <a href={`#${this.string_parameterize(anchor)}`}>{anchor}</a>
                )
              })
            }
          </div>
        </nav>
      </section>
    )
  }
}
