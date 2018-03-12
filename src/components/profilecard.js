import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import {List, ListItem} from 'material-ui/List';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {indigo500} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
// css impoorts
import '../css/team.css';

// custom modules impor



class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard" align="center">
              <div className="team-img-wrap">
                    <img 
                        src={require('../static/profiles/'+this.props.mem.dp)} 
                        alt="" 
                        className="team-img"
                    />
              </div>
              <div className="team-info-wrap">
                    <div className="name">{this.props.mem.name}</div>
                    {/*<div className="as">{this.props.mem.as}</div>*/}
                    <div className="contact">
                          <span>
                          <a href={'tel:+91'+this.props.mem.phno}>
                            <CommunicationCall color={indigo500}/>
                            </a>
                            </span>
                              +91-{this.props.mem.phno}
                          
                    </div>
                    <div className="contact">
                          <span>
                              <a href={'mailto:'+this.props.mem.email}>
                                <CommunicationEmail color={indigo500}/>
                              </a>
                          </span>
                          {this.props.mem.email}
                    </div>
              </div>
      </div>
    );
  }
}

export default ProfileCard;
