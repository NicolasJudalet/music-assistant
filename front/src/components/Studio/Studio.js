import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import StyledStudio from './Studio.style';
import TextField from '@material-ui/core/TextField';

class Studio extends Component {
  constructor(props){
    super(props);

    this.state = {
      exerciseToAdd: {
        exerciseType: '',
        exerciseName: '',
        totalTime: null,
        description: '',
      }
    }
  }

  handleSelectChange = event => {
    this.setState((prevState) => ({
      exerciseToAdd: {
        ...prevState.exerciseToAdd,
        [event.target.name]: event.target.value,
      }
    }));
  };

  handleTextChange = name => event => {
    this.setState((prevState) => ({
      exerciseToAdd: {
        ...prevState.exerciseToAdd,
        [name]: event.target.value,
      }
    }));
  };

  render() {
    return (
      <StyledStudio>
        <div>
          <p className='modeName'>Studio </p>
          <form className='formContainer'>
            <FormControl fullWidth >
              <InputLabel htmlFor="exerciseType" >Type</InputLabel>
              <Select
                value={this.state.exerciseToAdd.exerciseType}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: 'exerciseType',
                  id: 'exerciseType',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Rythme'}>Rythme</MenuItem>
                <MenuItem value={'Mélodie'}>Mélodie</MenuItem>
                <MenuItem value={'Voicings'}>Voicings</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id='exerciseName'
              label='Nom'
              fullWidth
              value={this.state.exerciseToAdd.exerciseName}
              onChange={this.handleTextChange('exerciseName')}
              margin='normal'
            />

            <div className='container'>
              <label htmlFor='exerciseName' style={{ display: 'block' }}>
                Nom
              </label>
              <input
                id='exerciseName'
                type='text'
              />
            </div>

            <div className='container'>
              <label htmlFor='totalTime' style={{ display: 'block' }}>
                Temps total
              </label>
              <input
                id='totalTime'
                type='text'
              />
            </div>

            <div className='container'>
              <label htmlFor='description' style={{ display: 'block' }}>
                Description
              </label>
              <input
                id='description'
                type='text'
              />
            </div>


            <Button
              type="button"
              className="outline"
              onClick={()=>{}}
              disabled={false}
            >
              Add Exercise
            </Button>
          </form>
        </div>
      </StyledStudio>
    );
  }
}

export default Studio;
