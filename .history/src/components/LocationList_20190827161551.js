import React from "react";
import PropTypes from "prop-types";
import "../css/LocationList.css";
import Navbar from "./Navbar";
import Location from "./Location";
import BJJPhoto from "../assets/img/explore.png";

function LocationList(props) {
  return (
    <div className="location-list-container">
      <Navbar />
      <div className="explore-photo">
        <img src={BJJPhoto} />
      </div>

      <div className="locations-text-container">
        {props.locationList.map(location => (
          <Location
            name={location.name}
            address={location.address}
            day={location.day}
            hours={location.hours}
            website={location.website}
            IG={location.IG}
            key={location.id}
          />
        ))}
      </div>
    </div>
  );
}

LocationList.propTypes = {
  locationList: PropTypes.array
};

export default LocationList;
