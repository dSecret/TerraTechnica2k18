import React, { Component } from 'react';
import {Link} from 'react-router'

// components imports
// css imports
import '../css/openmenu.css';

class OpenMenu extends Component {
  render() {
    var menuOptions = [ {tit:'Home',linki:'/'},
                        {tit:'Events',linki:'/events'},
                        {tit:'ContactUs',linki:'/contactus'},
                        {tit:'Team',linki:'/team'},
                        {tit:'Workshops',linki:'/workshops'},
                        {tit:'GuestLectures',linki:'/lectures'},
                        {tit:'Notifications',linki:'/notifications'},
                      ]
        menuOptions=menuOptions.map((item,index)=>{
            return(
                          <Link to={item.linki}>
                            <button onClick={closemenu} className="draww meett  navbutt">{item.tit}</button>
                          </Link>
              )
      })
    function  closemenu(){
          var mydivi=document.getElementById('openmenu-cont')
        mydivi.style.width='00vw'
    }

    return (
      <div id="openmenu-cont">
       <div class="close-but-cont">
              <span  onClick={closemenu}>&#128473;</span>
        </div>        
        <div id="second-child">
            {menuOptions}
        </div>
      </div>
    );
  }
}

export default OpenMenu;
