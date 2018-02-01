
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
// css impoorts
import '../css/eventscard.css';
import Background from '../static/images3.jpg';
import { Link} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
// custom modules import

import EventsOptions from './eventoptions'
const style = {
};
var sectionStyle={
  backgroundImage:`url(${Background}`
}
const iconStyle={
  paddingTop:"1px"
}
var i=1;
class EventsCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        toggle:0,
      };
  }
  handleClick=(value) => {
      document.getElementById('Events').style.transform="translateX(-100vw)"
      var b=this.props;
      var foo={};
          foo.title=b.title
          foo.lin=b.lin
          foo.options=b.options
          this.props.action(foo)
  }
  render() {
    return (
        <div className="EventsCard comEC">
          <div className="layer1 comEC" id="layer2">
                  <div class="layer1-tit comEC" id={this.props.title}>{this.props.title}</div>
                  <Divider inset={true} style={{"backgroundColor":"black",}}/>
                  <Divider  style={{"backgroundColor":"black"}}/>
                  <div className="comEC" id="expandable">
                    <div id="expandButton">
                        <FloatingActionButton style={style} 
                                              mini={true} 
                                              iconStyle={iconStyle} 
                                              onClick={this.handleClick.bind(this)}
                                              zDepth="1"
                                              >
                               <ArrowDown />
                        </FloatingActionButton>
                    </div>
                    I extend my warmest greetings to all the participants of this year’s World Robot Olympiad which the Philippine government is very much happy to host.  
                  </div>
          </div>
        </div>
    );

  }
  ComponentDidMount(){
      // return console.log("Workingkkkk")
  }
}

export default EventsCard;
