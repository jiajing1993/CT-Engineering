import React, { Component } from 'react';

export class Margin extends Component {
  render() {
    return (
      <div style={{marginBottom: `${this.props.size}`}} >
      </div>
    );
  }
}

export class Padding extends Component {
  render() {
    return (
      <div style={{padding: `${this.props.size}`, width: `100%`, height: `100%`}} >
        {this.props.children}
      </div>
    );
  }
}

