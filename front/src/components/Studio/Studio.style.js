import styled from 'styled-components';

const StyledStudio = styled.div`
  text-align: center;
  height: 100%;
  
  > h1 {
    margin-top: 0px;
  }

  > h2 {
    margin: 0.1em;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .grow-container {
    flex-grow: 1;
  }

  label {
    padding-right: 5px;
  }
  
  .modeName {
    text-align: left;
    padding-left: 20px;
    color: ${props => (props.exerciseRunning ? 'white' : 'black')};
    transition: color 2s;
    padding-block-start: 1em;
    margin-block-start: 0;
  }
`;

export default StyledStudio;