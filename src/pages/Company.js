// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import '../styles/company.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';


// customize components
import PageJumbotron from '../components/PageJumbotron'
import ScrollToTopOnMount from '../components/ScrollToTopOnMount'
import Article from '../components/Article'
import { Margin } from '../components/Utility'
import ImageCaption from '../components/ImageCaption'
import Footer from '../components/Footer'

// images
import jumbotronImage from '../images/company-jumbotron.png'
import visionImage from '../images/vision.png';
import visionImageMobile from '../images/vision-mobile.png';
import IndustrialBuildingConstruction from '../images/photo-list-with-caption-1.png';
import FabircationStructuralSteel from '../images/photo-list-with-caption-2.png';
import StorageAndPiping from '../images/photo-list-with-caption-3.png';
import MaterialHandling from '../images/photo-list-with-caption-4.png';

import company1 from '../images/company/company_1.JPG';
import company2 from '../images/company/company_2.JPG';

const SERVICES = [
  {
    title: "Industrial Building Construction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `${IndustrialBuildingConstruction}`
  },
  {
    title: "Fabrication (Structural Steel)",
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
        <ScrollToTopOnMount />
        <PageJumbotron title="Company Profile" image={jumbotronImage} anchors={["Company", "Vision & Mission", "Services"]}/>
        <ScrollableAnchor id={'company'}>
          <Article maxWidth="900px">
            <h1 className="section-title">Company Background</h1>
            <p className="section-article">
                C.T. Engineering & Construction Sdn. Bhd. was incorporated in November 1996,
                formerly known as C.T. Engineering & Construction established in 1991.
                <br/>
                <br/>
                CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.
              <br/>
              <br/>
              Our noted quality work and timely handover soon has us into numerous industrial constructions, turnkey and others building projects. Good project management and implementation resting on the shoulders of qualified management personnel goes without saying as it has been the pillar of CT from day one. For it is through stringent progress review and control that we are forging rapidly as a builder in our own class.
            </p>
            <Margin size="80px"/>
            <MediaQuery query="(max-width: 700px)">
              <div className="grids">
                <div className="grid-10">
                  <img src={company1} alt="" width="100%"/>
                </div>
                <div className="grid-10">
                  <img src={company2} alt="" width="100%"/>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 701px)">
              <div className="grids">
                <div className="grid-5-with-gap">
                  <img src={company1} alt="" width="100%"/>
                </div>
                <div className="grid-5-with-gap">
                  <img src={company2} alt="" width="100%"/>
                </div>
              </div>

            </MediaQuery>
            <Margin size="50px"/>
            <Link className="button" to="/gallery">View Company Photos</Link>
          </Article>
        </ScrollableAnchor>

        <ScrollableAnchor id={'vision--mission'}>
          <section className="vision">
            <MediaQuery query="(max-width: 700px)">
              <img src={visionImageMobile} alt=""/>
            </MediaQuery>
            <MediaQuery query="(min-width: 701px)">
              <img src={visionImage} alt=""/>
            </MediaQuery>
            <div className="company-vision">
              <div className="info">
                  <h1 className="info-title">Vision</h1>
                  <p className="info-description">To be a company thats in a position to take up any challenge in the construction industry.</p>
              </div>
              <div className="info">
                <h1 className="info-title">Mission</h1>
                <p className="info-description">To perform for our customers the highest level of quality construction services at fair and market competitive prices.</p>
              </div>
            </div>
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'services'}>
          <Article maxWidth="900px">
            <h1 className="section-title">Company Services</h1>
            <p className="section-article">
              Our business strategies and new course of action are set to our niche into the industry. We respect the challenges we face with true commitment and the passion of vigor. We will build rapport, trust and the foundation in which our reputation will rest rock solid and assure into the future.
            </p>
            <Margin size="50px"/>
            <div className="services">
            {
              SERVICES.map((service, index) => { return (
                <div key={index} className="service">
                  <ImageCaption
                    image={service.image}
                    title={service.title}
                    description={""}
                  />
                </div>
              )})
            }
            </div>
            <Margin size="40px"/>
            <Link className="button" to="/project">View Company Projects</Link>
          </Article>
        </ScrollableAnchor>
        <Footer />

      </div>
    )
  }
}
