import React, { Component } from 'react';
import {browserHistory } from 'react-router'

import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import '../../../css/forms.css';

import Db from '../../../static/content.js'
import axios from 'axios'
// const getKey=[{}]
const style = {
  margin: 12,
};
class Forms extends Component {
      constructor(props) {
      super(props);
      this.state = {
      		event:{},
      		value:0,
          required:false,
      		playerinfo:[]
      };
    }
  handleQuery=(foo)=>{
  		this.setState({event:foo})
  }
  handleChange=(event)=>{
  	this.setState({value:event.target.value},this.handleInput);
  }
  handleInput=()=>{
  	let bar={name:'',email:'',phno:'',email:'',collg:'',rollno:''}
  	let foo=this.state.value
  	let playerinfo=Array.apply(null, {length: foo}).map((e,i)=>{
  		return new Object({name:'',email:'',phno:'',email:'',collg:'',rollno:''})
  	})
  	this.setState({playerinfo:playerinfo},()=>{})
  }
  handleSubmit=()=>{
    if(this.handleErrors()){
      axios({
        method:'post',

        url:'http://terratechnica.in/test.php',
        data:{

            event:this.props.location.query.event,
            players:this.state.playerinfo
        }
      }).then(res=>{
          console.log(res)
      })
      // console.log(this.state.playerinfo)
    }
  }
  
  handlePlayerInput=(event,i)=>{
      var e=event.target

      var bar=[]
          bar=this.state.playerinfo
          bar[i][e.name]=e.value
          return this.setState({playerinfo:bar},()=>{
              
          })
      
  }
  render() {
  	var foo=this.state.event.team
  	var items=Array.apply(null, {length: foo}).map((e,i)=>{
  		return(<option value={i+1}  key={i}>{i+1+'\tPlayer'}</option>)
  	})
  	var player=this.state.playerinfo.map((e,i)=>{
  		return(
        <div className="wrapper-player" key={i}>
            {i!==0?'\tPlayer'+''+(i+1):'Team Leader'}
  					<div className="player" id={'forms'+i}>
  						    <TextField 
                      name="name"
                      hintText="Name" 
                      onChange={(eve)=>this.handlePlayerInput(eve,i)}
                  />
  						    <TextField 
                      name="email" 
                      hintText="Email"
                      onChange={(eve)=>this.handlePlayerInput(eve,i)}
                  />
  						    <TextField 
                      name="phno"
                      hintText="Phone no.(+91)"
                      onChange={(eve)=>this.handlePlayerInput(eve,i)}
                  />
  						    <TextField 
                      name="rollno"
                      hintText="Roll no."
                      onChange={(eve)=>this.handlePlayerInput(eve,i)}
                  />
  						    <TextField 
                      name="collg"
                      hintText="College Name"
                      onChange={(eve)=>this.handlePlayerInput(eve,i)}
                  />
  					</div>
  				</div>
  				)
  	})
    return (
      <div className="Forms">
      	<div className="title">
      		{this.props.location.query.event}
      	</div>
     	{/*<SelectField
          floatingLabelText="Team"
          value={this.state.value}
          onChange={this.handleChange}
        >
        	{items}
        </SelectField>*/}
          <select value={this.state.value} onChange={this.handleChange}>
            <option>Team</option>
            {items}
          </select>
              {this.state.value?<p>All field are required.</p>:''}
          	  {player}
              {this.state.required?
                <div className="warnings">*Required fields can't be empty or entered data is not valid</div>
                :''
              }
              {this.state.value
                ?
                  <RaisedButton 
                    label="SubmitForm" 
                    primary={true} 
                    style={style} 
                    onClick={this.handleSubmit}
                />
              :
                <p>Select any options</p>
              }
      </div>
    );
  }
  handleErrors=()=>{
      if(!this.state.value){
        return false
      }
      let bar=true
      let  valid=true
      let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let ph=/^\d{10}$/
      let foo=this.state.playerinfo
          foo.some(e=>{
              if(e.name===''||e.phno===''||e.email===''||e.rollno===''||e.collg===''||!ph.test(e.phno)||!re.test(e.email)){
                  this.setState({required:true})
                  bar=false
              }
          })
          return bar

  }
  componentDidMount(){
      let bar=this.props.location.query.event
      if(bar!=="MACHINE LEARNING CHALLENGE"){
          return browserHistory.push('/events/')
      }
      if((bar in Db)){
      	this.handleQuery(Db[bar])
      	this.handleInput()
          console.log(Db[bar].team)
      }
      else{
      	browserHistory.push('/events')
      }
        
  }
}

export default Forms;
