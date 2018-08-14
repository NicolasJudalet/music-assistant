import React, { Component } from 'react';
import {Line} from 'rc-progress';

class ProgressBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        percent: 67,
    }
    this.increase = this.increase.bind(this);
    this.start = this.start.bind(this);
  }

  // componentDidMount() {
  //   this.increase();
  // }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 100) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 1000);
  }

  start() {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
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