import React, { Component } from 'react';
import '../../css/home.css';


// import custom modules

import TTLogo from '../../static/logo.png'
import NITDLogo from '../../static/nitdd.png'


import '../../css/home_simple.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class Home extends Component {
      constructor(props) {
      super(props);
      this.state = {
 
      };
    }
  render() {
    return (
		<div className="Home">
        	<div className="HomeTTLogo">
				    <img className="HomeTTLogoimg" src={ TTLogo }/>
            <div className="TTDate">23rd Mar - 24th Mar</div>
            <div className="wrap-nitdlogo">
              <a href="http://nitdelhi.ac.in">
                  <img className="NitdLogoimg" src={NITDLogo}/>
              </a>
            </div>
            <div className="NITDText">NIT Delhi</div>
			    </div>
		</div>
    );
  }
}

export default Home;
