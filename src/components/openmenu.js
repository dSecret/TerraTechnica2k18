import React, { Component } from 'react';
import {Link} from 'react-router'

// components imports
// css imports
import '../css/openmenu.css';

class OpenMenu extends Component {
  render() {
    var menuOptions = [ {tit:'Home',linki:'/'},
                        {tit:'Events',linki:'/events'},
                        {tit:'Contacts',linki:'/contacts'},
                        {tit:'Team',linki:'/team'},
                        {tit:'Workshops',linki:'/workshops'},
                        {tit:'GuestLectures',linki:'/gl'},
                      ]
        menuOptions=menuOptions.map((item,index)=>{
            return(
                      <div>  <Link to={item.linki}>
                          <span className="navigate-opt"
                                onClick={closemenu}
                          >
                            {item.tit}
                          </span>
                        </Link></div>
              )
      })
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
          <table id="left-table">
              <tr>
                <th >
                  <div id="left-table-div">{menuOptions}
                  </div>
                </th>
              </tr>
          </table>
        </div>
        <div id="second-child">
           <div class="close-but-cont">
              <div class="close-but">
                  <button  onClick={closemenu}>Close</button>
              </div>
            </div>
            <table id="right-table">
                  <tr>
                    <th>
                      <div id="right-table-div">{menuOptions}
                      </div>
                    </th>
                  </tr>
              </table>
        </div>

        

      </div>
    );
  }
}

export default OpenMenu;
