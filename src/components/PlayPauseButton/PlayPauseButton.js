import React, { Component } from 'react'
import playIconBlack from './playIconBlack.png'
import playIconGray from './playIconGray.png'
import pauseIconGray from './pauseIconGray.png'
import StyledPlayPauseButton from './PlayPauseButton.style'

class PlayPauseButton extends Component {
    getIcon = () => {
        let code
        code =
            10 * (this.props.timerRunning && this.props.exerciseRunning) +
            this.props.exerciseRunning
        switch (code) {
            case 11:
                return pauseIconGray
            case 1:
                return playIconGray
            case 0:
                return playIconBlack
        }
    }

    render() {
        return (
            <StyledPlayPauseButton
                exerciseRunning={this.props.exerciseRunning}
                timerRunning={this.props.timerRunning}
            >
                <img
                    src={this.getIcon()}
                    alt="play pause"
                    onClick={this.props.toggleTimerHandler}
                />
            </StyledPlayPauseButton>
        )
    }
}

export default PlayPauseButton
