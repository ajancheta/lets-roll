import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import Splash from './components/Splash';
import About from './components/About';
import LocationList from './components/LocationList';
import LocationDetails from './components/LocationDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          name: 'Nemesis Jiu Jitsu',
          address: '635 NW 16th Ave, Portland, OR 97209',
          day: 'Sunday',
          hours: '10 AM to 11 AM',
          website: 'http://www.nemesisbjj.com/',
          IG: '@nemesisbjj'
        },
        {
          name: 'PDX BJJ',
          address: '2335 NW 23rd Pl, Portland, OR 97210',
          day: 'Friday',
          hours: '7:30 PM to 8:30 PM',
          website: 'http://www.pdxbjj.com/',
          IG: '@pdxbjj'
        },
        {
          name: 'Eastside Grappling',
          address: '210 SE Madison St, Portland, OR 97214',
          day: 'Sunday',
          hours: '10 AM to 11 AM',
          website: 'www.eastsidegrappling.com/',
          IG: '@eastsidegrappling'
        },
        {
          name: '10th Planet Portland',
          address: '1735 SE Grand Ave, Portland, OR 97214',
          day: 'Friday',
          hours: '6 PM to 8 PM',
          website: 'www.10thplanetportland.com/',
          IG: '@10thplanetportland'
        },
        {
          name: 'Alive MMA',
          address: '5607 SE Woodstock Blvd, Portland, OR 97206',
          day: 'Sunday',
          hours: '11 AM to 1 PM',
          website: 'www.alivemma.dreamhosters.com/',
          IG: 'n/a'
        },
        {
          name: 'Enso Jiu Jitsu',
          address: '517 Main Street, Unit B, Oregon City, OR 97045',
          day: 'Sunday',
          hours: '7 PM to 8 PM',
          website: 'https://www.ensojj.com/',
          IG: '@ensojiujitsu'
        },
        {
          name: 'Portland Thai Boxing & Martial Arts',
          address: '600 NE Couch St, Portland, OR 97232',
          day: 'Tuesday',
          hours: '6:30 PM to 7:30 PM',
          website: 'https://www.pdxmuaythai.com/',
          IG: '@pdxmuaythai'
        },
        {
          name: 'Mata Leo Combat Sports',
          address: '1115 SE Stephens St, Portland, OR 97214',
          day: 'Sunday',
          hours: '12 PM to 2 PM',
          website: 'http://www.mataleaocs.com/',
          IG: 'n/a'
        },
        {
          name: 'Caio Terra Academy Hillsboro',
          address: '2020 NW Aloclek Dr #105, Hillsboro, OR 97124',
          day: 'Sunday',
          hours: '1 PM to 2 PM',
          website: 'https://oregonbjj.com/',
          IG: '@caioterrabjj'
        },
        {
          name: 'Unicorn Jiu Jitsu',
          address: '8502 SE Stark Street, Portland, OR 97216',
          day: 'Saturday',
          hours: '12:30 PM to 2 PM',
          website: 'https://www.unicornjiujitsu.com/',
          IG: '@unicornjiujitsupdx'
        },
        {
          name: 'Anibal Lobo Jiu-Jitsu Academy',
          address: '839 East Powell Boulevard, Gresham, OR 97030',
          day: 'Sunday',
          hours: '12 PM to 1 PM',
          website: 'https://lobojiujitsu.com/',
          IG: '@lobo_bjj'
        },
        {
          name: 'Emerge BJJ',
          address: '12209 NE Fourth Plain Blvd, Vancouver, WA 98682',
          day: 'Sunday',
          hours: '5 PM to 7 PM',
          website: 'https://emergebjj.com/',
          IG: '@emergejiujitsu'
        },
        {
          name: 'The Base Vancouver',
          address: '4707 NE Minnehaha St, Vancouver, WA 98661',
          day: '',
          hours: '',
          website: 'https://www.thebasevancouver.com/',
          IG: '@thebasevancouver'
        }     
      ]
    }
  };
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/about' component={About} />
            <Route 
              path='/locations' 
              render={() => <LocationList locationList={this.state.locations} />}
            />
            <Route 
              path='/location-details' 
              component={LocationDetails} />
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
