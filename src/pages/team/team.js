import React, { Component } from 'react';
import {Link} from 'react-router'

// components imports
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/customcard.css';

import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    marginLeft:30,
    color:"white"
  },
  slide: {
    padding:0,
  },
};


class Team extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
        prevIndex:0,
        teams:['Kakashi','Lee','Ozuna']
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
        var e1=document.getElementById('trigg1'+this.state.prevIndex).style
        var e2=document.getElementById('trigg1'+index).style

        
        e1.backgroundColor= 'transparent'
         
        this.setState({
          // preserve the last index for toggling purpose
          prevIndex:index,
        })
        // providing different colors to different switches
            e2.backgroundColor='black'
       
    }


  render() {
    return (
     <div className="team">
          <div className="trig-wrapper cmnTeam" >
              <div className="trig-wrapper-child">
                    <span>{this.state.teams[this.state.slideIndex]}</span>
                    <span style={{"flex":1}}></span>
                    <span className="trigg1" onClick={this.handleClick.bind(this, 0)}>
                          <div className="trigg1-active"  id="trigg10" >
                          </div>
                    </span>
                    <span className="trigg1" onClick={this.handleClick.bind(this, 1)}>
                          <div className="trigg1-active" id="trigg11">
                          </div>
                    </span>
                    <span className="trigg1" onClick={this.handleClick.bind(this, 2)}>
                          <div className="trigg1-active" id="trigg12">
                          </div>
                    </span>
              </div>
          </div>
          <div className="swipe-view-cont">
                  <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    enableMouseEvents={true}
                    animateHeight={true}
                  >
                    <div style={styles.slide}>
                        <div className="sLide cmnTeam">
                          <Profilecard/><Profilecard/><Profilecard/><Profilecard/>
                        </div>
                    </div>
                    <div style={styles.slide}>
                        <div className="sLide cmnTeam">
                          <Profilecard/><Profilecard/><Profilecard/><Profilecard/>
                        </div>
                    </div>
                    <div style={styles.slide}>
                        <div className="sLide cmnTeam">
                          <Profilecard/><Profilecard/><Profilecard/><Profilecard/>
                        </div>
                    </div>
                  </SwipeableViews>
          </div>
            
      </div>
    );
  }
}

export default Team;
