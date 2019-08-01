import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import Splash from './components/Splash';
import About from './components/About';
import DisplayLocations from './components/DisplayLocations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route path='/about' component={About} />
          <Route path='/display-locations' component={DisplayLocations} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
