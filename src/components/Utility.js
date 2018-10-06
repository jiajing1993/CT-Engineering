import React, { Component } from 'react';

export default class Margin extends Component {
  render() {
    return (
      <div style={{marginBottom: `${this.props.size}`}} >
      </div>
    );
  }
}

