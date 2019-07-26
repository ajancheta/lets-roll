import React from 'react';
import Navbar from './Navbar';
import '../css/Splash.css';
import ActionShot from '../assets/img/action-one.png';

function Splash() {
  return (
    <div className="splash-container">
      <Navbar />

      <div className="intro-container">
        <div className="photo-container">
          <img src={ActionShot} />
        </div>

        <div className="text-container">
          <p>open mat (<em> n</em> ) : <br />
          A welcoming place where everyone can  dedicate their time into perfecting their craft</p>
        </div>
      </div>


      
    </div>
  );
}

export default Splash;