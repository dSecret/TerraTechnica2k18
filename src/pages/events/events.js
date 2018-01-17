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
          <EventsCard title="ROBOTICS" lin="/events/robotics" options={['Robo Rumble','Robo Race']}/>
          <EventsCard title="CODING" lin="/events/robotics" options={['Programming League']}/>
          <EventsCard title="INFORMAL" lin="/events/informal" options={['Chunin Exam']}/>
          <EventsCard title="MISCELLANEOUS" lin="/events/misc" options={['Noobs Games']}/>
      </div>
      );
  }

}

export default Events;
