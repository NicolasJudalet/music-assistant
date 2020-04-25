import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import StyledHome from './Home.style.js'

class Home extends Component {
    render() {
        return (
            <StyledHome>
                <div className="container">
                    <h1 className="title">Herbie</h1>
                    <h2 className="subtitle">Your musical coach</h2>

                    <Button
                        className="outline"
                        variant="contained"
                        color="primary"
                        disabled={false}
                    >
                        <Link to="/studio" id="startButton">
                            Start a session
                        </Link>
                    </Button>
                </div>
            </StyledHome>
        )
    }
}

export default Home
