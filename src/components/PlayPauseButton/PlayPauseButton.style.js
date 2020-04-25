import styled from 'styled-components'

export const StyledPlayPauseButton = styled.button`
    background-color: ${(props) =>
        props.exerciseRunning ? '#3A3F51' : 'white'};
    border: 0;
    outline: 0;
    transition: background-color 2s;

    > img {
        width: 40px;
        height: 40px;
    }

    > p {
        color: red;
    }
`

export default StyledPlayPauseButton
