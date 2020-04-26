import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import SessionExerciseStepper from '../SessionExerciseStepper/SessionExerciseStepper';
import PageHeader from '../PageHeader/PageHeader';
import ExercisePanel from '../ExercisePanel/ExercisePanel';

import StyledLiveMode from './LiveMode.style';

import scoreSheet1 from '../ExerciseCard/pensativa_score_sheet_section_1.png';

class LiveMode extends Component {
  constructor(props) {
    super(props);

    const exerciseList = this.props.location.state.exerciseList;
    const steps = exerciseList.map((exercise) => {
      return Object.assign(
        {
          completed: false,
          timeElapsed: 0,
          image: scoreSheet1,
        },
        exercise
      );
    });

    this.state = {
      timerRunning: false,
      exerciseRunning: false,
      activeStep: 0,
      steps: steps,
    };
  }

  toggleTimer = (e) => {
    e.preventDefault();
    this.setState((previousState) => ({
      timerRunning: !previousState.timerRunning,
    }));
    if (
      this.state.timerRunning ||
      this.state.steps[this.state.activeStep].totalTime ===
        this.state.steps[this.state.activeStep].timeElapsed
    ) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  };

  startTimer() {
    this.setState({
      exerciseRunning: true,
    });
    this.timer = setInterval(() => {
      if (
        this.state.steps[this.state.activeStep].totalTime !==
        this.state.steps[this.state.activeStep].timeElapsed
      ) {
        this.setState((prevState) => ({
          steps: [
            ...prevState.steps.slice(0, prevState.activeStep),
            {
              ...prevState.steps[prevState.activeStep],
              timeElapsed:
                prevState.steps[prevState.activeStep].timeElapsed + 1,
            },
            ...prevState.steps.slice(prevState.activeStep + 1),
          ],
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
        ...prevState.steps.slice(prevState.activeStep + 1),
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
  };

  handleStep = (step) => () => {
    this.setState({
      activeStep: step,
    });
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <StyledLiveMode exerciseRunning={this.state.exerciseRunning}>
        <PageHeader exerciseRunning={this.state.exerciseRunning} />
        <ExercisePanel
          timerRunning={this.state.timerRunning}
          exerciseRunning={this.state.exerciseRunning}
          toggleTimerHandler={this.toggleTimer}
          activeStepInfo={this.state.steps[this.state.activeStep]}
        />

        <div className="container">
          <SessionExerciseStepper
            activeStep={this.state.activeStep}
            display={!this.state.exerciseRunning}
            steps={this.state.steps}
            handleStep={this.handleStep}
          />
        </div>

        <div id="buttonContainer">
          <Button variant="contained" component={Link} to="/studio">
            Retour en Studio
          </Button>
          {this.state.activeStep === this.state.steps.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/studio"
            >
              Terminer la Session
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNextStep}
            >
              Exercice Suivant
            </Button>
          )}
        </div>
      </StyledLiveMode>
    );
  }
}

export default LiveMode;
