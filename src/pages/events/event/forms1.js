import React, { Component } from 'react';
import {browserHistory } from 'react-router'

import TextField from 'material-ui/TextField';
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
      		value:1,
          required:false,
      		playerinfo:{}
      };
    }
  handleQuery=(foo)=>{
  		this.setState({event:foo})
  }
  handleChange=(event)=>{
  	this.setState({value:event.target.value},this.handleInput);
  }
  handleInput=()=>{
  	// let bar={name:'',email:'',phno:'',email:'',collg:'',rollno:''}
  	// let foo=this.state.value
  	// this.setState({playerinfo:playerinfo},()=>{})
  }
  handleSubmit=()=>{
    if(this.handleErrors()){
      axios({
        method:'post',
        url:`${window.origin}/test.php`,
        data:{
            category:this.props.location.query.category,
            event:this.props.location.query.event,
            players:this.state.playerinfo,
        }
      }).then(res=>{
          if(res.status===200){
              if(this.state.event.fee)
                  window.location='http://terratechnica.in/test.php?req='+res.data
              else
                  window.location=`https://terratechnica.in/#/registered?category=${this.props.location.query.category}&event=${this.props.location.query.event}`            
          }
          else{
              window.location='https://terratechnica.in/#/error?req=/events/'+this.props.location.query.category+'/'+this.props.location.query.event
          }
          
      }).catch(res=>{
              window.location='https://terratechnica.in/#/error?req=/events/'+this.props.location.query.category+'/'+this.props.location.query.event
      })
      // console.log(this.state.playerinfo)
    }
  }
  
  handlePlayerInput=(event)=>{
      var e=event.target

      var bar={}
          bar=this.state.playerinfo
          bar[e.name]=e.value
          return this.setState({playerinfo:bar},()=>{
              
          })
      
  }
  render() {
  	var foo=this.state.event.team
  	var items=Array.apply(null, {length: foo}).map((e,i)=>{
  		return(<option value={2*i+6}  key={i}>{2*i+6+'\tMembers'}</option>)
  	})
  	var player=[
        <div className="wrapper-player">
            		Team Leader
  			<div className="player" id='forms'>
                <div className="inform">*Use 'NA', if you don't have a roll no.</div>
                <form>
  						    <TextField 
                      name="name"
                      hintText="Name" 
                      onChange={(eve)=>this.handlePlayerInput(eve)}
                  />
  						    <TextField 
                      name="email" 
                      hintText="Email"
                      onChange={(eve)=>this.handlePlayerInput(eve)}
                  />
  						    <TextField 
                      name="phno"
                      hintText="Phone no.(+91)"
                      onChange={(eve)=>this.handlePlayerInput(eve)}
                  />
  						    <TextField 
                      name="collg"
                      hintText="College Name"
                      onChange={(eve)=>this.handlePlayerInput(eve)}
                  />
                </form>
  					</div>
  				</div>
  	]
    return (
      <div className="Forms">
      	<div className="title">
      		{this.props.location.query.event}
      	</div>
{/*          <select value={this.state.value} onChange={this.handleChange}>
            <option>Team</option>
            {items}
          </select>*/}
              {this.state.value?<p>All fields are required except for college name.</p>:''}
          	  {player}
              {this.state.required?
                <div className="warnings">*Required fields can not be empty or entered data is invalid</div>
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
      let e=this.state.playerinfo
         if(e.name===''||e.phno===''||e.email===''||e.rollno===''||!ph.test(e.phno)||!re.test(e.email)){
                  this.setState({required:true})
                  bar=false
          }
          return bar

  }
  componentDidMount(){
      let bar=this.props.location.query.event
      // if(bar!=="MACHINE LEARNING CHALLENGE"){
      //     return browserHistory.push('/events/')
      // }
      if((bar in Db)){
      	this.handleQuery(Db[bar])
      	this.handleInput()
      }
      else{
      	browserHistory.push('/events')
      }
        
  }
}

export default Forms;
