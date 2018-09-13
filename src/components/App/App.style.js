import styled from 'styled-components';

export const StyledApp = styled.div`
  transition: background-color 2s ease;
  background-color: ${props => (props.exerciseRunning ? '#3A3F51' : 'white')};
  text-align: center;
  
  > h1 {
    margin-top: 0px;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s ease;
  }

  > h2 {
    margin: 0.1em;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s ease;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  > p {
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s ease;
  }
  
  .modeName {
    text-align: left;
    padding-left: 20px;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s ease;
  }
`;

export default StyledApp;