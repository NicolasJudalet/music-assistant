import React, { Component } from 'react';
import {Line} from 'rc-progress';

class ProgressBar extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: 10, flex: 1 }}>
        <Line trailWidth="0.5" strokeWidth="0.5" percent={this.props.percentElapsed} />
      </div>
    );
  }
}

export default ProgressBar