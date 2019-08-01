import React from 'react';
import PropTypes from 'prop-types';
import '../css/LocationDetails.css';
import Navbar from './Navbar';
import Header from '../assets/img/details.png';
import Pin from '../assets/img/map-pin.png';
import Nemesis from '../assets/img/nemesis-logo.png';
import IG from '../assets/img/IG.svg';

function LocationDetails(props) {
  return (
    
    <div className="details-container">
      <Navbar />
      <div className="explore-photo">
        <img src={Header} />
      </div>
      <div className="details-text-container">
        <div className="details-text">
          <h3><span className="open-mat">Open mat:</span> Sunday <span className="divider">| </span>10 AM to 11 AM</h3>
          <div className="address-detail">
            {/* <span><img src={Pin} /></span> */}
            <h4>635 NW 16th Ave, Portland, OR 97209</h4>
          </div>
          <div className="social-container">
            <a href="http://www.nemesisbjj.com/"><img src={Nemesis} /></a>
            <a href="https://www.instagram.com/nemesisbjj/?hl=en"><img src={IG} style={{ width: '40px', height: 'auto' }}/></a>
          </div>
        </div>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7459.307982436473!2d-122.68815686978517!3d45.525492735342596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a1d719ca4c1%3A0xef64592e858432b2!2sNemesis+Jiu+Jitsu!5e0!3m2!1sen!2sus!4v1564671859965!5m2!1sen!2sus" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

LocationDetails.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  hours: PropTypes.string,
  day: PropTypes.string,
  website: PropTypes.string,
  IG: PropTypes.string,
};

export default LocationDetails;