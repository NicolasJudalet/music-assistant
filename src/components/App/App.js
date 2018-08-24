import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '../Button/Button';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'
import ProgressBar from '../ProgressBar/ProgressBar';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
        mode: 'menu', // mode can be 'menu' (light background - before the ex starts) or 'focus' (dark background - during the ex)
    }
}
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className='BackgroundDiv'>
          <p className="Page-title">
            Mode Live
            <br/>
            <br/>
            <br/>
          </p>
          
          <h2 className="Exercice-section">Rythme</h2>
          <h1 className="Exercice-name">7 temps - Équivalences</h1>

          <div className="ProgressBarContainer">
            <PlayPauseButton className='playPauseIcon'/>
            <ProgressBar percent="10" strokeWidth="4" strokeColor="#D3D3D3" flexGrow="1"></ProgressBar>
          </div>

          <p>
            10 min
          </p>
          
        </div> 
      </div>
    );
  }
}

export default App;
