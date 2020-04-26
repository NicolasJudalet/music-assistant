import styled from 'styled-components';

const StyledLiveMode = styled.div`
  transition: background-color 2s;
  background-color: ${(props) => (props.exerciseRunning ? '#3A3F51' : 'white')};
  text-align: center;
  height: 100%;

  > h1 {
    margin-top: 0px;
    color: ${(props) => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }

  > h2 {
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

  #buttonContainer {
    opacity: ${(props) => (props.exerciseRunning ? 0 : 1)};
    transition: opacity 2s;
  }

  > p {
    color: ${(props) => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }
`;

export default StyledLiveMode;
