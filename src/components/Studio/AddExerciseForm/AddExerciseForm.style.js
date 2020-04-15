import styled from 'styled-components'

const StyledAddExerciseForm = styled.form`
    .formContainer {
        max-width: 500px;
        margin: auto;
        padding: 20px;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
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
`

export default StyledAddExerciseForm
