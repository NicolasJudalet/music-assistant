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
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
  }

  .formHeader {
    font-size: 20px;
    margin-top: 0;
    width: 100%;
    text-align: left;
  }

  .inputContainer {
    margin-bottom: 20px;
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