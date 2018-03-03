import React, { Component } from 'react';
import '../../css/merch.css';
// import '../../static/build/tracking-min.js'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
const style = {
  margin: 12,
};

class Merch extends Component {
      constructor(props) {
      super(props);
      this.state = {
      		user:{},
      		required:false
      };
    }
  render () {
    return (
      <div className="Merch">
      		<div className="main-wrap-merch">
				<div id="side-1" class="flip">
				    <img src={require('../../static/tfront.png')} alt="front"/>
				</div>
				<div id="side-2" class="flip">
				    <img src={require('../../static/tback.png')} alt="back"/>
				</div>
				<div>
					<button onClick={this.handleUp}>up</button>
					<button onClick={this.handleDown}>down</button>
				</div>
      		</div>
      		<div className="main-form-merch">
  				<TextField 
                    name="name"
                    hintText="Name" 
                    onChange={(eve)=>this.handleChange(eve)}
                />
  				<TextField 
                    name="email"
                    hintText="Email" 
                    onChange={(eve)=>this.handleChange(eve)}
                />
  				<TextField 
                    name="phno"
                    hintText="PhoneNumber" 
                    onChange={(eve)=>this.handleChange(eve)}
                />
                <TextField 
                    name="size"
                    hintText="Size" 
                    onChange={(eve)=>this.handleChange(eve)}
                /><br/>
                {
                	this.state.required?
                	<div className="warnings">**Required fields can not be empty or invalid entry</div>
                	:''
                }

	            <RaisedButton 
	                label="SubmitForm" 
	                primary={true} 
	                style={style} 
	                onClick={this.handleSubmit}
	            />
      		</div>
      </div>
    )
  }
  handleChange=(e)=>{
  		let foo=this.state.user
  			foo[e.target.name]=e.target.value
  		this.setState({user:foo});
  }
  handleUp=(e)=>{
    e.preventDefault();
    document.getElementById( 'side-2' ).className = 'flip flip-side-1';
    document.getElementById( 'side-1' ).className = 'flip flip-side-2';
  }
  handleDown=(e)=>{
    e.preventDefault();
    document.getElementById( 'side-2' ).className = 'flip';
    document.getElementById( 'side-1' ).className = 'flip';  	
  }
  handleSubmit=()=>{
    if(this.handleErrors()){
      axios({
        method:'post',
        url:'http://terratechnica.in/ts.php',
        data:this.state.user
      }).then(res=>{
      		if(res.status===200)
              	window.location='http://terratechnica.in/instat.php?req='+res.data
      		else
      			window.location='http://terratechnica.in/#/error'
      })
      // console.log(this.state.playerinfo)
    } 
  }
  handleErrors=()=>{
  		let e=this.state.user
  		let bar=true
	  	let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  	let ph=/^\d{10}$/
  	  	if(e.name===''||e.phno===''||e.email===''||e.size===''||!ph.test(e.phno)||!re.test(e.email)){
                  this.setState({required:true})
                  bar=false
	    }
	    return bar

  }
}

export default Merch;
