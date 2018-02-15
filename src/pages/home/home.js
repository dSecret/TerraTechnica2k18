import React, { Component } from 'react';
import '../../css/home.css';

import { Link} from 'react-router'

// import custom modules
import About from '../../components/about'
import TitleAnim from '../../components/titleAnim'
import CountDownTimer from '../../components/count_down_timer'
import Canvas from '../../components/canvas.js'


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
        <Link to={{pathname:'/events',query:{type:'robotics'}}}>
          <div className="view" id="view1">
            <div className="plane main" id="plane1">
              <div className="content"><div>
                    <img src={require('../../static/matrix.png')} alt="" />
              </div></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </Link>
        <Link to={{pathname:'/events',query:{type:'coding'}}}>
          <div className="view" id="view2">
            <div className="plane main" id="plane2">
              <div className="content"><div>
                    <img src={require('../../static/gear.png')} alt="" />
              </div></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </Link>
        <Link to={{pathname:'/events',query:{type:'informal'}}}>
          <div className="view" id="view3">
            <div className="plane main" id="plane3">
              <div className="content"><div>
                    <img src={require('../../static/informal_icon.png')} alt="" />
              </div></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </Link>
        <Link to={{pathname:'/events',query:{type:'misc'}}}>
          <div className="view" id="view4">
            <div className="plane main" id="plane4">
              <div className="content"><div>
                    <img src={require('../../static/misc.png')} alt="" />
              </div></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </Link>
		</div>
    );
  }
}

export default Home;

                    {/*    <div className="about-but" id="navDown">
                          <a href="#about" ><span></span></a>
                        </div>*/}
