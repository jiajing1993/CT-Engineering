// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import ImageCaption from '../components/ImageCaption'
import ScrollableAnchor from 'react-scrollable-anchor'
import Article from '../components/Article'
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/project.scss'

import apex1 from '../images/projects/apex/image1.JPG'
import apex2 from '../images/projects/apex/image2.JPG'
import apex3 from '../images/projects/apex/image3.JPG'
import apex4 from '../images/projects/apex/image4.JPG'

import cSteinJohor1 from '../images/projects/c-steinweg(johor)/image1.JPG'
import cSteinJohor2 from '../images/projects/c-steinweg(johor)/image2.JPG'
import cSteinJohor3 from '../images/projects/c-steinweg(johor)/image3.JPG'

import cSteinKlang1 from '../images/projects/c-steinweg(klang)/image1.JPG'
import cSteinKlang2 from '../images/projects/c-steinweg(klang)/image2.JPG'
import cSteinKlang3 from '../images/projects/c-steinweg(klang)/image3.JPG'

import honda1 from '../images/projects/honda/image1.JPG'
import honda2 from '../images/projects/honda/image2.JPG'
import honda3 from '../images/projects/honda/image3.JPG'

import lss1 from '../images/projects/lss/image1.JPG'
import lss2 from '../images/projects/lss/image2.JPG'
import lss3 from '../images/projects/lss/image3.JPG'
import lss4 from '../images/projects/lss/image4.JPG'

import pantech1 from '../images/projects/pantech/image1.JPG'
import pantech2 from '../images/projects/pantech/image2.JPG'
import pantech3 from '../images/projects/pantech/image3.JPG'
import pantech4 from '../images/projects/pantech/image4.JPG'

import pantechReality1 from '../images/projects/pantech-reality/image1.JPG'
import pantechReality2 from '../images/projects/pantech-reality/image2.JPG'
import pantechReality3 from '../images/projects/pantech-reality/image3.JPG'
import pantechReality4 from '../images/projects/pantech-reality/image4.JPG'

import scanteak1 from '../images/projects/scanteak/image1.JPG'
import scanteak2 from '../images/projects/scanteak/image2.JPG'
import scanteak3 from '../images/projects/scanteak/image3.JPG'
import scanteak4 from '../images/projects/scanteak/image4.JPG'

import unigra1 from '../images/projects/unigra/image1.JPG'
import unigra2 from '../images/projects/unigra/image2.JPG'
import unigra3 from '../images/projects/unigra/image3.JPG'
import unigra4 from '../images/projects/unigra/image4.JPG'
import unigra5 from '../images/projects/unigra/image5.JPG'

import xinhwa1 from '../images/projects/xinhwa/image1.JPG'
import xinhwa2 from '../images/projects/xinhwa/image2.JPG'
import xinhwa3 from '../images/projects/xinhwa/image3.JPG'
import xinhwa4 from '../images/projects/xinhwa/image4.JPG'



