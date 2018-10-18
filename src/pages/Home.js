// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import '../styles/home.scss'
import Button from '../components/Button'
import ModalVideo from 'react-modal-video'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return(
      <div className="home">
        <div className="text-box">
          <p className="title">The True Passion of vigor. </p>
          <p className="description">We will build rapport, trust and the foundation in which our reputation will rest rock solid and assure into the future.</p>
          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='4lN4Vg4fdpo' youtube={{autohide: 1, controls: 0, showinfo: 0, rel:0}} onClose={() => this.setState({isOpen: false})} />
          <button onClick={this.openModal}>Play Video</button>
        </div>
      </div>
    )
  }
}


// style={{backgroundImage: `url(${Image})`}}