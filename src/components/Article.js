import React, { Component } from 'react'
import './styles/article.css'

export default class Article extends Component {
  render() {
    let customMaxWidth = this.props.maxWidth || "750px";
    return (
      <div className="article" style={{textAlign: 'center', maxWidth: `${customMaxWidth}`,
                  margin: '0px auto', padding: '80px 0px'}}>
        { this.props.children }
      </div>
    )
  }
}
