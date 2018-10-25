// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import PhotoGallery from 'react-grid-gallery';
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import Footer from '../components/Footer'
import jumbotronImage from '../images/company-jumbotron.png'
import ScrollToTopOnMount from '../components/ScrollToTopOnMount'

import '../styles/gallery.scss'

const IMAGES =[]
let req = require.context('../images/gallery', false, /.*\.(jpg|JPG)$/);

req.keys().forEach(function(key) {
  req(key);
  IMAGES.push({
    src: `${req(key)}`,
    thumbnail: `${req(key)}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  })
});

export default class Gallery extends Component {
  render() {
    return(
      <div>
        <ScrollToTopOnMount />
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
