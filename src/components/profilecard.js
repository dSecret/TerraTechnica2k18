import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
// css impoorts
import '../css/team.css';

// custom modules impor

class ProfileCard extends Component {
  render() {
    return (
      <div className="Events">
        Convenyor<Divider />
          <div className="profile-card-cont">
              <div className="profile-card-img-cont">
                    <img src={require('../static/manavatar.png')} alt="" className="profile-card-img"/>
              </div>
              <div className="profile-card-content-cont">
                    Convenyor @TERRATECHNICA 2k18
                    <Divider/>
                    Shantanu Patil
                    <Divider/>
                    161210004
              </div>
          </div>
      </div>
    );
  }
}

export default ProfileCard;
