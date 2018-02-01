import React, { Component } from 'react';

// modules
import '../css/eventsoptions2.css';
import EventsOptions from './eventoptions'


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


const iconStyle={
  paddingTop:"0px"
}
const style={
    display:"inline-block"
}

class EventsOptions2 extends Component {
      constructor(props) {
      super(props);
      this.state = {

      };
    }
  handleClick=(value) => {
      document.getElementById('Events').style.transform="translateX(00vw)"
      // this.props.action()
  }
  render() {
    var alloptions=this.props.options.map((item,index)=>{
          return(<div className="cont"><EventsOptions options={item} type={this.props.title}/></div>)
          // return(<span> options={item}</span>)
    })
    return (
      <div className="EventsOptions2 comEO">
          <div className="topTitle comEO">
              <FloatingActionButton onClick={this.handleClick}
                                    mini={true} 
                                    iconStyle={iconStyle} 
                                    zDepth="1"
                                    style={style}
                                    >
                     <ArrowBack />
              </FloatingActionButton>
               <span class="title">{this.props.title}</span>
          </div>
          <div className="comEO options">
            {alloptions}
          </div>
      </div>
    );
  }
}

export default EventsOptions2;
