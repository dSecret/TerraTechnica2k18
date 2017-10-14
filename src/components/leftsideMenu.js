import React, { Component } from 'react';
import '../css/leftsideMenu.css'


class LeftsideMenu extends Component {
  render() {
    return (
      	<div className="leftsideMenu-wrapper">
      			<div className="parent-leftsideMenu">
      				EVENTS
      			</div>
      			<div className="child-leftsideMenu">
      				CSE 
      			</div>
      			<div className="child-leftsideMenu">
      				ECE
      			</div>
      			<div className="child-leftsideMenu">
      				EEE
      			</div>
      	</div>
    );
  }
}

export default LeftsideMenu;
