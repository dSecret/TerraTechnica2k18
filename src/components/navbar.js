import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

import '../css/navbar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
    return (
       <div style={{position:"fixed",left:"0px",top:"0px",width:"100vw",zIndex:"5"}}>
           	<AppBar title="TerraTechnica"
           		onLeftIconButtonTouchTap={this.handleToggle}
           	>
    		    </AppBar>
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
