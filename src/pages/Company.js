// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import '../styles/company.scss'

// customize components
import PlaceholderImage from '../components/PlaceholderImage'
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import Button from '../components/Button'
import { Margin } from '../components/Utility'
import ImageCaption from '../components/ImageCaption'
import Footer from '../components/Footer'

// images
import jumbotronImage from '../images/company-jumbotron.png'
import visionImage from '../images/vision.png';
import IndustrialBuildingConstruction from '../images/photo-list-with-caption-1.png';
import FabircationStructuralSteel from '../images/photo-list-with-caption-2.png';
import StorageAndPiping from '../images/photo-list-with-caption-3.png';
import MaterialHandling from '../images/photo-list-with-caption-4.png';

const SERVICES = [
  {
    title: "Industrial Building Construction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `${IndustrialBuildingConstruction}`
  },
  {
    title: "Fabircation (Structural Steel)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `${FabircationStructuralSteel}`
  },
  {
    title: "Storage Tanks & Piping Works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `${StorageAndPiping}`
  },
  {
    title: "Material Handling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `${MaterialHandling}`
  }
]

export default class Company extends Component {
  render() {
    return(
      <div className="company">
        <PageJumbotron title="Company Profile" image={jumbotronImage}/>
        <Article>
          <h1 className="section-title">Company Background</h1>
          <p className="section-article">
              C.T. Engineering & Construction Sdn. Bhd. was incorporated in November 1996,
              formerly known as C.T. Engineering & Construction established in 1991. CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.
            <br/>
            <br/>
            Our noted quality work and timely handover soon has us into numerous industrial constructions, turnkey and others building projects. Good project management and implementation resting on the shoulders of qualified management personnel goes without saying as it has been the pillar of CT from day one. For it is through stringent progress review and control that we are forging rapidly as a builder in our own class.
          </p>
          <Margin size="80px"/>
          <PlaceholderImage width="45%"/>
          <PlaceholderImage width="45%"/>
          <Margin size="50px"/>
          <Button>View All Company Photos</Button>
        </Article>
        <section className="vision">
          <img src={visionImage} alt=""/>
          <div className="company-vision">
            <div className="info">
              <h1 className="info-title">Company Vision</h1>
              <p className="info-description">CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.</p>
            </div>
            <div className="info">
                <h1 className="info-title">Company Mission</h1>
                <p className="info-description">CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.</p>
            </div>
          </div>
        </section>

        <Article>
          <h1 className="section-title">Company Services</h1>
        </Article>
        <div className="services">
          {
            SERVICES.map((service) => { return (
              <div className="service">
                <ImageCaption
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </div>
            )})
          }
        </div>
        <Margin size="50px"/>
        <Article>
          <Button>View All Company Photos</Button>
        </Article>
        <Footer />

      </div>
    )
  }
}
