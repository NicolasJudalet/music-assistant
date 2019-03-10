import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import StyledLiveMode from './LiveMode.style';
import SessionExerciseStepper from '../SessionExerciseStepper/SessionExerciseStepper';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import scoreSheet1 from '../ExerciseCard/pensativa_score_sheet_section_1.png';
import scoreSheet2 from '../ExerciseCard/pensativa_score_sheet_section_2.png';

class LiveMode extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timerRunning: false,
      exerciseRunning: false,
      activeStep: 0,
      steps: [
        {
          exerciseType: 'Rythme',
          exerciseName: '7 temps équivalences',
          completed: false,
          timeElapsed: 0,
          totalTime: 3,
          description: 'Répéter l\'équivalence rythmique ci-dessus',
          image: scoreSheet1,
        },
        {
          exerciseType: 'Mélodie',
          exerciseName: 'Mains unisson',
          completed: false,
          timeElapsed: 0,
          totalTime: 900,
          description: 'Jouer le solo de Kurt Rosenwinkel m.g. et m.d. à l\'unisson',
          image: scoreSheet2,
        },
        {
          exerciseType: 'Voicings',
          exerciseName: 'Pensativa section 1',
          completed: false,
          timeElapsed: 0,
          totalTime: 1200,
          description: 'Trouver une nouvelle série de voicings m.g. sur le A de Pensativa',
          image: scoreSheet2,
        },
      ],
    };
  }

  toggleTimer = (e) => {
    e.preventDefault();
    this.setState((previousState) => ({ timerRunning: !previousState.timerRunning }));
    if (this.state.timerRunning ||
      this.state.steps[this.state.activeStep].totalTime === this.state.steps[this.state.activeStep].timeElapsed) {
      this.stopTimer();
    }
    else {
      this.startTimer();
    }
  }

  startTimer() {
    this.state.exerciseRunning = true;
    this.timer = setInterval(() => {
      if (this.state.steps[this.state.activeStep].totalTime !== this.state.steps[this.state.activeStep].timeElapsed) {
        this.setState((prevState) => ({
          steps: [
            ...prevState.steps.slice(0, prevState.activeStep),
            {
              ...prevState.steps[prevState.activeStep],
              timeElapsed: prevState.steps[prevState.activeStep].timeElapsed + 1,
            },
            ...prevState.steps.slice(prevState.activeStep + 1)
          ]
        }));
      } else {
        this.timerFinished();
      }
    }, 1000);
  }

  timerFinished() {
    this.stopTimer();
    this.setState((prevState) => ({
      timerRunning: false,
      exerciseRunning: false,
      steps: [
        ...prevState.steps.slice(0, prevState.activeStep),
        {
          ...prevState.steps[prevState.activeStep],
          completed: true,
        },
        ...prevState.steps.slice(prevState.activeStep + 1)
      ],
    }));
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  handleNextStep = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <StyledLiveMode
        exerciseRunning={this.state.exerciseRunning}
      >
        <p className='modeName'>Mode Live</p>
        <h2>{this.state.steps[this.state.activeStep].exerciseType}</h2>
        <h1>{this.state.steps[this.state.activeStep].exerciseName}</h1>

        <div className='container'>
          <PlayPauseButton
            timerRunning={this.state.timerRunning}
            exerciseRunning={this.state.exerciseRunning}
            toggleTimerHandler={this.toggleTimer}
          />
          <div className='grow-container'>
            <LinearProgress
              variant="determinate"
              value={Math.round(this.state.steps[this.state.activeStep].timeElapsed / this.state.steps[this.state.activeStep].totalTime * 100)}
            />
          </div>
        </div>

        <p>
          {this.state.steps[this.state.activeStep].totalTime / 60} min
        </p>

        <div className='container'>
          <ExerciseCard
            classes={{ card: "card", media: "media" }}
            description={this.state.steps[this.state.activeStep].description}
            image={this.state.steps[this.state.activeStep].image}
          />
        </div>

        <div className='container'>
          <SessionExerciseStepper
            activeStep={this.state.activeStep}
            display={!this.state.exerciseRunning}
            steps={this.state.steps}
            handleStep={this.handleStep}
          />
        </div>

        <div id='buttonContainer'>
          <Button
            variant="contained"
            component={Link}
            to="/studio"
          >
            Retour en Studio
          </Button>
          {this.state.activeStep === this.state.steps.length - 1 ?
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to='/studio'
            >
              Terminer la Session
            </Button> :
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNextStep}
            >
              Exercice Suivant
            </Button>
          }
        </div>
      </StyledLiveMode>
    );
  }
}

export default LiveMode;
