import React, { Component } from 'react';


// components imports
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/customcard.css';



class Team extends Component {
  render() {
    return (
     <div className="team">
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
