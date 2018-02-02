import React, { Component } from 'react';
import {Link} from 'react-router'

import Footer from './footermenu.js'
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
                        {tit:'Notifications',linki:'/'},
                      ]
        menuOptions=menuOptions.map((item,index)=>{
            return(
                          <Link to={item.linki} key={index}>
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
       <div className="close-but-cont">
              <span  onClick={closemenu}>X</span>
        </div>        
        <div id="second-child">
            {menuOptions}
        </div>
        <Footer/>
      </div>
    );
  }
}


export default OpenMenu;
