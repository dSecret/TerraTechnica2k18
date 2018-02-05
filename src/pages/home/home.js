import React, { Component } from 'react';
import '../../css/home.css';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Swipeable,defineSwipe} from 'react-touch';
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
        	{/*<TitleAnim/>*/}	
			{/*<CountDownTimer/>*/}
      {/*<Canvas/>*/}
          <div class="system">
  <div class="sun"></div>
  <div class="ear-path"></div>
  <div class="ear"><div class="lune"></div></div>
  <div class="mar-path"></div>
  <div class="mar">
    <div class="pho"></div>
    <div class="dem"></div>
  </div>
  <div class="jup-path"></div>
  <div class="jup">
    <div class="spot"></div>
    <div class="jove io"></div>
    <div class="jove eur"></div>
    <div class="jove gan"></div>
    <div class="jove cal"></div>
  </div>
  <div class="sat-path"></div>
  <div class="sat">
    <div class="f-ring"></div>
    <div class="a-ring"></div>
    <div class="b-ring"></div>
    <div class="c-ring"></div>
  </div>
  <div class="ura-path"></div>
  <div class="ura">
    <div class="e-ring"></div>
  </div>
  <div class="nep-path"></div>
  <div class="nep">
    <div class="spot"></div>
  </div>
  <div class="plu-path"></div>
  <div class="plu"></div>
</div>
		</div>
    );
  }
}

export default Home;

                    {/*    <div class="about-but" id="navDown">
                          <a href="#about" ><span></span></a>
                        </div>*/}
