import React, { Component } from 'react';
import { Router, Route,browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';


// Components Modules
import NavBar from './components/navbar'
import NotFound from './notfound.js'

// Pages Modules
import Home from './pages/home/home'
import Events from './pages/events/events'

// Parent Component
class App extends Component {
  render() {
    return (
      <div className="App">
             <MuiThemeProvider>
                    <Router history={browserHistory}>
                       <Route path="/" component={Home}/>
                       <Route path="/events" component={Events}/>
                       <Route path="*" component={NotFound}/>
                    </Router>
             </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
