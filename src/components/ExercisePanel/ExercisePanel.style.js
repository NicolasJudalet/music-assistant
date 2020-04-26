import styled from 'styled-components';

const StyledExercisePanel = styled.div`
  .exercise-name {
    margin-top: 0px;
    color: ${(props) => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }

  .exercise-type {
    margin: 0.1em;
    color: ${(props) => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .grow-container {
    flex-grow: 1;
  }

  > p {
    color: ${(props) => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }
`;

export default StyledExercisePanel;
