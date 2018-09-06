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
      totalTime: 3,
      timerFinished: false,
    };
  }
  
  toggleTimer = (e) => {
    e.preventDefault();
    this.setState((previousState) => ({ timerRunning: !previousState.timerRunning }));
    if (this.state.timerRunning || this.state.totalTime === this.state.timeElapsed) {
      this.stopTimer();
    }
    else {
      this.startTimer();
    } 
  }

  startTimer(){
    this.timer = setInterval(() => {
      if (this.state.totalTime !== this.state.timeElapsed){
        this.setState((prevState) => ({
          timeElapsed: prevState.timeElapsed + 1,
        }));
      } else {
        this.stopTimer();
        this.setState({
          timerRunning: false,
          timerFinished: true,
        });
      }
    }, 1000);
  }
    
  stopTimer(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <div className='BackgroundDiv'>
          <p className="Page-title">
            Mode Live
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
              percentElapsed={this.state.timeElapsed / this.state.totalTime * 100}
            />
          </div>

          <p>
            {this.state.totalTime / 60} min
          </p>
          
        </div> 
      </div>
    );
  }
}

export default App;
