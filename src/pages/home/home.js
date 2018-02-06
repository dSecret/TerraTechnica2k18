import React, { Component } from 'react';
import '../../css/home.css';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Swipeable,defineSwipe} from 'react-touch';
import { Link} from 'react-router'

// import custom modules
import About from '../../components/about'
import TitleAnim from '../../components/titleAnim'
import CountDownTimer from '../../components/count_down_timer'
import Canvas from '../../components/canvas.js'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const swipe = defineSwipe({swipeDistance:20})

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class Home extends Component {
      constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
        prevIndex:0,
        curTrans: 0
      };
    }

    handleLeft = () => {

              if(this.state.curTrans>-1920){   
                this.setState({
                  curTrans: this.state.curTrans -384
                })
                document.getElementById('mysvg').style.transform
                      =`translate(${this.state.curTrans}px,0px)`,
                document.getElementById('svg-over').style.transform
                      =`translate(${this.state.curTrans}px,0px)`
               }
                
    };
    handleRight = () => {
              if(this.state.curTrans<0){ 
                this.setState({
                    curTrans: this.state.curTrans +384
                  })
                  // if(this.state.curTrans!==-1920){ 
                        document.getElementById('mysvg').style.transform
                          =`translate(${this.state.curTrans}px,0px)`,
                        document.getElementById('svg-over').style.transform
                          =`translate(${this.state.curTrans}px,0px)`
                      // }
                }
    };
    scrollNext = ()=>{
      console.log('next')
       console.log(document.getElementById('Home').scrollHeight);
    };
  render() {
    return (
		<div className="Home">
        <Link to="/events#robo" params={{ name: "hello" }}>
          <div class="view" id="view1">
            <div class="plane main" id="plane1">
              <div class="content"><div>
                    <img src="https://image.flaticon.com/icons/svg/237/237416.svg" alt="" />
              </div></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </Link>
        <Link to="/events">
          <div class="view" id="view2">
            <div class="plane main" id="plane2">
              <div class="content"><div>
                    <img src="https://image.flaticon.com/icons/svg/237/237416.svg" alt="" />
              </div></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </Link>
        <Link to="/events">
          <div class="view" id="view3">
            <div class="plane main" id="plane3">
              <div class="content"><div>
                    <img src="https://image.flaticon.com/icons/svg/237/237416.svg" alt="" />
              </div></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </Link>
        <Link to="/events">
          <div class="view" id="view4">
            <div class="plane main" id="plane4">
              <div class="content"><div>
                    <img src="https://image.flaticon.com/icons/svg/237/237416.svg" alt="" />
              </div></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </Link>
		</div>
    );
  }
}

export default Home;

                    {/*    <div class="about-but" id="navDown">
                          <a href="#about" ><span></span></a>
                        </div>*/}
