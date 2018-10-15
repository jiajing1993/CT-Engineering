// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

// stylesheet
import '../styles/safety.scss'

// custom components
import PlaceholderImage from '../components/PlaceholderImage'
import BackgroundImage from '../components/BackgroundImage'
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import ImageCaption from '../components/ImageCaption'
import {Margin, Padding} from '../components/Utility'
import Hero from '../components/Hero'
import HeroPyjamas from '../components/HeroPyjamas'
import Footer from '../components/Footer'

// images
import jumbotronImage from '../images/safety/jumbotron.png'
import Image1 from '../images/safety/safety_1.png'
import Image2 from '../images/safety/safety_2.png'
import Image3 from '../images/safety/safety_3.png'
import Image4 from '../images/safety/safety_4.png'
import Image5 from '../images/safety/safety_5.png'
import Image6 from '../images/safety/safety_6.png'
import Image7 from '../images/safety/safety_7.png'
import Image8 from '../images/safety/safety_8.png'
import Image9 from '../images/safety/safety_9.png'

export default class Safety extends Component {
  render() {
    return(
      <div className="safety">
        <PageJumbotron title="Safety & Quality" image={jumbotronImage} anchors={["Quality Policy Statement", "Quality Objective", "Safety Policy Statement", "Specific Targets"]}/>
        <Article>
          <h1 className="section-title">Working in CT Engineering</h1>
          <p className="section-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis nunc. Ac turpis egestas sed tempus urna et. Cursus risus at ultrices mi tempus.</p>
          <Margin size="50px"/>
          <ImageCaption
            image={Image1}
            title=" "
            description=" "
          />
          <Margin size="20px"/>
          <div className="galleries">
            <div className="gallery">
              <ImageCaption
                image={Image2}
                title=" "
                description=" "
              />
            </div>
            <div className="gallery">
              <ImageCaption
                image={Image3}
                title=" "
                description=" "
              />
            </div>
          </div>
        </Article>
        <ScrollableAnchor id={'quality-policy-statement'}>
          <Article maxWidth="550px">
            <h1 className="section-title">Quality Policy Statement</h1>
            <p className="section-article">
              In execution of all project, it is the policy of C.T. Engineering & Construction Sd. Bhd. to Comply with:
              • The current legislation.
              • The contractual requirement of our Clients.
              • The quality requirements of our Clients.

              Our Quality Management System will be continually improved to ensure our total Commitment to our Client.
            </p>
          </Article>
        </ScrollableAnchor>
        <ScrollableAnchor id={'quality-objective'}>
          <Article maxWidth="550px">
            <h1 className="section-title">Quality Objective</h1>
            <p className="section-article">
              In order to achieve our Quality Policy, CT ensures the following Quality Objectives are met:-
            </p>
            <p className="section-article">
              <ul>
                <li>
                  To meet with Clients requirements of Quality, effectiveness and timely execution of projects by adhering to professional standard working procedures.
                </li>
                <li>
                  To have zero repeated nonconformance to quality and safety.
                </li>
                <li>
                  To have zero repeated complaint from customer, authority and third party during execution of project.
                </li>
              </ul>
            </p>
          </Article>
        </ScrollableAnchor>

        <Hero image={Image4} >
          <p className="title">
            Let’s Talk About
            <br/>
            <strong>Safety Management</strong>
          </p>
        </Hero>
        <ScrollableAnchor id={'safety-policy-statement'}>
          <Article maxWidth="550px">
            <h1 className="section-title">Safety Policy Statement</h1>
            <p className="section-article">The safety unit implements the safety requirements for project sites with references from the following documents:</p>
            <p className="section-article">The company has its own Safety Manual as a reference for the manage- ment, project managers and line managers in maintaining a good safety culture.</p>
            <p className="section-article">
              <ul>
                <li>Factory and Machinery Act 1967</li>
                <li>Occupational Safety and Health Act 1994</li>
                <li>Building Operation and Work of Engineering Construction Regulations 1996 d)Client’s Safety and Health Manual.</li>
              </ul>
            </p>
            <p className="section-article">The company safety manual consists the following contents:</p>
            <p className="section-article">
              <ul>
                <li>CT Health, Safety & Environment Policy</li>
                <li>Statement of Intent</li>
                <li>Organization Responsibilities</li>
                <li>Communication Structure </li>
                <li>Safety Plan</li>
                <li>Safety Procedures</li>
              </ul>
            </p>
            <p className="section-article">The safety unit will develop the Project Safety Manual for each individual project pertaining to the scope of works and individual client’s requirements.</p>
          </Article>
        </ScrollableAnchor>

        <HeroPyjamas image={Image5}>
          <Padding size="80px">
            <div className="grids objective">
              <div className="grid-10">
                <h1>Objective</h1>
                <Margin size="30px" />
                <p>C.T Engineering & Construction Sdn Bhd. Will conduct its operations to meet its objectives:</p>
                <p>
                  To ensure workplace safety and encourage good Occupational Safety and Health to Employees and others who may be affected alike.

                  To increase employee's Moral, Safe Working ethics and good discipline to achieve Free accident status in the business operations.

                  To establish better relations between Management/Employees.

                  To lower operating insurance costs by safe operating performance.

                  To maintain local and International Standards in Occupational Safety and Health.

                  Prevent 'Loss Time' on Man-hours and Production.
                </p>
              </div>
            </div>
          </Padding>
        </HeroPyjamas>
        <ScrollableAnchor id={'specific-targets'}>
          <Article maxWidth="550px">
            <h1 className="section-title">Specific Targets</h1>
            <p className="section-article">In conducting C.T Engineering & Construction Sdn Bhd. Business operations and activities, its employees and others involved will strive to:</p>
            <p className="section-article">
              <ul>
                <li>Prevent all accidents and injuries.</li>
                <li>Prevent all Occupational illnesses.</li>
                <li>Prevent pollution of the Environment.</li>
                <li>Prevent Fire hazards and obstacles.</li>
              </ul>
            </p>
          </Article>
        </ScrollableAnchor>
        <section>
          <div className="grids">
            <div className="grid">
              <HeroPyjamas image={Image6}>
                <Padding size="30px 20px">
                  <h1 className="big-text dark-text">Our Engineer are always make sure the ground are saved. From the top, the picture are even clearer.</h1>
                </Padding>
              </HeroPyjamas>
            </div>
            <div className="grid">
              <HeroPyjamas image={Image7}>
                <Padding size="30px 20px">
                  <h1 className="big-text white-text">Our Engineer are always make sure the ground are saved. From the top, the picture are even clearer.</h1>
                </Padding>
              </HeroPyjamas>
            </div>
            <div className="grid">
              <HeroPyjamas image={Image8}>
                <Padding size="30px 20px">
                  <h1 className="big-text dark-text">Our Engineer are always make sure the ground are saved. From the top, the picture are even clearer.</h1>
                </Padding>
              </HeroPyjamas>
            </div>
          </div>
        </section>
        <HeroPyjamas image={Image9}>
          <Padding size="80px">
            <div className="grids operating-culture center">
              <div className="grid-5">
                <h1>Safe Working Environment and Operating Culture</h1>
                <Margin size="40px" />
                <p>C.T Engineering & Construction Sdn Bhd. Primary goal is to manage by developing a "SAFE WORKING ENVIROMENT AND OPERATING CULTURE" in the business operations and activities leading to an accident – free workplace and Maintain at all times good healthy practices for employees. Ensure co-operation with building management to develop and execute contingency plans to deal with possible emergency and adverse impact to employees.</p>
              </div>
              <div className="grid-5">
              </div>
            </div>
          </Padding>
        </HeroPyjamas>
        <Footer />
      </div>
    )
  }
}
