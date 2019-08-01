import React, { Component } from 'react';
import firebase from 'firebase';

class DisplayLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      address: [],
      day: [],
      hours: [],
      website: [],
      IG: []
    };
  };

  componentDidMount() {
    const locationRef = firebase.database().ref('locations');
    locationRef.on('value', (snapshot) => {
      let locations = snapshot.val();
      let newState = [];
      for (let location in locations) {
        newState.push({
          id: location,
          name: locations[location].name,
          address: locations[location].address,
          day: locations[location].day,
          hours: locations[location].hours,
          website: locations[location].website,
          IG: locations[location].IG
        });
      }
      this.setState({
        locations: newState
      });
    });
  }

  render() {
    return (
      <div>
        <h4>Locations Near:</h4>
        <div>
          {this.state.locations.map((location) => {
            return (
              <p>{location.name}
              {location.address}
              {location.day}
              {location.hours}
              {location.website}
              {location.IG}</p>
            )
          })}
        </div>
      </div>
    )
  }
};

export default DisplayLocations;