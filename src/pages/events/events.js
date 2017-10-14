import React, { Component } from 'react';
import '../../css/events.css';

import EventsCard from '../../components/eventcard.js'
import NavBar from '../../components/navbar.js'
import LeftsideMenu from '../../components/leftsideMenu.js'

class Events extends Component {
  render() {
    return (
      <div className="Events">
      		<NavBar/>
          <div className="cont-sidebars">
          		<div className="leftSide">
                    <div className="in-leftside">
                        <LeftsideMenu/>
                    </div>
          		</div>
          		<div className="rightSide">
                  			<EventsCard/>
          		</div>
          </div>
            
      </div>
    );
  }
}

export default Events;