const projects = [
  {
    id: 1,
    status: "completed",
    title: "56 Units of Light Industry Factory",
    client : "VC Merit Sdn. Bhd",
    completionDate: "June 2018",
    value: "RM 56 Million",
    business: "Industrial Park",
    image: [
      {
        original: `${apex1}`
      },
      {
        original: `${apex2}`
      },
      {
        original: `${apex3}`
      },
      {
        original: `${apex4}`
      }
    ]
  },{
    id: 2,
    status: "onGoing",
    title: "1 unit of metal storage warehouse, 2 units of chemical storage warehouse, 2 units of non-hazardous warehouse and 2 units double storey office building, canteen, and other ancillary building",
    client: "C.Steinweg Logistics (Malaysia) Sdn. Bhd",
    completionDate: "December 2018",
    value: "RM 40 Million",
    business: "Transportation & Logistic Services",
    image: [
      {
        original: `${cSteinKlang1}`
      },
      {
        original: `${cSteinKlang2}`
      },
      {
        original: `${cSteinKlang3}`
      }
    ]
  },{
    id: 3,
    status: "completed",
    title: "1 showroom, service centre and vehicle/car storage",
    client: "Kah Motor Co. Sdn. Bhd",
    completionDate: "July 2016",
    value: "RM 15 Million",
    business: "Honda 4S Center (Sales, Services, Spare Parts & Body, and Paint Cantre)",
    image: [
      {
        original: `${honda1}`
      },
      {
        original: `${honda2}`
      },
      {
        original: `${honda3}`
      }
    ]
  },{
    id: 4,
    status: "completed",
    title: "2 blocks single storey factory building, 1 unit triple storey office building, tank farm and other ancillary building. 2 blocks single sorey factory building, 1 unit of five storey office building",
    client: "Pantech Stainless & Alloy Industries Sdn. Bhd",
    completionDate: "Mar 2013",
    value: "RM 67 Million",
    business: "One-Stop Centre for stainless steel & alloy pipes, fittings, flanges, valves, and other components",
    image: [
      {
        original: `${pantech1}`
      },
      {
        original: `${pantech2}`
      },
      {
        original: `${pantech3}`
      },
      {
        original: `${pantech4}`
      }
    ]
  },{
    id: 5,
    status: "completed",
    title: "2 blocks single storey chemical warehouse, 1 unit of double storey building and other ancillary building",
    client: "C.Steinweg Logistics (Johor) Sdn. Bhd",
    completionDate: "August 2018",
    value: "RM 50 Million",
    business: "TRANSPORTATION & LOGISTIC SERVICES",
    image: [
      {
        original: `${cSteinJohor1}`
      },
      {
        original: `${cSteinJohor2}`
      },
      {
        original: `${cSteinJohor3}`
      }
    ]
  },{
    id: 6,
    status: "onGoing",
    title: "1 unit of single storey factory building composed of food production warehouse, packaging room, finsihed goods storage, logistic warehouse, 1 unit of double storey office building, 2 units utility building, 2 units of pump house, 1 units of TNB electric building, piping works and storage tanks",
    client: "Unigra Food Processing Asia Pacific Sdn. Bhd",
    completionDate: "December 2018",
    value: "RM 55 Million",
    business: "FOOD FACTORY ",
    image: [
      {
        original: `${unigra1}`
      },
      {
        original: `${unigra2}`
      },
      {
        original: `${unigra3}`
      },
      {
        original: `${unigra4}`
      },
      {
        original: `${unigra5}`
      }
    ]
  },{
    id: 7,
    status: "onGoing",
    title: "Single storey warehouse building, Double storey office building and other ancillary buildings",
    client: "Pantech Reality Sdn. Bhd",
    completionDate: "December 2018",
    value: "RM 16.5 Million",
    business: "Factory Warehouse for stainless steel & alloy pipes, fittings, flanges, valves, and other components.",
    image: [
      {
        original: `${pantechReality1}`
      },
      {
        original: `${pantechReality2}`
      },
      {
        original: `${pantechReality3}`
      },
      {
        original: `${pantechReality4}`
      }
    ]
  },{
    id: 8,
    status: "completed",
    title: "Medium Industry, consists of double storey factory, triple storey office, guard house with shelter, secondary guard house, main switch station(SSU), consumer room and other ancillary buildings",
    client: "Lee Soon Seng Plastic Industries Sdn. Bhd",
    completionDate: "April 2018",
    value: "RM 33 Million",
    business: "Leading vacuum former in South East Asia of clear disposable food packaging container such as clamshell, tray blister, lunch box and etc.",
    image: [
      {
        original: `${lss1}`
      },
      {
        original: `${lss2}`
      },
      {
        original: `${lss3}`
      },
      {
        original: `${lss4}`
      }
    ]
  },{
    id: 9,
    status: "completed",
    title: "Warehouse, double storey office building and other ancillary building",
    client: "Scanteak (M) Sdn. Bhd",
    completionDate: "Oct 2017",
    value: "RM 10 Million",
    business: "Home Furniture Manufacturer",
    image: [
      {
        original: `${scanteak1}`
      },
      {
        original: `${scanteak2}`
      },
      {
        original: `${scanteak3}`
      },
      {
        original: `${scanteak4}`
      }
    ]
  },{
    id: 10,
    status: "completed",
    title: "Warehouse, Triple office building and other ancillary buildings",
    client: "Xin Hwa Trading & Transport Sdn. Bhd",
    completionDate: "August 2017",
    value: "RM 29 Million",
    business: "Transportation & Logistic Services",
    image: [
      {
        original: `${xinhwa1}`
      },
      {
        original: `${xinhwa2}`
      },
      {
        original: `${xinhwa3}`
      },
      {
        original: `${xinhwa4}`
      }
    ]
  }
]



export default class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      showedProject: projects[0],
      filterProjects: projects,
    }
  }

  handleClick = (id) => {
    this.setState({
      showedProject: projects[id - 1]
    })
    console.log(this.state.showedProject)
  }

  handleFilter = (status) => {
    if (status === "all"){
      this.setState({
        filterProjects: projects
      })
    }else {
      this.setState({
        filterProjects: projects.filter(project => project.status === status )
      })
    }
  }

  render() {
    return(
      <div>
        <div className="current-company">
          <ScrollableAnchor id={'current-company'}>
            <ImageGallery items={this.state.showedProject.image}
              showThumbnails={false}
              showBullets={true}
              showPlayButton={false}
              showFullscreenButton={false} />
          </ScrollableAnchor>
          <div className="company-description">
            <p className="name">{this.state.showedProject.client}</p>
            <div className="info">
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
        <div className="filter-button">
          <button onClick={() => this.handleFilter("all")}>All</button>
          <button onClick={() => this.handleFilter("completed")}>Completed</button>
          <button onClick={() => this.handleFilter("onGoing")}>OnGoing</button>
        </div>

        <div className="projects">
          {
            this.state.filterProjects.map((project) => { return (

              <div key={project.id} className="project" onClick={() => this.handleClick(project.id)}>
                <a href="#current-company">
                  <ImageCaption
                    image={project.image[0].original}
                    title={project.client}
                    description={""}
                  />
                </a>
              </div>

            )})
          }
        </div>
        <Footer />
      </div>
    )
  }
}
