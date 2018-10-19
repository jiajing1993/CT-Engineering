// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import PhotoGallery from 'react-grid-gallery';
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import Footer from '../components/Footer'
import jumbotronImage from '../images/company-jumbotron.png'

import '../styles/gallery.scss'

import Image1 from '../images/gallery/gallery_1.JPG'


const IMAGES =[{
  src: `${Image1}`,
  thumbnail: `${Image1}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
}
]

export default class Gallery extends Component {
  render() {
    return(
      <div>
        <PageJumbotron title="Images Gallery" image={jumbotronImage} anchors={[""]}/>
        <Article maxWidth="900px">
          <h1 className="section-title">Company Gallery</h1>
          <p className="section-article">
              Visual help build trust in that same vein, that we must actually see it to understand it's real.
              Could you imagine working in a construction and not knowing what sites they've worked on?
          </p>
        </Article>
        <section className="gallery-section">
          <PhotoGallery images={IMAGES} rowHeight={250} />
          <div className="clearfix"></div>
        </section>
        <Footer />
      </div>
    )
  }
}
