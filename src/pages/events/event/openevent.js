import React, { Component } from 'react';
import axios from 'axios'

import'../../../css/openevent.css'
import Db from '../../../static/content.js'

import RaisedButton from 'material-ui/RaisedButton';
// Parent Component

const style = {
  margin: 12,
};
class OpenEvent extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
		  d:{}
  	};
  }
  // var foo=Db.this.props.params.id
  render() {

    var foo=new String(this.props.params.id)
    var bar=Db.DeathRace
    var options=bar.rules.map((item,index)=>{
            return(
                          <li key={index}>{item}</li>
              )
    })
    return (
      <div className="OpenEvent">
             <div className="title comOE">{this.props.params.id}</div>
             <div className="img-cont comOE">
                <img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="icon"/>
              </div>
             <div className="intro comOE">"{bar.intro}"</div>
             <div className="rules">
                  <div>Problem Statement :</div>
                  <div>{bar.ps}</div>
             </div>
             <div className="rules">
                  <div>Rules :</div>
                  <div>
                    <ul>
                     {options}
                    </ul>  
                  </div>
             </div>
             <div className="rules">
                  <div>Criteria for victory :</div>
                  <div>{bar.win}</div>
             </div>
             <div className="alert">
                **In case of any ambiguity or controversy, 
                the decision of the coordinating committee shall be binding to all.
             </div>
             <div className="reg-cont">
                <RaisedButton label="Register" primary={true} style={style} />
             </div>
             {/*<div>{this.state.data.title}</div>*/}
      </div>
    );
  }
  componentDidMount(){
  	this.fetchData()
  }
  fetchData(){
  // 	const base = 'https://jsonplaceholder.typicode.com';
		// axios.get(base+'/posts/1').then((res)=>{
		// 	console.log(res.data)
		// 	this.setState({data:res.data})
		// })
    // this.setState({d:Db.DeathRace})
  }
}

export default OpenEvent;
