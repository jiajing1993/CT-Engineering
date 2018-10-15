// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import '../styles/home.scss'
import Button from '../components/Button'

export default class Home extends Component {
  render() {
    return(
      <div className="home">
        <div className="text-box">
          <p className="title">The True Passion of vigor. </p>
          <p className="description">We will build rapport, trust and the foundation in which our reputation will rest rock solid and assure into the future.</p>
          <Button>Play Video</Button>
        </div>
      </div>
    )
  }
}


// style={{backgroundImage: `url(${Image})`}}