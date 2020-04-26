import styled from 'styled-components';

const StyledLiveMode = styled.div`
  transition: background-color 2s;
  background-color: ${(props) => (props.exerciseRunning ? '#3A3F51' : 'white')};
  text-align: center;
  height: 100%;

  #buttonContainer {
    opacity: ${(props) => (props.exerciseRunning ? 0 : 1)};
    transition: opacity 2s;
  }
`;

export default StyledLiveMode;
