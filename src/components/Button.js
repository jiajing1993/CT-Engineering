import React from 'react'
import './styles/button.css'

export default class Button extends React.Component {
  static Transparent = ({ children }) => {
    return <button className="transparent">{children}</button>;
  }
  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}
