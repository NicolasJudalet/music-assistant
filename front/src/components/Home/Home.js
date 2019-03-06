import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {    
    render() {
        return (
            <div>
                <h1>Welcome to the music assistant !</h1>
                <p>Where would you like to go ?</p>
                <ul>
                    <li>
                        <Link to='/stars-factory'>Stars Factory</Link>
                    </li>
                    <li>
                        <Link to='/studio'>Studio</Link>
                    </li>
                    <li>
                        <Link to='/live-mode'>Live Mode</Link>
                    </li>
                </ul>
            </div>
        ) 
    }
}

export default Home;
