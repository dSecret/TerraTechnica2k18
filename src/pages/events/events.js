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
          <EventsCard title="ROBOTICS" lin="/events/robotics"/>
          <EventsCard title="CODING" lin="/events/robotics"/>
          <EventsCard title="INFORMAL" lin="/events/informal"/>
          <EventsCard title="MISCELLANEOUS" lin="/events/misc"/>
      </div>
      );
  }

}

export default Events;
