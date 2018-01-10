import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router'

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
      var menuOptions = [{"tit":'Home',"lin":'/'},{"tit":'Events',"lin":'/events'},
                          {"tit":'Team',"lin":'/team'},{"tit":'Contacts',"lin":'/contacts'}
                      ]
          menuOptions=menuOptions.map((item,index)=>{
                  return(
                        <Link to={item.lin} className="nav-options">
                            <span className="nav-options-in">{item.tit}</span>
                        </Link>
                    )
      })
    return (
       <div style={{zIndex:"100"}}>
            <div className="expand-form form-css">
                <div className="mobile-top-title" style={{float:"left",margin:"0 0 0 20px","height":"100%"}}>
                          <img src={require('../static/logo.png')} alt="" className="toplogo"/>
                          {/*<img src={require('../static/nitdlogo.gif')} alt="" className="seclogo"/>*/}
                </div>
                      {menuOptions}
            </div>
            <div className="short-form form-css" onClick={this.handleToggle}>

                      {/*<MenuButton/>*/}
            </div>      
           <Drawer
              docked={false}
              width={250}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
           >
              <div className="options-cont">
                    <div className="menu-logo-cont">
                      <img className="menu-logo" src={require('../static/tt.jpg')}/>
                      <img className="menu-logo" src={require('../static/nitdlogo.gif')}/>
                    </div>
                    <Link to={'/'}>
                      <MenuItem onClick={this.handleClose}>Home</MenuItem>
                    </Link>
                     <Link to={'/events'}>
                      <MenuItem onClick={this.handleClose}>Events</MenuItem>
                    </Link>
                     <Link to={'/team'}>
                      <MenuItem onClick={this.handleClose}>Team</MenuItem>
                    </Link>
                     <Link to={'/contacts'}>
                      <MenuItem onClick={this.handleClose}>Contacts</MenuItem>
                    </Link>
              </div>
          </Drawer>
      </div>
    );
  }
}

export default NavBar;
