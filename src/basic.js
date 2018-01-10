import React, { Component } from 'react';
// import './Basic.css';


// Components Modules
import NavBar from './components/navbar'
import OpenMenu from './components/openmenu'
import MenuButton from './components/menubutton'
// Pages Modules
import './css/basic.css'



// Parent Component
class Basic extends Component {
  render() {
    return (
      <div className="Basic">
                    {/*<MenuButton/>*/}
                    {/*<OpenMenu/>*/}
                    <NavBar/>
                    <div className="Basicwrap">
                        {this.props.children}
                    </div>
      </div>
    );
  }
}

export default Basic;
