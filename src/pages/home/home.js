import React, { Component } from 'react';
import '../../css/home.css';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Menu from '../../components/menu.js'

import {Swipeable,defineSwipe} from 'react-touch';

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
            <div className="wel-msg-wrapper">
                <div className="wel-msg-cont" align="center">
                    <div className="svg-wrapper">
                        <div id="svg-parent">
                            <div id="svg-div">
                                <img  draggable="false" 
                                      id="mysvg" 
                                      src={require('../../static/map2com.svg')}
                                />
                            </div>
                            <div >
                                <Swipeable  config={swipe} 
                                          onSwipeLeft={this.handleLeft} 
                                          onSwipeRight={this.handleRight}
                                >
                                    <div id="svg-over">
                                    </div>
                                </Swipeable>
                            </div>
                        </div>
                        <button onClick={this.handleLeft}>Left</button>
                        <button onClick={this.handleRight}>Right</button><br/>
                        <a href="#about" >Next</a>
                    </div>
                    {/*<div className="sposor-about_fest" align="center">
                                            <div className="sponsor-anim-title">Sponsored By
                                            </div>
                                            {<div className="sponsor-anim">
                                                                          <AutoPlaySwipeableViews interval={1500}>
                                                                              <div>
                                                                                  <h2 style={styles.headline}>Sponsor 1</h2>
                                                                              </div>
                                                                              <div style={styles.slide}>
                                                                              <h2 style={styles.headline}>Sponsor 2</h2>
                                                                              </div>
                                                                              <div style={styles.slide}>
                                                                                   <h2 style={styles.headline}>Sponsor 3</h2>
                                                                              </div>
                                                                          </AutoPlaySwipeableViews>
                                                                    </div>}
                                        </div>*/}
                    <div id="about">
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Home;
