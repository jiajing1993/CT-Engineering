// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import PhotoGallery from 'react-grid-gallery';
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import Footer from '../components/Footer'
import jumbotronImage from '../images/company-jumbotron.png'

import '../styles/gallery.scss'

import image1 from '../images/gallery/image1.jpg'
import image2 from '../images/gallery/image2.jpg'
import image3 from '../images/gallery/image3.JPG'
import image4 from '../images/gallery/image4.JPG'
import image5 from '../images/gallery/image5.JPG'
import image6 from '../images/gallery/image6.JPG'
import image7 from '../images/gallery/image7.JPG'
import image8 from '../images/gallery/image8.JPG'
import image9 from '../images/gallery/image9.JPG'
import image10 from '../images/gallery/image10.JPG'
import image11 from '../images/gallery/image11.JPG'
import image12 from '../images/gallery/image12.JPG'
import image13 from '../images/gallery/image13.JPG'



const IMAGES =[
  {
    src: `${image1}`,
    thumbnail: `${image1}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image2}`,
    thumbnail: `${image2}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image3}`,
    thumbnail: `${image3}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image4}`,
    thumbnail: `${image4}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image5}`,
    thumbnail: `${image5}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image6}`,
    thumbnail: `${image6}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image7}`,
    thumbnail: `${image7}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image8}`,
    thumbnail: `${image8}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image9}`,
    thumbnail: `${image9}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image10}`,
    thumbnail: `${image10}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image11}`,
    thumbnail: `${image11}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image12}`,
    thumbnail: `${image12}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image13}`,
    thumbnail: `${image13}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image4}`,
    thumbnail: `${image4}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
  {
    src: `${image5}`,
    thumbnail: `${image5}`,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  },
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
