import React from 'react';
import PropTypes from 'prop-types';
import '../css/LocationDetails.css';
import Navbar from './Navbar';
import Header from '../assets/img/details.png';

function LocationDetails(props) {
  return (
    
    <div className="location-container">
      <Navbar />
      <div className="explore-photo">
        <img src={Header} />
      </div>
      <div className="location-details-container">
        <div className="location-details-text">
          <h3>Nemesis Jiu Jitsu</h3>
          <h4>635 NW 16th Ave, Portland, OR 97209</h4>
          <p><span className="open-mat">Open Mat:</span> Sunday <span className="divider">| </span>10 AM to 11 AM</p>
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