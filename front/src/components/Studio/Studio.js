import React, { Component } from 'react';
import StyledStudio from './Studio.style';
import AddExerciseForm from './AddExerciseForm/AddExerciseForm';

class Studio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseToAdd: {
        exerciseType: '',
        exerciseName: '',
        exerciseDescription: '',
        totalTime: '',
      },
      exerciseList: [],
    }
  }

  addExercise = (exerciseToAdd) => {
    const exerciseList = this.state.exerciseList;
    exerciseList.push(exerciseToAdd);
    this.setState({
      exerciseList: exerciseList
    });
  };

  render() {
    return (
      <StyledStudio>
        <div>
          <p className='modeName'>Studio </p>
          <AddExerciseForm addExercise={this.addExercise} />
        </div>
      </StyledStudio>
    );
  }
}

export default Studio;
