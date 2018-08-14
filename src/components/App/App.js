import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="Page-title">
          Mode Live
          <br/>
          <br/>
          <br/>
        </p>
        
        <h2 className="Exercice-section">Rythme</h2>
        <h1 className="Exercice-name">7 temps - Équivalences</h1>

        <div className="ProgressBarContainer">
          <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/play-button-social-media-logo-38378301177154e7-512x512.png" width="40" height="40" className="playPauseIcon"/>
          <ProgressBar percent="10" strokeWidth="4" strokeColor="#D3D3D3" flexGrow="1"></ProgressBar>
        </div>

        <p>
          10 min
        </p>

        {/* <Button></Button> */}
      </div>
    );
  }
}

export default App;
