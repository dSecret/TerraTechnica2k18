import React, { Component } from 'react';
import '../css/menu.css'

class Menu extends Component {
  render() {
    return (
     	<div id="main">
            <div id="atom">
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div id="nucleus"></div>
            </div>
        </div>
    );
  }
}

export default Menu;
