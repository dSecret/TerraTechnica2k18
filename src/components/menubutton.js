import React, { Component } from 'react';


// components imports
// css imports
import '../css/menubutton.css';

class MenuButton extends Component {
  render() {

   
    function  openmenu(){
          var mydiv=document.getElementById('openmenu-cont')
        mydiv.style.width='100vw'
    }

    return (
        <div className="Button-wrapper" id="Button-wrapper" onClick={openmenu}>
              <div className="layer-1 layer"></div>
              <div className="layer-2 layer"></div>
              <div className="layer-3 layer"></div>
              <div className="layer-4 layer"></div>
        </div>
    );
  }
}

export default MenuButton;
