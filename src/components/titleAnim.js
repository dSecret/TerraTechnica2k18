import React, { Component } from 'react';
import {Link} from 'react-router'

import '../css/titleAnim.css';
// Parent Component

class TitleAnim extends Component {
  render() {
    return (
           <div className="home-title">
                  <div id="let1">T</div>
                  <div id="let2">E</div>
                  <div id="let3">R</div>
                  <div id="let4">R</div>
                  <div id="let5">A</div>
           </div>
    );
  }
}

export default TitleAnim;
