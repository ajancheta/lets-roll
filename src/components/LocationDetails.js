import React from 'react';
import PropTypes from 'prop-types';
import '../css/LocationDetails.css';
import Navbar from './Navbar';
import Header from '../assets/img/details.png';
import Pin from '../assets/img/map-pin.png';

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
            <span><img src={Pin} /></span><h4>635 NW 16th Ave, Portland, OR 97209</h4>
          </div>
        </div>

        <div className="map-container">
          
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