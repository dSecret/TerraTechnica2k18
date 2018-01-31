
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
      var f=this.state
          
            
            if(f.toggle){
                this.refs.expandOption.style.height="0";
                this.refs.expandOption.style.padding="0";
                this.setState({
                  toggle:0
                }) 
                this.refs.expandButton.style.transform ="rotateZ(0deg)"
            }
            else{
                this.refs.expandOption.style.height="initial";
                this.refs.expandOption.style.padding="20px 0px";
                this.setState({
                  toggle:1
                })  
                this.refs.expandButton.style.transform ="rotateZ(-180deg)"
            }  
  }
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
                  <div className="layer1-options-wrap comEC" ref="expandOption">
                      {alloptions}
                  </div>
                  <Divider  style={{"backgroundColor":"black"}}/>
                  <div className="comEC" id="expandable">
                    <div ref="expandButton" id="expandButton">
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
