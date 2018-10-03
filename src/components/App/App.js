import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StyledApp } from './App.style';
import Studio from '../Studio/Studio';
import LiveMode from '../LiveMode/LiveMode';
import StarsFactory from '../StarsFactory/StarsFactory';
import Home from '../Home/Home';

class App extends Component {
    render() {
        return (
            <StyledApp>
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/studio" component={Studio} />
                        <Route path="/stars-factory" component={StarsFactory} />
                        <Route path="/live-mode" component={LiveMode} />
                    </div>
                </Router>
            </StyledApp>
        );
    }
}

export default App;