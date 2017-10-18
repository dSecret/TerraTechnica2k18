import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

import '../css/navbar.css';

import MenuButton from './menubutton'

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  


  render() {
      var menuOptions = ['Home','Events','Team','Contacts']
          menuOptions=menuOptions.map((item,index)=>{
                  return(
                        <span className="nav-options">{item}</span>
                    )
      })
    return (
       <div>
            <div className="expand-form form-css">
                      {menuOptions}
            </div>
            <div className="short-form form-css" onClick={this.handleToggle}>
                      <MenuButton/>
            </div>      
           <Drawer
              docked={false}
              width={400}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
           >
              <div className="options-cont">
                <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
              </div>
          </Drawer>
      </div>
    );
  }
}

export default NavBar;
