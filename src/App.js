import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
