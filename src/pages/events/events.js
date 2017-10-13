import React, { Component } from 'react';
// import './css/home.css';

import EventsCard from '../../components/eventcard.js'
import NavBar from '../../components/navbar.js'


class Events extends Component {
  render() {
    return (
      <div className="Events">
      		<NavBar/>
            <EventsCard/>
      </div>
    );
  }
}

export default Events;
