import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddExerciseForm from './AddExerciseForm/AddExerciseForm';
import StyledStudio from './Studio.style';
import ExerciseTable from './ExerciseTable/ExerciseTable';

class Studio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseList: [],
      startSession: false,
    }
  }

  addExercise = (exerciseToAdd) => {
    const exerciseList = this.state.exerciseList;
    exerciseList.push(exerciseToAdd);
    this.setState({
      exerciseList: exerciseList
    });
  };

  startSession = () => {
    this.setState({ startSession: true });
  }

  render() {
    if (this.state.startSession) {
      return (
        <Redirect to={{
          pathname: '/live-mode',
          state: { exerciseList: this.state.exerciseList }
        }}
        />
      );
    }
    return (
      <StyledStudio>
        <p className='modeName'>Studio </p>
        <AddExerciseForm addExercise={this.addExercise} />
        <div className='startSessionButtonContainer'>
          <Button
            variant='contained'
            color='primary'
            onClick={this.startSession}
            disabled={false}
          >
            Démarrer la session
          </Button>
        </div>
        <ExerciseTable exerciseList={this.state.exerciseList} />
      </StyledStudio>
    );
  }
}

export default Studio;
