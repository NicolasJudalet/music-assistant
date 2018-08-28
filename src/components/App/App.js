import React, { Component } from 'react';
import './App.css';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'
import ProgressBar from '../ProgressBar/ProgressBar';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      timerRunning: false,
    }
    this.toggleTimer = this.toggleTimer.bind(this)
  }
  
  toggleTimer(e) {
    e.preventDefault()
    this.setState({
      timerRunning: !this.state.timerRunning
    })
  }

  render() {
    return (
      <div className="App">
        <div className='BackgroundDiv'>
          <p className="Page-title">
            Mode Live
            {this.state.timerRunning ? "running" : "not running"}
            <br/>
            <br/>
            <br/>
          </p>
          
          <h2 className="Exercice-section">Rythme</h2>
          <h1 className="Exercice-name">7 temps - Équivalences</h1>

          <div className="ProgressBarContainer">
            <PlayPauseButton 
              className='playPauseIcon'
              timerRunning={this.state.timerRunning}
              toggleTimerHandler={this.toggleTimer}
            />
            <ProgressBar 
              percent="10" 
              strokeWidth="4" 
              strokeColor="#D3D3D3" 
              flexGrow="1"
              timerRunning={this.state.timerRunning}
            />
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
