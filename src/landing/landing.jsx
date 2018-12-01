import React from 'react';
import logo from '../brain.svg';
//import brain from '../brain.svg';
import './landing.css'
import video from '../video/background.mp4';

class Landing extends React.Component {
  static propTypes = {

  }

  render = () => (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> */}
          <p className="title">
            LEDA
          </p>
          <div>
            <a href="/Profile">Ingresar</a> | <a href="/Profile">Registrarse</a>
          </div>
        </header>
      </div>


    </div>
  )
}

export default Landing;
