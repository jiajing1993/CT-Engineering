import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    let customMaxWidth = this.props.maxWidth || "750px";
    return (
      <div style={{textAlign: 'center', width: '80%', maxWidth: `${customMaxWidth}`,
                  margin: '0px auto', padding: '80px 0px'}}>
        { this.props.children }
      </div>
    )
  }
}
