import React, { Component } from 'react';
import { Link} from 'react-router'

import '../css/navbar.css';

import MenuButton from './menubutton'
import Openmenu from './openmenu'

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  


  render() {
    var menuOptions = [ {tit:'Home',linki:'/'},
                        {tit:'Events',linki:'/events'},
                        {tit:'ContactUs',linki:'/contactus'},
                        {tit:'Team',linki:'/team'},
                        {tit:'Workshops',linki:'/workshops'},
                        {tit:'Lectures',linki:'/lectures'},
                      ]
          menuOptions=menuOptions.map((item,index)=>{
                  return(
                          <Link to={item.linki}  key={index}>
                            <button className="draw meet  navbut"><div>{item.tit}</div></button>
                          </Link>
                    )
      })
    return (
       <div className="NavBar">
            <div className="rel-wrap">
              <div className="logo-wrap">
                    <img src={require('../static/logo.png')} alt="" className="toplogo"/>
                    <img src={require('../static/nitdd.png')} alt="" className="seclogo"/>
              </div>
              <div className="options-wrap" id="fullform">
                    {menuOptions}
              </div>
              <div  id="shortform" className="options-wrap">
                    {/*<button onClick={this.handleToggle}>Menu</button>*/}
                    <MenuButton/>
                    <Openmenu/>
              </div>
            </div>

{/*           <div className="expand-form form-css">
                <div className="mobile-top-title" style={{float:"left",margin:"0 0 0 20px","height":"100%"}}>
                          <img src={require('../static/logo.png')} alt="" className="toplogo"/>
                          {<img src={require('../static/nitdlogo.gif')} alt="" className="seclogo"/>}
                </div>
                      {menuOptions}
            </div>
            <div className="short-form form-css" onClick={this.handleToggle}>

                      {<MenuButton/>}
            </div>*/}      
      </div>
    );
  }
}

export default NavBar;
