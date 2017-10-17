import React, { Component } from 'react';
import '../../css/home.css';


import Menu from '../../components/menu.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
            {/*<Menu/>*/}
            <div className="wel-msg-wrapper">
            		<div className="wel-msg-cont">
            			<h2>TerraTechnica 2k18</h2>
            			<p>Like it or not, here it is</p>
            		</div>

            </div>
      </div>
    );
  }
}

export default Home;
