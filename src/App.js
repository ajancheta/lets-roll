import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route path='/about' component={About} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
