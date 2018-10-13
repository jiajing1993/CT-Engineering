// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import ImageCaption from '../components/ImageCaption'
import Article from '../components/Article'
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/project.scss'

import Image1 from '../images/gallery/gallery_1.jpg'
import Image2 from '../images/gallery/gallery_2.jpg'
import Image3 from '../images/gallery/gallery_3.jpg'
import Image4 from '../images/gallery/gallery_4.jpg'

import apex from '../images/projects/apex/image1.JPG'
import cSteinJohor from '../images/projects/c-steinweg(johor)/image1.JPG'
import cSteinKlang from '../images/projects/c-steinweg(klang)/image1.JPG'
import honda from '../images/projects/honda/image1.JPG'
import lss from '../images/projects/lss/image1.JPG'
import pantech from '../images/projects/pantech/image1.JPG'
import pantechReality from '../images/projects/pantech-reality/image1.JPG'
import scanteak from '../images/projects/scanteak/image1.JPG'
import unigra from '../images/projects/unigra/image1.JPG'
import xinhwa from '../images/projects/xinhwa/image1.JPG'



const projects = [
  {
    id: 1,
    title: "PROPOSED 56 UNIT OF LIGHT INDUSTRY FACTORY",
    client : "VC MERIT SDN BHD",
    completionDate: "JUNE 2018",
    value: "RM 56 MILLION",
    business: "Industrial Park",
    image: `${apex}`
  },{
    id: 2,
    title: "PROPOSED CONSTRUCTION OF ONE (1) UNIT METAL STORAGE WAREHOUSE, TWO (2)UNIT CHEMICAL STORAGE WAREHOUSE (BLOK A & B), TWO (2) UNIT (NON-HAZARDOUS- CLASS B & C) WAREHOUSE AND TWO (2) UNIT TWO (2) STOREY OFFICE BUILDING, CANTEEN AND OTHER ANCILLARY BUILDING",
    client: "C.STEINWEG LOGISTICS (MALAYSIA) SDN BHD",
    completionDate: "DECEMBER 2018",
    value: "RM 40 MILLION",
    business: "TRANSPORTATION & LOGISTIC SERVICES",
    image: `${cSteinKlang}`
  },{
    id: 3,
    title: "PROPOSED CONSTRUCTION OF ONE (1) SHOW ROOM, SERVICE CENTRE AND VEHICLE/CAR STORAGE",
    client: "KAH MOTOR CO. SDN. BHD",
    completionDate: "JULY 2016",
    value: "RM 15 MILLION",
    business: "HONDA 4S CENTRE (SALES, SERVICES, SPARE PARTS AND A BODY AND PAINT CENTRE)",
    image: `${honda}`
  },{
    id: 4,
    title: "PROPOSED CONSTRUCTION OF TWO (2) BLOCKS ONE STOREY FACTORY BUILDING, ONE (1) UNIT THREE STOREY OFFICE BUILDING, TANK FARM AND OTHER ANCILLARY BUILDING FOR PHASE 1 AND TWO (2) BLOCKS ONE STOREY FACTORY BUILDING, ONE (1) UNIT FIVE STOREY OFFICE BUILDING FOR PHASE 2",
    client: "PANTECH STAINLESS & ALLOY INDUSTRIES SDN. BHD",
    completionDate: "Mar 2013",
    value: "RM 67 MILLION",
    business: "One-Stop Centre for stainless steel & alloy pipes, fittings, flanges, valves, and other components",
    image: `${pantech}`
  },{
    id: 5,
    title: "PROPOSED CONSTRUCTION OF TWO (2) BLOCKS ONE STOREY CHEMICAL WAREHOUSE, ONE (1) UNIT TWO STOREY OFFICE BUILDING AND OTHER ANCILLARY BUILDING",
    client: "C.STEINWEG LOGISTICS (JOHOR) SDN BHD",
    completionDate: "AUGUST 2018",
    value: "RM 50 MILLION",
    business: "TRANSPORTATION & LOGISTIC SERVICES",
    image: `${cSteinJohor}`
  },{
    id: 6,
    title: "PROPOSED CONSTRUCTION OF ONE (1) UNIT ONE STOREY FACTORY BUILDING COMPOSED OF FOOD PRODUCTION WAREHOUSE, PACKAGING ROOM, FINISHED GOODS STORAGE, LOGISTIC WAREHOUSE, ONE (1) UNIT TWO STOREY OFFICE BUILDING, TWO (2) UNIT UTILITY BUILDING, TWO (2) UNIT PUMP HOUSE, ONE (1) UNIT TNB ELECTRIC BUILDING, PIPING WORKS AND STORAGE TANKS",
    client: "UNIGRA FOOD PROCESSING ASIA PACIFIC SDN BHD",
    completionDate: "DECEMBER 2018",
    value: "RM 55 MILLION",
    business: "FOOD FACTORY ",
    image: `${unigra}`
  },{
    id: 7,
    title: "PROPOSED CONSTRUCTION OF ONE (1) BLOCK ONE STOREY WAREHOUSE BUILDING, ONE (1) UNIT TWO STOREY OFFICE BUILDING AND OTHER ANCILLARY BUILDINGS AT KAWASAN PERINDUSTRIAN PASIR GUDANG ZON 12B, JOHOR DARUL TAKZIM",
    client: "PANTECH REALTY SDN. BHD",
    completionDate: "DECEMBER 2018",
    value: "RM 16.5 MILLION",
    business: "Factory Warehouse for stainless steel & alloy pipes, fittings, flanges, valves, and other components.",
    image: `${pantechReality}`
  },{
    id: 8,
    title: "PROPOSED CONSTRUCTION OF MEDIUM INDUSTRY CONSIST OF 1 UNIT 2 - STOREY FACTORY WITH 3 STOREY OFFICE, 1 UNIT MAIN GUARD HOUSE WITH SHELTER, 1 UNIT SECONDARY GUARD HOUSE, 1 UNIT MAIN SWITCH STATION (SSU), 1 UNIT CONSUMER ROOM AND OTHER ANCILLARY BUILDINGS",
    client: "LEE SOON SENG PLASTIC INDUSTRIES SDN. BHD",
    completionDate: "APRIL 2018",
    value: "RM 33 MILLION",
    business: "Leading vacuum former in South East Asia of clear disposable food packaging container such as clamshell, tray blister, lunch box and etc. (A Market Leader in Thermoforming and plastic sheet extrusion)",
    image: `${lss}`
  },{
    id: 9,
    title: "Proposed One Unit Warehouse, 2 Storey Office Building and Other Ancillary Building ",
    client: "Scanteak (M) Sdn. Bhd",
    completionDate: "Oct 2017",
    value: "RM 10M",
    business: "Home Furniture Manufacturer",
    image: `${scanteak}`
  },{
    id: 10,
    title: "Proposed One Unit Warehouse, 3 Storey Office Building and Other Ancillary Building for Phase 1 & 2",
    client: "Xin Hwa Trading & Transport Sdn. Bhd",
    completionDate: "August 2017",
    value: "RM 29 Million",
    business: "Transportation & Logistic Services",
    image: `${xinhwa}`
  }
]



