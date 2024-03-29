// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import '../styles/home.scss'
import ModalVideo from 'react-modal-video'
import ScrollToTopOnMount from '../components/ScrollToTopOnMount'

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
        <ScrollToTopOnMount />
        <div className="text-box">
          <p className="title">The True Passion of vigor. </p>
          <p className="description">We will build rapport, trust and the foundation in which our reputation will rest rock solid and assure into the future.</p>
          <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='671227203' youtube={{showinfo: 0, rel:0}} onClose={() => this.setState({isOpen: false})} />
          <button onClick={this.openModal}>Play Video</button>
        </div>
      </div>
    )
  }
}


// style={{backgroundImage: `url(${Image})`}}