import styled from 'styled-components'

export const StyledSessionExerciseStepper = styled.div`
    opacity: ${(props) => (props.displayStepper ? '1' : '0')};
    background-color: ${(props) =>
        props.displayStepper ? 'white' : '#3A3F51'};
    transition: opacity 2s, background-color 2s;

    > div {
        background-color: ${(props) =>
            props.displayStepper ? 'white' : '#3A3F51'};
        transition: background-color 2s;
    }
`

export default StyledSessionExerciseStepper
