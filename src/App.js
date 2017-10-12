import React, { Component } from 'react';
import { Router, Route,browserHistory } from 'react-router'


import logo from './logo.svg';
import './App.css';


// Components Modules
import NavBar from './components/navbar'


// Pages Modules
import Home from './pages/home/home'
import Events from './pages/events/events'

// Parent Component
class App extends Component {
  render() {
    return (
      <div className="App">
            <Router history={browserHistory}>
                 <Route path="/" component={Home}/>
                 <Route path="/events" component={Events}/>
            </Router>
      </div>
    );
  }
}

export default App;
