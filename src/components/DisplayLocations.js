import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from './Navbar';

function DisplayLocations() {

  // componentDidMount() {
  //   const locationRef = firebase.database().ref('locations');
  //   locationRef.on('value', (snapshot) => {
  //     let locations = snapshot.val();
  //     let newState = [];
  //     for (let location in locations) {
  //       newState.push({
  //         id: location,
  //         name: locations[location].name,
  //         address: locations[location].address,
  //         day: locations[location].day,
  //         hours: locations[location].hours,
  //         website: locations[location].website,
  //         IG: locations[location].IG
  //       });
  //     }
  //     this.setState({
  //       locations: newState
  //     });
  //   });
  // }

    return (
      <div>
        <Navbar />
        <h4>Locations Near:</h4>
      </div>
    )
  }

export default DisplayLocations;