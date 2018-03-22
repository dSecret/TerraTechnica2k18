import React, { Component } from 'react';
import '../../css/timeline.css';
import Sdl from '../../static/schedule.js'
import Event from 'material-ui/svg-icons/action/event';
import Location from 'material-ui/svg-icons/communication/location-on';
class Timeline extends Component {
      constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
    }
  render() {
    let list1=Sdl['day1'].map((e,i)=>{
        return(
            <div className={i%2?"container right":"container left"}>
              <div className="content">
                  <div className="loc"> <Event/><span>{e.tit}</span></div>
                  <p className="des"> {e.des} <span></span><span>.</span></p>
                  <p className="loc"><Location/><span>{e.loc}</span></p>
              </div>
            </div>
          )
    })
    let list2=Sdl['day2'].map((e,i)=>{
        return(
            <div className={i%2?"container right":"container left"}>
              <div className="content">
                  <div className="loc"> <Event/><span>{e.tit}</span></div>
                  <p className="des"> {e.des} <span></span><span>.</span></p>
                  <p className="loc"><Location/><span>{e.loc}</span></p>
              </div>
            </div>
          )
    })
    return (
      <div className="Timeline">
        <div className="schedule-tit">Day 1</div>
        <div className="timeline">
          {list1}
        </div>
        <div className="schedule-tit">Day 2</div>
        <div className="timeline">
          {list2}
        </div>
        <div className="timeline-main-margin"></div>

      </div>
    );
  }
}

export default Timeline;
