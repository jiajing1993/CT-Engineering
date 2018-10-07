// ./src/pages/Subscribe.js
import React, { Component } from 'react';

// stylesheet
import '../styles/safety.scss'

// custom components
import PlaceholderImage from '../components/PlaceholderImage'
import BackgroundImage from '../components/BackgroundImage'
import PageJumbotron from '../components/PageJumbotron'
import Article from '../components/Article'
import ImageCaption from '../components/ImageCaption'
import Margin from '../components/Utility'
import Hero from '../components/Hero'

// images
import jumbotronImage from '../images/safety/jumbotron.png'
import Image1 from '../images/safety/safety_1.png'
import Image2 from '../images/safety/safety_2.png'
import Image3 from '../images/safety/safety_3.png'
import Image4 from '../images/safety/safety_4.png'
import Image5 from '../images/safety/safety_5.png'

export default class Safety extends Component {
  render() {
    return(
      <div className="safety">
        <PageJumbotron title="Safety & Quality" image={jumbotronImage}/>
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
        <Hero image={Image4} >
          <p className="title">
            Let’s Talk About
            <br/>
            <strong>Safety Management</strong>
          </p>
        </Hero>
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
        <section className="vision">
          <img src={Image5} alt=""/>
          <div className="company-vision">
            <h1>Objective</h1>
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
        </section>
        <section>
          <h1>Specific Targets</h1>
          <p>In conducting C.T Engineering & Construction Sdn Bhd. Business operations and activities, its employees and others involved will strive to:</p>
          <ul>
            <li>Prevent all accidents and injuries.</li>
            <li>Prevent all Occupational illnesses.</li>
            <li>Prevent pollution of the Environment.</li>
            <li>Prevent Fire hazards and obstacles.</li>
          </ul>
        </section>
        <section>
          <BackgroundImage width="33%">
            <h1>Our Engineer are always make sure the ground are saved. From the top, the picture are even clearer.</h1>
          </BackgroundImage>
          <BackgroundImage width="33%">
            <h1>Employers have duties concerning the provision and use of personal protective equipment (PPE) at work.</h1>
          </BackgroundImage>
          <BackgroundImage width="33%">
            <h1>Our Engineer are always make sure the ground are saved. From the top, the picture are even clearer.</h1>
          </BackgroundImage>
        </section>
        <section>
          <BackgroundImage width="100%">
            <h1>Safe Working Environment and Operating Culture</h1>
            <p>C.T Engineering & Construction Sdn Bhd. Primary goal is to manage by developing a "SAFE WORKING ENVIROMENT AND OPERATING CULTURE" in the business operations and activities leading to an accident – free workplace and Maintain at all times good healthy practices for employees. Ensure co-operation with building management to develop and execute contingency plans to deal with possible emergency and adverse impact to employees.</p>
          </BackgroundImage>
        </section>

      </div>
    )
  }
}
