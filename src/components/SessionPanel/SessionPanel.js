import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import SessionExerciseStepper from '../SessionExerciseStepper/SessionExerciseStepper';

const SessionPanel = ({
  activeStep,
  exerciseRunning,
  steps,
  handleStep,
  handleNextStep,
}) => (
  <div>
    <div className="container">
      <SessionExerciseStepper
        activeStep={activeStep}
        display={!exerciseRunning}
        steps={steps}
        handleStep={handleStep}
      />
    </div>

    <div id="buttonContainer">
      <Button variant="contained" component={Link} to="/studio">
        Retour en Studio
      </Button>
      {activeStep === steps.length - 1 ? (
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/studio"
        >
          Terminer la Session
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleNextStep}>
          Exercice Suivant
        </Button>
      )}
    </div>
  </div>
);

export default SessionPanel;
