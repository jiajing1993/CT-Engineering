// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import PhotoGallery from 'react-grid-gallery';
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import Footer from '../components/Footer'
import jumbotronImage from '../images/company-jumbotron.png'

import '../styles/gallery.scss'

import Image1 from '../images/gallery/gallery_1.jpg'
import Image2 from '../images/gallery/gallery_2.jpg'
import Image3 from '../images/gallery/gallery_3.jpg'
import Image4 from '../images/gallery/gallery_4.jpg'
import Image5 from '../images/gallery/gallery_5.jpg'
import Image6 from '../images/gallery/gallery_6.jpg'
import Image7 from '../images/gallery/gallery_7.JPG'
import Image8 from '../images/gallery/gallery_8.jpg'
import Image9 from '../images/gallery/gallery_9.jpg'
import Image10 from '../images/gallery/gallery_9.jpg'
import Image11 from '../images/gallery/gallery_11.jpg'
import Image12 from '../images/gallery/gallery_12.jpg'
import Image13 from '../images/gallery/gallery_13.jpg'
import Image14 from '../images/gallery/gallery_14.jpg'


const IMAGES =[{
  src: `${Image1}`,
  thumbnail: `${Image1}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image2}`,
  thumbnail: `${Image2}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image3}`,
  thumbnail: `${Image3}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image4}`,
  thumbnail: `${Image4}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image5}`,
  thumbnail: `${Image5}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image6}`,
  thumbnail: `${Image6}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image7}`,
  thumbnail: `${Image7}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image8}`,
  thumbnail: `${Image8}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image9}`,
  thumbnail: `${Image9}`,
  thumbnailWidth: 600,
  thumbnailHeight: 300
},
{
  src: `${Image10}`,
  thumbnail: `${Image10}`,
  thumbnailWidth: 500,
  thumbnailHeight: 200
},
{
  src: `${Image11}`,
  thumbnail: `${Image11}`,
  thumbnailWidth: 500,
  thumbnailHeight: 400
},
{
  src: `${Image12}`,
  thumbnail: `${Image12}`,
  thumbnailWidth: 500,
  thumbnailHeight: 300
},
{
  src: `${Image13}`,
  thumbnail: `${Image13}`,
  thumbnailWidth: 1200,
  thumbnailHeight: 600
},
{
  src: `${Image14}`,
  thumbnail: `${Image14}`,
  thumbnailWidth: 1000,
  thumbnailHeight: 600
}
]

export default class Gallery extends Component {
  render() {
    return(
      <div>
        <PageJumbotron title="Images Gallery" image={jumbotronImage} anchors={[""]}/>
        <Article>
          <h1 className="section-title">Company Gallery</h1>
          <p className="section-article">
              C.T. Engineering & Construction Sdn. Bhd. was incorporated in November 1996,
              formerly known as C.T. Engineering & Construction established in 1991. CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.
          </p>
        </Article>
        <section className="gallery-section">
          <PhotoGallery images={IMAGES} rowHeight={250} />
        </section>
        <Footer />
      </div>
    )
  }
}
