import React, { Component } from 'react';


// components imports
import NavBar from '../../components/navbar.js'
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/customcard.css';



class Team extends Component {
  render() {
    return (
     <div className="team">
      	<NavBar/>
          <div className="team-member">
              <div className="customcard-wrapper">
                      			<Profilecard/>
              </div>
              <div className="customcard-wrapper">
                            <Profilecard/>
              </div>
              <div className="customcard-wrapper">
                            <Profilecard/>
              </div>
              <div className="customcard-wrapper">
                            <Profilecard/>
              </div>
              <div className="customcard-wrapper">
                            <Profilecard/>
              </div>
          </div>
            
      </div>
    );
  }
}

export default Team;
