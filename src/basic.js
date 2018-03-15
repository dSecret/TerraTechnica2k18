import React, { Component } from 'react';
// import './Basic.css';


// Components Modules
import NavBar from './components/navbar'
import Footer from './components/footer'
// import OpenMenu from './components/openmenu'
// import MenuButton from './components/menubutton'
// Pages Modules
import './css/basic.css'


// Parent Component
class Basic extends Component {
  render() {
    let path=this.props.location.pathname
    return (
      <div className="Basic">
                    <NavBar/>
                    <div className="Basicwrap">
                        {this.props.children}
                      {/*  <div className="notify-wrap">
                            <div>Notifications</div>
                        </div>*/}
                        {path!=='/pronite'&&path!=='/'?
                          <div className="maintain-padding"></div>
                        :''
                        }
                    </div>
                    {this.props.location.pathname==='/'?
                          <Footer/>
                        :''
                        }
                    
      </div>
    );
  }
}

export default Basic;
