import React, { Component } from 'react';
import '../../css/merch.css';
// import '../../static/build/tracking-min.js'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios'
const style = {
  margin: "12px 20px",
};
const style2 = {
  margin: 12,
};
const items = [
  <option key={0} disabled>Size</option>,
  <option key={1} value={"S"} >S</option>,
  <option key={2} value={"M"} >M</option>,
  <option key={3} value={"L"}>L</option>,
  <option key={4} value={"XL"}>XL</option>,
  <option key={5} value={"XXL"}>XXL</option>
];

class Merch extends Component {
      constructor(props) {
      super(props);
      this.state = {
      		user:{size:"S"},
      		required:false,
      		value:"S"
      };
    }

  handleChange2 = (event, index, value) => {
  	let bar=this.state.user
  		bar.size=value
  	this.setState({user:bar}) 
 }
  render () {
    return (
      <div className="Merch">
      		<div className="main-wrap-merch" align="center">
				<div id="side-1" className="flip">
				    <img src={require('../../static/tfront.png')} alt="front"/>
				</div>
				<div id="side-2" className="flip">
				    <img src={require('../../static/tback.png')} alt="back"/>
				</div>
				<div className="button-wrap">
					<div className="custom-butt" id="up"><div id="upin" className="click-back"></div></div>
					<div className="custom-butt"id="down"><div id="downin"></div></div>
				</div>
      		</div>
      		<div className="intro-wrap">
      			Grab one for ₹ 200 only, hurry!
      		</div>
      		<div className="main-form-merch">
      			<div className="heading">Place your order here! </div>
                <select
		          defaultValue={this.state.value}
		          onChange={this.handleChange}
		          style={style}
		          name="size"
		        >
		          {items}
		        </select><br/>
  				<TextField 
                    name="name"
                    hintText="Name" 
                    onChange={(eve)=>this.handleChange(eve)}
                    style={style}
                />
  				<TextField 
                    name="email"
                    hintText="Email" 
                    onChange={(eve)=>this.handleChange(eve)}
                    style={style}
                />
  				<TextField 
                    name="phno"
                    hintText="PhoneNumber" 
                    onChange={(eve)=>this.handleChange(eve)}
                    style={style}
                />
                <br/>
                {
                	this.state.required?
                	<div className="warnings">**Required fields can not be empty or invalid entry</div>
                	:''
                }

	            <RaisedButton 
	                label="Order" 
	                primary={true} 
	                style={style2} 
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
  handleUp=()=>{
		document.getElementById( 'up' ).addEventListener( 'click', function( event ) {
		    
		    event.preventDefault();
		    document.getElementById( 'side-2' ).className = 'flip ';
		    document.getElementById( 'side-1' ).className = 'flip';
		    document.getElementById( 'upin' ).className = 'click-back';
		    document.getElementById( 'downin' ).className = '';
		} );

		document.getElementById( 'down' ).addEventListener( 'click', function( event ) {
		    
		    event.preventDefault();
		    document.getElementById( 'side-2' ).className = 'flip flip-side-1';
		    document.getElementById( 'side-1' ).className = 'flip flip-side-2';
		    document.getElementById( 'upin' ).className = '';
		    document.getElementById( 'downin' ).className = 'click-back';		    
		});

  }
  handleSubmit=()=>{
    if(this.handleErrors()){
      axios({
        method:'post',
        url:`${window.location.origin}/ts.php`,
        data:this.state.user
      }).then(res=>{
              if(res.status===200)
                  window.location='http://terratechnica.in/instat.php?req='+res.data
              else
                window.location='https://terratechnica.in/#/error?req=/merchandise'
      }).catch(res=>{
                window.location='https://terratechnica.in/#/error?req=/merchandise'
      })
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
  componentDidMount(){
  	this.handleUp()
  }
}

export default Merch;
