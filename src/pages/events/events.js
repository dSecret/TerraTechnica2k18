import React, { Component } from 'react';
import '../../css/events.css';

import EventsCard from '../../components/eventcard.js'
import EventsOptions2 from '../../components/eventsoptions2.js'

import Db from '../../static/content.js'

// From https://github.com/oliviertassinari/react-swipeable-views
class Events extends Component {
  constructor(props) {
      super(props);
      this.handler = this.handler.bind(this);
      this.state = {
        title:'',
        lin:'',
        options:[],
      };
    }
  handler=(foo)=>{
        this.setState({
          title:foo.title,
          lin:foo.lin,
          options:foo.options
        })
    }
  render() {
    const robotics=['Robo Rumble','Robo Race','Robo Rumble','Robo Race','Robo Rumble','Robo Race',
                    'Robo Rumble','Robo Race','Robo Rumble','Robo Race'
                  ]

    return(
      <div className="Events" id="Events">
        <div id="eventsCardCont" className="Events">
          <EventsCard title="ROBOTICS" lin="/events/robotics" options={Db.robotics.options} content={Db.robotics.content} action={this.handler}/>
          <EventsCard title="CODING" lin="/events/coding" options={Db.coding.options} content={Db.coding.content} action={this.handler}/>
          <EventsCard title="INFORMAL" lin="/events/informal" options={Db.informal.options} content={Db.informal.content} action={this.handler}/>
          <EventsCard title="MISCELLANEOUS" lin="/events/misc" options={Db.misc.options}content={Db.misc.content}  action={this.handler}/>
        </div>
        <div id="eventsCardDtls" className="Events">
            <EventsOptions2 title={this.state.title} 
                            lin={this.state.lin} 
                            options={this.state.options}
            />
        </div>
      </div>
      );
  }
  ComponentDidMount(){
      return console.log("Workingkkkk")
  }

}

export default Events;
