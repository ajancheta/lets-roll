import React from 'react';
import PropTypes from 'prop-types';
import '../css/Location.css';
import { Link } from 'react-router-dom';
import Arrow from '../assets/img/arrow.png';

function Location(props) {
  return (
    
    <div className="location-container">
      <div className="current-locations-text-container">
        <div className="location-details-container">
        <Link to="/location-details" style={{textDecoration: 'none'}}>
          <div className="location-details">
            <h3>{props.name}</h3>
            <h4>{props.address}</h4>
            <p><span className="open-mat">Open Mat:</span> {props.day} <span className="divider">| </span>{props.hours}</p>
          </div>
        </Link>
       
        </div>
        <div className="arrow-bar">
          <img src={Arrow} />
        </div>
      </div>
    </div>
  );
}

Location.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  hours: PropTypes.string,
  day: PropTypes.string,
  website: PropTypes.string,
  IG: PropTypes.string,
};

export default Location;