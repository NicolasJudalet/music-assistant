import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddExerciseForm from './AddExerciseForm/AddExerciseForm';
import StyledStudio from './Studio.style';
import ExerciseTable from './ExerciseTable/ExerciseTable';

class Studio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseList: [],
    }
  }

  addExercise = (exerciseToAdd) => {
    const exerciseList = this.state.exerciseList;
    exerciseList.push(exerciseToAdd);
    this.setState({
      exerciseList: exerciseList
    });
    debugger;
  };

  render() {
    return (
      <StyledStudio>
        <p className='modeName'>Studio </p>
        <AddExerciseForm addExercise={this.addExercise} />
        <ExerciseTable exerciseList={this.state.exerciseList} />
      </StyledStudio>
    );
  }
}

export default Studio;
