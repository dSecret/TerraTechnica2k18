import React, { Component } from 'react';
import '../../css/events.css';

import EventsCard from '../../components/eventcard.js'


// From https://github.com/oliviertassinari/react-swipeable-views
class Events extends Component {
  constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
        prevIndex:0
      };
    }
  render() {
    return(
      <div className="Events">
          <EventsCard title="ROBOTICS" lin="/robotics"/>
          <EventsCard title="CODING" lin="/robotics"/>
          <EventsCard title="CTF" lin="/robotics"/>
          <EventsCard title="PROGRAMMING LEAGUE" lin="/robotics"/>
          <EventsCard title="ROBOTICS"  lin="/robotics"/>
      </div>
      );
  }

}

export default Events;