export default class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      showedProject: projects[0]
    }
  }

  handleClick = (id) => {
    this.setState({
      showedProject: projects[id - 1]
    })
  }

  render() {
    const images = [
      {
        original: `${this.state.showedProject.image}`
      },
      {
        original: `${Image2}`
      },
      {
        original: `${Image3}`
      },
      {
        original: `${Image4}`
      }
    ]
    return(
      <div>
        <div className="current-company">
          <ImageGallery items={images}
            showThumbnails={false}
            showBullets={true}
            showPlayButton={false}
            showFullscreenButton={false} />
          <div className="company-description">
            <p className="name">{this.state.showedProject.client}</p>
            <div className="info line-clamp">
              <span>Scope of Work</span>
              { this.state.showedProject.title }
            </div>
            <p className="info">
              <span>Value</span>
              {this.state.showedProject.value}
            </p>

            <p className="info">
              <span>Business</span>
              {this.state.showedProject.business}
            </p>
            <p className="info">
              <span>Date of Completion</span>
              {this.state.showedProject.completionDate}
            </p>
          </div>
        </div>
        <div className="projects">
          {
            projects.map((project) => { return (
              <div className="project" onClick={() => this.handleClick(project.id)}>
                <ImageCaption
                  image={project.image}
                  title={project.client}
                  description={project.value}
                />
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}
