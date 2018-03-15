import React, { Component } from 'react';
import {Link} from 'react-router'

import Clear from 'material-ui/svg-icons/content/clear'
import Footer from './footermenu.js'
// components imports
// css imports
import '../css/openmenu.css';
const iconStyles = {
  height:40,
  width:40,
  marginTop:20
};
const style={
  backgound:`url(${require('../static/Terra Technica 18 Black.png')}) 0 0 /100% 100%`
}

class OpenMenu extends Component {
  render() {
    var menuOptions =[ {tit:'Home',linki:'/'},
                        // {tit:'Timeline',linki:'/timeline'},
                        {tit:'Events',linki:'/events'},
                        // {tit:'Pro nite',linki:'/pronite'},
                        {tit:'Lectures',linki:'/lectures'},
                        {tit:'Merchandise',linki:'/merchandise'},
                        {tit:'Accommodations',linki:'/accommodations'},
                        {tit:'Team',linki:'/team'},
                        {tit:'ContactUs',linki:'/contactus'},
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
              <span  onClick={closemenu}>  
                  <Clear style={iconStyles}/>
            </span>
        </div>        
        <div id="second-child">
            <div className="background-div">
              <img src={require('../static/Terra Technica 18 Black.png')} alt="tt18"/>
            </div>
            {menuOptions}
        </div>
        <Footer/>
      </div>
    );
  }
}


export default OpenMenu;
