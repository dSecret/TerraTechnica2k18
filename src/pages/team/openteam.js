import React, { Component } from 'react';
import {browserHistory } from 'react-router'

// components imports
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/customcard.css';
import Cont from '../../static/contact.js'


class OpenTeam extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mems:[]
      };
    }
  componentWillMount(){
      	let bar=this.props.params.id
      	let mems=Cont.map(e=>{
      		if(e.team==bar)
        		return <Profilecard mem={e} key={e.name}/>
    	})
    	if(mems.length)
    		this.setState({mems:mems})
	    else
      		browserHistory.push('team')
      	

  }
  render() {

    return (
     <div className="team">
          <div className="main-title">{this.props.params.id}</div>
          <div className="profiles-wrap">{this.state.mems}</div>
      </div>
    );
  }

}

export default OpenTeam;
