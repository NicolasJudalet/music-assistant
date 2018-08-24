import React, { Component } from 'react';

class Button extends Component {
   constructor() {
       super();

       this.state = {
           color: 'blue',
           initialColor: 'beige',
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
                    backgroundColor: this.initialColor,
                }}>
               New Button
           </button>
       )
   }
}   

export default Button