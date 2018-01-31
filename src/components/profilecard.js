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

const CardTitleStyle={paddingLeft:"129px",
                      paddingTop:"5px",
                      backgroundColor: 'lightgrey',
                      width:'100%'
                    }

class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard" align="center">
          <div className="profile-card-cont" align="left">
              <div className="profile-card-img-cont">
                    <img src={require('../static/manavatar.png')} alt="" className="profile-card-img"/>
              </div>
              <div className="profile-card-content-cont">
{/*                      <Card>
                        <CardTitle  title="Shantanu Patil" 
                                    subtitle="Convener" 
                                    style={CardTitleStyle}
                                    subtitleStyle={{fontSize:"20px",fontFamily:"'Nova Flat', cursive"}}
                        />
                       <CardText style={{padding:"0px"}}>
                              <List>
                                <ListItem
                                  leftIcon={<CommunicationCall color={indigo500} />}
                                  rightIcon={<CommunicationChatBubble />}
                                  primaryText="(650) 555 - 1234"
                                  secondaryText="Mobile"
                                  disabled="true"
                                />
                              </List>
                              <Divider inset={true} />
                              <List>
                                <ListItem
                                  leftIcon={<CommunicationEmail color={indigo500} />}
                                  primaryText="aliconnors@example.com"
                                  secondaryText="Personal"
                                  disabled="true"
                                />
                              </List>
                       </CardText>
                      </Card>*/}
                      <div className="card-title">
                          <span className="main-tit">Naruto Uzumaki</span>
                          <span className="sub-tit">Hokage</span>
                      </div>
                      <div>
                          <List>
                            <ListItem
                              leftIcon={<CommunicationCall color={indigo500} />}
                              rightIcon={<CommunicationChatBubble />}
                              primaryText="(650) 555 - 1234"
                              secondaryText="Mobile"
                              disabled="true"
                            />
                          </List>
                          <Divider inset={true} />
                          <List>
                            <ListItem
                              leftIcon={<CommunicationEmail color={indigo500} />}
                              primaryText="aliconnors@example.com"
                              secondaryText="Personal"
                              disabled="true"
                            />
                          </List>                      
                      </div>
              </div>
          </div>
      </div>
    );
  }
}

export default ProfileCard;
