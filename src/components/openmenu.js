import React, { Component } from 'react';


// components imports
// css imports
import '../css/openmenu.css';

class OpenMenu extends Component {
  render() {
    
    function  closemenu(){
         var firsti=document.getElementById('first-child')
          var secondi=document.getElementById('second-child')
          var mydivi=document.getElementById('openmenu-cont')
        mydivi.style.width='00vw'
        firsti.style.width='0vw'
        secondi.style.width='0vw'
    }

    return (
      <div id="openmenu-cont">
        <div id="first-child">
        </div>
        <div id="second-child">
            <div>
              <button onClick={closemenu}>Close</button>
            </div>

        </div>
      </div>
    );
  }
}

export default OpenMenu;
