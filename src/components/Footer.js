import React, { Component } from 'react'
import '../styles/footer.scss';

// logo
import CIDB from '../images/logo/CIDB.png';
import DAS from '../images/logo/DAS.png';
import FinanceMalaysia from '../images/logo/Finance_Malaysia.png';


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <center>
          <p className="title">We are certificated by</p>
          <div className="certifications">
            <div className="cert">
              <img src={CIDB} alt=""/>
              <p>ISO 9001 : 2015</p>
            </div>
            <div className="cert">
              <img src={DAS} alt=""/>
              <p>Grade: G7</p>
              <p>Category: B, CE, ME</p>
              <p>Specialized: M15</p>
            </div>
            <div className="cert">
              <img src={FinanceMalaysia} alt=""/>
              <p>REGISTRATION REFERENCE NO :
              357 - 02153059</p>
            </div>
          </div>
        </center>
      </div>
    )
  }
}
