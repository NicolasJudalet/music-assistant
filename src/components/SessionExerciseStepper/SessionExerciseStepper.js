import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import StyledSessionExerciseStepper from './SessionExerciseStepper.style';
import { withTheme } from '@material-ui/core/styles';

class SessionExerciseStepper extends React.Component {

  render() {
    const { activeStep, steps, handleStep } = this.props;

    return (
      <StyledSessionExerciseStepper display={this.props.display}>
        <Stepper activeStep={activeStep} alternativeLabel nonLinear>
          {steps.map((stepInfo, index) => {
            return (
              <Step key={stepInfo.exerciseType}>
                <StepButton completed={stepInfo.completed} onClick={handleStep(index)}>
                  <StepLabel>
                    <span>{stepInfo.exerciseType}</span>
                    <br/>
                    <span>{stepInfo.exerciseName}</span>
                  </StepLabel>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </StyledSessionExerciseStepper>
    );
  }
}

export default withTheme()(SessionExerciseStepper);
