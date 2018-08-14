import React, { Component } from 'react';

class Button extends Component {
   constructor() {
       super();

       this.state = {
           color: 'blue',
       }
   }

   handleClick() {
       this.setState({
            color: 'blue' === this.state.color ? 'red' : 'blue',
       });
   }

   render() {
       return (
           <button 
                onClick={() => this.handleClick()} 
                style={{
                    color: this.state.color,
                    backgroundColor: this.props.initialColor,
                }}>
               New Button
           </button>
       )
   }
}   

export default Button