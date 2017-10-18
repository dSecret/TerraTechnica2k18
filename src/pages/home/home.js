import React, { Component } from 'react';
import '../../css/home.css';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Menu from '../../components/menu.js'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
  render() {
    return (
      <div className="Home">
            
            <div className="wel-msg-wrapper">
                            <div className="wel-msg-cont">
                                    <div className="tt-title">
                                        <div id="trapezoid"></div>
                                        TerraTechnica'18
                                        <div className="about_fest">
                                              <div style={{marginBottom: '10px'}}>23rd April, 2018</div>
                                              Annual Tech fest of National Institute of Technology Delhi,
                                              New Delhi
                                        </div>
                                    </div>
                                    <div className="sposor-about_fest" align="center">
                                            <div className="sponsor-anim-title">Sponsored By
                                            </div>
                                            <div className="sponsor-anim">
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
                                            </div>
                                    </div>
                            </div>
                            
            </div>
      </div>
    );
  }
}

export default Home;
