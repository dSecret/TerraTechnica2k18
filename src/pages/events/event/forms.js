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
        url:`${window.location.origin}/test.php`,
        data:{
            category:this.props.location.query.category,
            event:this.props.location.query.event,
            players:this.state.playerinfo
        }
      }).then(res=>{
          if(res.status===200){
              if(this.state.event.fee)
                  return window.location='http://terratechnica.in/insta.php?req='+res.data
              else{
                  return window.location=`https://terratechnica.in/#/registered?category=${this.props.location.query.category}&event=${this.props.location.query.event}`            
                }
          }
          else{
              return window.location='https://terratechnica.in/#/error?req=/events/'+this.props.location.query.category+'/'+this.props.location.query.event
          }
          
      }).catch(res=>{
              return window.location='https://terratechnica.in/#/error?req=/events/'+this.props.location.query.category+'/'+this.props.location.query.event
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
  		return(<option value={i+1}  key={i}>{i+1+'\tMember'}</option>)
  	})
  	var player=this.state.playerinfo.map((e,i)=>{
  		return(
        <div className="wrapper-player" key={i}>
            {i!==0?'\tMember'+''+(i+1):'Team Leader'}
  					<div className="player" id={'forms'+i}>
                <div className="inform">*Use 'NA', if you don't have a roll no.</div>
                <form>
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
                </form>
  					</div>
  				</div>
  				)
  	})
    return (
      <div className="Forms">
      	<div className="title">
      		{this.props.location.query.event}
      	</div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option>Team</option>
            {items}
          </select>
              {this.state.value?<p>All fields are required.</p>:''}
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
