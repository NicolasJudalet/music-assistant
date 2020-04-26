import styled from 'styled-components';

const StyledPageHeader = styled.p`
  text-align: left;
  padding-left: 20px;
  color: ${(props) => (props.exerciseRunning ? 'white' : 'black')};
  transition: color 2s;
  padding-block-start: 1em;
  margin-block-start: 0;
`;

export default StyledPageHeader;
