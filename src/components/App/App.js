import React, { Component } from 'react';
import './App.css';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'
import ProgressBar from '../ProgressBar/ProgressBar';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      timerRunning: false,
      timeElapsed: 0,
      totalTime: 10,
      percentElapsed: 0,
    };
  }
  
  toggleTimer = (e) => {
    e.preventDefault();
    this.setState((previousState) => ({ timerRunning: !previousState.timerRunning }));
  }

  startTimer(){
    this.timer = setInterval(() => this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1,
    })), 1000);
  }
    
  stopTimer(){
    clearInterval(this.timer);
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.timerRunning) {
      this.startTimer();
    }
    if (!nextState.timerRunning) {
      this.stopTimer();
    } 
  }

  render() {
    return (
      <div className="App">
        <div className='BackgroundDiv'>
          <p className="Page-title">
            Mode Live
            <br/>
            timerRunning : {this.state.timerRunning ? 'Running' : 'Not Running'}
            <br/>
            timeElapsed : {this.state.timeElapsed}
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
              strokeWidth="4" 
              strokeColor="#D3D3D3" 
              flexGrow="1"
              percentElapsed={this.state.percentElapsed}
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
