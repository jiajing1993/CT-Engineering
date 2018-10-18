// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import MediaQuery from 'react-responsive';

// stylesheet
import '../styles/safety.scss'

// custom components
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
import Image5Mobile from '../images/safety/safety_5_mobile.png'
import Image6 from '../images/safety/safety_6.png'
import Image7 from '../images/safety/safety_7.png'
import Image8 from '../images/safety/safety_8.png'
import Image9 from '../images/safety/safety_9.png'
import Image9Mobile from '../images/safety/safety_9_mobile.png'

export default class Safety extends Component {
  render() {
    return(
      <div className="safety">
        <PageJumbotron title="Safety & Quality" image={jumbotronImage} anchors={["Quality Policy Statement", "Quality Objective", "Safety Policy Statement", "Specific Targets"]}/>
        <Article maxWidth="900px">
          <h1 className="section-title">Working in CT Engineering</h1>
          <p className="section-article">
            CT Engineering has a safety unit in its organization structure.
            The safety unit reports to the Managing Director.
            The safety unit is headed by a safety manager and he/she is responsible to advise and implement all matters related to safety and health.
          </p>
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
          <Article maxWidth="900px">
            <h1 className="section-title">Quality Policy Statement</h1>
            <p className="section-article bold">
              In execution of all project, it is the policy of C.T. Engineering & Construction Sd. Bhd. to Comply with:
            </p>
            <p className="section-article">
              <ul class="ul-center">
                <li>The current legislation.</li>
                <li>The contractual requirement of our Clients.</li>
                <li>The quality requirements of our Clients.</li>
              </ul>
            </p>
            <p className="section-article bold">
              Our Quality Management System will be continually improved to ensure our total Commitment to our Client.
            </p>
          </Article>
        </ScrollableAnchor>
        <ScrollableAnchor id={'quality-objective'}>
          <Article maxWidth="900px">
            <h1 className="section-title">Quality Objective</h1>
            <p className="section-article bold">
              In order to achieve our Quality Policy, CT ensures the following Quality Objectives are met:
            </p>
            <p className="section-article">
              <ul>
                <li>To meet with Clients requirements of Quality, effectiveness and timely execution of projects by adhering to professional standard working procedures.</li>
                <li>To have zero repeated nonconformance to quality and safety.</li>
                <li>To have zero repeated complaint from customer, authority and third party during execution of project.</li>
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
          <Article maxWidth="900px">
            <h1 className="section-title">Safety Policy Statement</h1>
            <p className="section-article bold">
              The company has its own Safety Manual as a reference for the management, project managers and line managers in maintaining a good safety culture.
            </p>
            <p className="section-article">
              <ul>
                <li>Factory and Machinery Act 1967</li>
                <li>Occupational Safety and Health Act 1994</li>
                <li>Building Operation and Work of Engineering Construction Regulations 1996</li>
                <li>Client’s Safety and Health Manual</li>

              </ul>
            </p>
            <p className="section-article bold">The company safety manual consists the following contents:</p>
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
            <p className="section-article bold">The safety unit will develop the Project Safety Manual for each individual project pertaining to the scope of works and individual client’s requirements.</p>
          </Article>
        </ScrollableAnchor>
        <MediaQuery query="(max-width: 700px)">
        <HeroPyjamas image={Image5Mobile}>
          <Padding size="0px">
            <div className="grids objective">
              <div className="grid-10">
                <Article maxWidth="900px">
                <h1 className="section-title white-text">Objective</h1>
                <p className="section-article bold white-text">
                  C.T Engineering & Construction Sdn Bhd. Will conduct its operations to meet its objectives:
                </p>
                <p className="section-article white-text">
                  <ul>
                    <li>To ensure workplace safety and encourage good Occupational Safety and Health to Employees and others who may be affected alike.</li>
                    <li>To increase employee's Moral, Safe Working ethics and good discipline to achieve Free accident status in the business operations.</li>
                    <li>To establish better relations between Management/Employees.</li>
                    <li>To lower operating insurance costs by safe operating performance.</li>
                    <li>To maintain local and International Standards in Occupational Safety and Health.</li>
                    <li>Prevent 'Loss Time' on Man-hours and Production.</li>
                  </ul>
                </p>
                </Article>
              </div>
            </div>
          </Padding>
        </HeroPyjamas>

        </MediaQuery>
        <MediaQuery query="(min-width: 701px)">
        <HeroPyjamas image={Image5}>
          <Padding size="80px">
            <div className="grids objective">
              <div className="grid-10">
                <Article maxWidth="900px">
                <h1 className="section-title white-text">Objective</h1>
                <p className="section-article bold white-text">
                  C.T Engineering & Construction Sdn Bhd. Will conduct its operations to meet its objectives:
                </p>
                <p className="section-article white-text">
                  <ul>
                    <li>To ensure workplace safety and encourage good Occupational Safety and Health to Employees and others who may be affected alike.</li>
                    <li>To increase employee's Moral, Safe Working ethics and good discipline to achieve Free accident status in the business operations.</li>
                    <li>To establish better relations between Management/Employees.</li>
                    <li>To lower operating insurance costs by safe operating performance.</li>
                    <li>To maintain local and International Standards in Occupational Safety and Health.</li>
                    <li>Prevent 'Loss Time' on Man-hours and Production.</li>
                  </ul>
                </p>
                </Article>
              </div>
            </div>
          </Padding>
        </HeroPyjamas>
        </MediaQuery>


        <ScrollableAnchor id={'specific-targets'}>
          <Article maxWidth="900px">
            <h1 className="section-title">Specific Targets</h1>
            <p className="section-article bold">In conducting C.T Engineering & Construction Sdn Bhd. Business operations and activities, its employees and others involved will strive to:</p>
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
                <Padding size="40px 30px 0px 30px">
                  <h1 className="big-text dark-text">Our Engineer are always make sure the ground are saved. From the top, the picture are even clearer.</h1>
                </Padding>
              </HeroPyjamas>
            </div>
            <div className="grid">
              <HeroPyjamas image={Image7}>
                <Padding size="40px 30px 0px 30px">
                  <h1 className="big-text white-text">Employers have duties concerning the provision and use of personal protective equipment (PPE) at work.</h1>
                </Padding>
              </HeroPyjamas>
            </div>
            <div className="grid">
              <HeroPyjamas image={Image8}>
                <Padding size="40px 30px 0px 30px">
                  <h1 className="big-text dark-text">Construction Supervisors are responsible for supervising the contractors and staff while maintaining a safe work environment.</h1>
                </Padding>
              </HeroPyjamas>
            </div>
          </div>
        </section>

              <MediaQuery query="(max-width: 700px)">
              <HeroPyjamas image={Image9Mobile}>
              <Padding size="15px">
                  <div className="grids operating-culture center">

                <div className="grid-10">
                  <h1>Safe Working Environment
                  <br/>
                  & Operating Culture</h1>
                  <Margin size="40px" />
                  <p>
                  <strong>C.T Engineering & Construction Sdn Bhd. </strong>
                  primary goal is to manage by developing a "SAFE WORKING ENVIROMENT AND OPERATING CULTURE" in the business operations and activities leading to an accident – free workplace and Maintain at all times good healthy practices for employees. Ensure co-operation with building management to develop and execute contingency plans to deal with possible emergency and adverse impact to employees.</p>
                </div>
                </div>
                </Padding></HeroPyjamas>

              </MediaQuery>
              <MediaQuery query="(min-width: 701px)">
              <HeroPyjamas image={Image9}>
              <Padding size="80px">
                  <div className="grids operating-culture center">
                <div className="grid-7">
                  <h1>Safe Working Environment
                  <br/>
                  & Operating Culture</h1>
                  <Margin size="40px" />
                  <p>
                  <strong>C.T Engineering & Construction Sdn Bhd. </strong>
                  primary goal is to manage by developing a "SAFE WORKING ENVIROMENT AND OPERATING CULTURE" in the business operations and activities leading to an accident – free workplace and Maintain at all times good healthy practices for employees. Ensure co-operation with building management to develop and execute contingency plans to deal with possible emergency and adverse impact to employees.</p>
                </div>
                <div className="grid-3">
                </div>
                </div>
                </Padding></HeroPyjamas>

              </MediaQuery>
        <Footer />
      </div>
    )
  }
}
