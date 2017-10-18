import React, { Component } from 'react';


// components imports
// css imports
import '../css/menubutton.css';

class MenuButton extends Component {
  render() {
    return (
      <div>
        <div className="Button-wrapper" id="Button-wrapper">
              <div className="layer-1 layer"></div>
              <div className="layer-2 layer"></div>
              <div className="layer-3 layer"></div>
              <div className="layer-4 layer"></div>
        </div>
        <div className="mobile-top-title">
            TerraTechnica
        </div>
      </div>
    );
  }
}

export default MenuButton;
