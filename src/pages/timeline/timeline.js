import React, { Component } from 'react';
import '../../css/timeline.css';
import Sdl from '../../static/schedule.js'
import {Card,CardMedia, CardTitle, CardText} from 'material-ui/Card';


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
      <div>{e.tit}</div>
      <p> {e.des} <span></span><span></span><span></span></p>
              </div>
            </div>
          )
    })
    return (
      <div className="Timeline">
        <div className="timeline">
          {list1}
        </div>
        <div className="timeline-main-margin"></div>

      </div>
    );
  }
}

export default Timeline;
