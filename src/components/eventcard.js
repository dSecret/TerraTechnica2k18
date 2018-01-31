
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
// css impoorts
import '../css/eventscard.css';
import Background from '../static/images3.jpg';
import { Link} from 'react-router'

// custom modules import
import EventsOptions from './eventoptions'

var sectionStyle={
  backgroundImage:`url(${Background}`
}


class EventsCard extends Component {
  render() {
      var alloptions=this.props.options.map((item,index)=>{
            return(<EventsOptions options={item} type={this.props.title}/>)
            // return(<span> options={item}</span>)
      })
    return (
        <div className="EventsCard comEC">
          <div className="layer1 comEC" id="layer2">
                  <div class="layer1-tit comEC" id={this.props.title}>{this.props.title}</div>
                  <Divider inset={true} style={{"backgroundColor":"black",}}/>
                  <div className="layer1-options-wrap comEC">
                    {/*<button data-hover="click me!"><div>Hover me!</div></button>*/}
                      {alloptions}
                  </div>
          </div>
        </div>
    );

  }
  ComponentDidMount(){
      return console.log("Workingkkkk")
  }
}

export default EventsCard;
