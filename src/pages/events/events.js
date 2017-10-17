import React, { Component } from 'react';
import '../../css/events.css';

import EventsCard from '../../components/eventcard.js'


// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    marginLeft:'30%',
  },
  slide: {
    padding: 10,
  },
};

class Events extends Component {

  constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
        prevIndex:0
      };
    }

    handleChange = (value) => {
      this.handleClick(value)
    };
    handleClick=(index)=>{
        this.setState({
          slideIndex:index
        })
        // settle the e1 e11 definition by getElementsByClassName in future
        var e1=document.getElementById('trig'+this.state.prevIndex).style
        var e11=document.getElementById('trig'+this.state.prevIndex+this.state.prevIndex).style
        var e2=document.getElementById('trig'+index).style
        var e21=document.getElementById('trig'+index+index).style

        
        e1.backgroundColor= 'transparent'
        e11.backgroundColor= 'transparent'
         
        this.setState({
          // preserve the last index for toggling purpose
          prevIndex:index,
        })
        // providing different colors to different switches
         if(index===0){
            e2.backgroundColor='red'
            e21.backgroundColor='red'
         }else if(index===1){
            e2.backgroundColor='green'
            e21.backgroundColor='green'
         }else{
            e2.backgroundColor='lightblue'
            e21.backgroundColor='lightblue'
         }
    }
  render() {
    return(
      <div className="Events">
           <div style={{width:"100%"}}>
              <div className="trig-ff-wrapper">
                    <div className="route-title-cont">EVENTS</div>
                    <div className="trig-ff-cont" align="center">
                        <div className="trig-ff">
                            <div className="trig" onClick={this.handleClick.bind(this, 0)}>
                                  <div className="trig-active"  id="trig00" >
                                  </div>
                            </div>
                            <span className="trig-ff-title">Robotics</span>
                        </div>
                        <div className="trig-ff">
                            <div className="trig" onClick={this.handleClick.bind(this, 1)}>
                                  <div className="trig-active"  id="trig11" >
                                  </div>
                            </div>
                            <span className="trig-ff-title">Coding</span>
                        </div>
                        <div className="trig-ff">
                            <div className="trig" onClick={this.handleClick.bind(this, 2)}>
                                  <div className="trig-active"  id="trig22" >
                                  </div>
                            </div>
                            <span className="trig-ff-title">Gaming</span>
                        </div>
                    </div>
              </div>
              <div className="trig-wrapper" align="center">
                    <div className="trig" onClick={this.handleClick.bind(this, 0)}>
                          <div className="trig-active"  id="trig0" >
                          </div>
                    </div>
                    <div className="trig" onClick={this.handleClick.bind(this, 1)}>
                          <div className="trig-active" id="trig1">
                          </div>
                    </div>
                    <div className="trig" onClick={this.handleClick.bind(this, 2)}>
                          <div className="trig-active" id="trig2">
                          </div>
                    </div>
              </div>
              <div className="swipe-view-cont">
                  <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    enableMouseEvents={true}
                    animateHeight={true}
                  >
                    <div>
                      <h2 style={styles.headline}>Robotics Events</h2>
                      Swipe to see the other events.<br />
                    </div>
                    <div style={styles.slide}>
                      <h2 style={styles.headline}>Coding Events</h2>
                      <EventsCard/>
                    </div>
                    <div style={styles.slide}>
                      <h2 style={styles.headline}>Gaming Events</h2>
                    </div>
                  </SwipeableViews>
              </div>
          </div>
      </div>
      );
  }

}

export default Events;
