// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import '../styles/company.scss'
import PlaceholderImage from '../components/PlaceholderImage'
import BackgroundImage from '../components/BackgroundImage'
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import Button from '../components/Button'
import Margin from '../components/Utility'
import jumbotronImage from '../images/company-jumbotron.png'
import visionImage from '../images/vision.png';

export default class Company extends Component {
  render() {
    return(
      <div className="company">
        <PageJumbotron title="Company Profile" image={jumbotronImage}/>
        <Article>
          <h1 className="section-title">Company Background</h1>
          <p className="section-article">
            C.T. Engineering & Construction Sdn. Bhd. was incorporated in November 1996, formerly known as C.T. Engineering & Construction established in 1991. CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.
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
        <img src={visionImage} alt=""/>
        <BackgroundImage image_url={visionImage} width="100%">
          <article>
            <h1>Company Vision</h1>
            <p>CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.</p>
          </article>
          <article>
            <h1>Company Mission</h1>
            <p>CT has grown to be reliable and reputable player in the construction industry and proven the successful track record ranging from industrial buildings, oil & gas industry, material handling, and installation of machinery.</p>
          </article>
        </BackgroundImage>
        <section>

          <h1>Company Service</h1>
          { [1,2,3,4].map((index) => { return (
            <div style={{width: '50%', display: 'inline-block'}}>
              <BackgroundImage>
                <p>Industrial Building Construction</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </BackgroundImage>
            </div>
          )})
        }
        </section>
      </div>
    )
  }
}
