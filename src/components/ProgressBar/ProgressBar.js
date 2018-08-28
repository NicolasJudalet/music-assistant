import React, { Component } from 'react';
import {Line} from 'rc-progress';

class ProgressBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        percent: 0,
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer(){
    // console.log("start");
    this.timer = setInterval(() => this.setState({
      percent: this.state.percent + 1
    }), 1000)
  }
  
  stopTimer(){
    // console.log("stop");
    clearInterval(this.timer);
  }

  componentWillReceiveProps() {
    if (!this.props.timerRunning){
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  render() {
    return (
      <div style={{ margin: 10, flex: 1 }}>
        <Line trailWidth="0.5" strokeWidth="0.5" percent={this.state.percent} />
      </div>
    );
  }
}

export default ProgressBar