import React, { Component } from 'react';

class PlayPauseButton extends Component {
   
    
    constructor(props) {
       super(props);
       
       this.state = {
           icon: 'https://cdn.iconscout.com/public/images/icon/free/png-512/play-button-social-media-logo-38378301177154e7-512x512.png',
       }
   }

   handleClick() {
       this.setState({
           icon: 'https://cdn.iconscout.com/public/images/icon/free/png-512/play-button-social-media-logo-38378301177154e7-512x512.png' === this.state.icon ? 'https://cdn.iconscout.com/public/images/icon/premium/png-512/pause-button-3dd51b010ebcd1da-512x512.png' : 'https://cdn.iconscout.com/public/images/icon/free/png-512/play-button-social-media-logo-38378301177154e7-512x512.png',
       });
   }

   render() {
       return (
           <button
                style={{
                    border: 0,
                    outline: 0,
                }}>
                <img
                    src= {this.state.icon}
                    alt= 'play pause'
                    onClick={() => this.handleClick()}
                    width="40"
                    height="40"                     
                />
           </button>
                
       )
   }
}   

export default PlayPauseButton