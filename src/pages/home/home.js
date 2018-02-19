import React, { Component } from 'react';
import '../../css/home.css';

import { Link} from 'react-router'

// import custom modules
import About from '../../components/about'
import TitleAnim from '../../components/titleAnim'
import CountDownTimer from '../../components/count_down_timer'
import Canvas from '../../components/canvas.js'

import TTLogo from '../../static/logo.png'

import '../../css/home_simple.css'

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
        	<div className="HomeTTLogo">
				<img className="HomeTTLogoimg" src={ TTLogo }/>
			</div>
		</div>
    );
  }
}

export default Home;

                    {/*    <div className="about-but" id="navDown">
                          <a href="#about" ><span></span></a>
                        </div>*/}
