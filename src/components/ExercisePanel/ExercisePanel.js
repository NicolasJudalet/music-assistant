import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

import StyledExercisePanel from './ExercisePanel.style';

const ExercisePanel = ({
  timerRunning,
  exerciseRunning,
  toggleTimerHandler,
  activeStepInfo,
}) => {
  const {
    exerciseType,
    exerciseName,
    timeElapsed,
    totalTime,
    description,
    image,
  } = activeStepInfo;

  return (
    <StyledExercisePanel exerciseRunning={exerciseRunning}>
      <h2 className="exercise-type">{exerciseType}</h2>
      <h1 className="exercise-name">{exerciseName}</h1>

      <div className="container">
        <PlayPauseButton
          timerRunning={timerRunning}
          exerciseRunning={exerciseRunning}
          toggleTimerHandler={toggleTimerHandler}
        />
        <div className="grow-container">
          <LinearProgress
            variant="determinate"
            value={Math.round((timeElapsed / totalTime) * 100)}
          />
        </div>
      </div>

      <p>{totalTime} min</p>

      <div className="container">
        <ExerciseCard
          classes={{ card: 'card', media: 'media' }}
          description={description}
          image={image}
        />
      </div>
    </StyledExercisePanel>
  );
};

export default ExercisePanel;
