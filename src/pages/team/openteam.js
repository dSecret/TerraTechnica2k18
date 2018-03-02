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
      if((bar in Cont)){
      	let mems=Cont[this.props.params.id].map(e=>{
        	return <Profilecard mem={e}/>
    	})
    	this.setState({mems:mems})
      }
      else{
      	browserHistory.push('team')
      }

  }
  render() {

    return (
     <div className="team">
          <div className="main-title">{this.props.params.id}</div>
          {this.state.mems}
      </div>
    );
  }

}

export default OpenTeam;
