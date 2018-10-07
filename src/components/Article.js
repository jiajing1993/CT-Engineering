import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', width: '80%', maxWidth: "750px",
                  margin: '0px auto', padding: '80px 0px'}}>
        { this.props.children }
      </div>
    )
  }
}
