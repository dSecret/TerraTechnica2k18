import React, { Component } from 'react';
// import './Basic.css';


// Components Modules
import OpenMenu from './components/openmenu'
import MenuButton from './components/menubutton'
// Pages Modules



// Parent Component
class Basic extends Component {
  render() {
    return (
      <div className="Basic">
                    <MenuButton/>
                    <OpenMenu/>
                    <div>
                        {this.props.children}
                    </div>
      </div>
    );
  }
}

export default Basic;
