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
        // console.log(this.props.location.query.type)
    }
    
  handleQuery=(value)=>{
      document.getElementById('Events').style.transform="translateX(-100vw)"
      var foo={};
          foo.title=Db[value].title
          foo.lin='/events/'+value
          foo.options=Db[value].options
          this.handler(foo)
  }
  render() {
    return(
      <div className="Events" id="Events">
        <div id="eventsCardCont" className="Events">
          <EventsCard title={Db.robotics.title} lin="/events/robotics" options={Db.robotics.options} content={Db.robotics.content} action={this.handler}/>
          <EventsCard title={Db.coding.title} lin="/events/coding" options={Db.coding.options} content={Db.coding.content} action={this.handler}/>
          <EventsCard title={Db.informal.title} lin="/events/informal" options={Db.informal.options} content={Db.informal.content} action={this.handler}/>
          <EventsCard title={Db.misc.title} lin="/events/misc" options={Db.misc.options}content={Db.misc.content}  action={this.handler}/>
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
  componentDidMount(){
      let bar=this.props.location.query.type
      if(bar)
        this.handleQuery(bar)
  }

}

export default Events;
