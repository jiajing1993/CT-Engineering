import React from 'react'
import './styles/button.css'

export default class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}