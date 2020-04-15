import styled from 'styled-components'

const StyledLiveMode = styled.div`
    height: 100%;

    .container {
        height: 100%;
        padding: 10px;
        background-image: linear-gradient(#141f2b, #000);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    h1,
    h2 {
        color: white;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        font-weight: 400;
        font-stretch: normal;
        line-height: 1.3;
        font-family: D, 'Lucida Grande', verdana, sans-serif;
        margin: 5px;
    }

    h1 {
        font-size: 40px;
        text-align: center;
    }

    h2 {
        font-size: 13px;
        text-align: center;
    }

    button {
        margin: 20px;
    }

    #startButton {
        text-decoration: none;
        color: white;
    }
`

export default StyledLiveMode
