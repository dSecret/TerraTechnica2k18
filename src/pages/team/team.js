import React, { Component } from 'react';


// components imports
import NavBar from '../../components/navbar.js'
import LeftsideMenu from '../../components/leftsideMenu.js'
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/team.css';



class Team extends Component {
  render() {
    return (
     <div className="Events">
      	<NavBar/>
          <div className="cont-sidebars">
          		<div className="leftSide">
                    <div className="in-leftside">
                    		<LeftsideMenu/>
                    </div>
          		</div>
          		<div className="rightSide">
                  			<Profilecard/>
          		</div>
          </div>
            
      </div>
    );
  }
}

export default Team;
