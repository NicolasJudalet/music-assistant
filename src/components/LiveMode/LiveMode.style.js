import styled from 'styled-components';

const StyledLiveMode = styled.div`
  transition: background-color 2s;
  background-color: ${props => (props.exerciseRunning ? '#3A3F51' : 'white')};
  text-align: center;
  height: 100%;
  
  > h1 {
    margin-top: 0px;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }

  > h2 {
    margin: 0.1em;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
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

  #button-container {
    display: ${props => (props.exerciseRunning ? 'none' : 'block')}
    transition: opacity 2s;
    margin: 0 0 40px 0;
  }

  > p {
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
  }
  
  .header-element {
    text-align: left;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
    margin: 0;
  }

  .mode-name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .mode-name {
    margin: 5px;
  }

  .headphones-icon {
    height: 20px;
    margin: 5px;
  }
`;

export default StyledLiveMode;