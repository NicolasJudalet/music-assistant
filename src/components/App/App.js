import React, { Component } from 'react';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'
import ProgressBar from '../ProgressBar/ProgressBar';
import StyledApp from './App.style.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timerRunning: false,
      timeElapsed: 0,
      totalTime: 30,
      exerciseRunning: false,
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
    this.state.exerciseRunning = true;
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
          exerciseRunning: false,
        });
      }
    }, 1000);
  }
    
  stopTimer(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <StyledApp
        exerciseRunning={this.state.exerciseRunning}
      >
        <p className='modeName'>Mode Live</p>
        <h2>Rythme</h2>
        <h1>7 temps - Équivalences</h1>

        <div>
          <PlayPauseButton 
            timerRunning={this.state.timerRunning}
            exerciseRunning={this.state.exerciseRunning}
            toggleTimerHandler={this.toggleTimer}
          />
          <ProgressBar 
            percentElapsed={this.state.timeElapsed / this.state.totalTime * 100}
          />
        </div>

        <p>
          {this.state.totalTime / 60} min
        </p>
      </StyledApp>  
    );
  }
}

export default App;
