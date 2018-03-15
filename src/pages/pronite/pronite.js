import React, { Component } from 'react';
import '../../css/pronite.css';
import {Card,CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Back from '../../static/sunburn2.png'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import axios from 'axios'

const style={
      marginBottom:"30px"
}
const styles = {
      marginLeft:"30px"
};

class Pronite extends Component {
      constructor(props) {
      super(props);
      this.state = {
        open: false,
        user:{}
      };
    }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Register"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div className="Pronite">
     {/* <img src={require('../../static/sunburn.jpg')} className="image" alt="sunburn"/>
      <br/>  Coming Soon...*/}
      <div className="sonar-wrapper">
        <div className="sonar-emitter">
            <div className="sonar-wave" id="sonarwave1">
            </div>
            <div className="sonar-wave" id="sonarwave2">
            </div>
            <div className="sonar-wave" id="sonarwave3">
            </div>
            <div className="sonar-wave" id="sonarwave3">
            </div>
            <div className="sonar-wave" id="sonarwave4">
            </div>
            <div className="sonar-wave" id="sonarwave5">
            </div>
            {/*<div className="sonar-wave" id="sonarwave8">
            </div>
            <div className="sonar-wave" id="sonarwave9">
            </div>*/}
           {/* <di
           v className="sonar-wave" >
            </div>*/}
            {/*<img src={require('../../static/sunburn.jpg')} className="image" alt="sunburn"/>*/}
           <div className="sonar-button-wrap"
                style={{backgroundImage:`url(${Back})`,backgroundPosition: 'center',backgroundRepeat:"no-repeat"}}
           >
              {/*<img src={require('../../static/sunburn.jpg')} className="image" alt="sunburn"/>*/}
              <RaisedButton label="Register" secondary={true} style={style} onClick={this.handleOpen}/>
           </div>
        </div>
      </div>
        <Dialog
          title="Register"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
              <form>
                  <TextField 
                      name="name"
                      hintText="Name" 
                      onChange={(eve)=>this.handleInput(eve)}
                      style={styles}
                  />
                  <TextField 
                      name="email" 
                      hintText="Email"
                      onChange={(eve)=>this.handleInput(eve)}
                      style={styles}
                  />
                  <TextField 
                      name="phno" 
                      hintText="Phoneno(+91)"
                      onChange={(eve)=>this.handleInput(eve)}
                      style={styles}
                  />
                  <TextField 
                      name="collg" 
                      hintText="College"
                      onChange={(eve)=>this.handleInput(eve)}
                      style={styles}
                  />
              </form>
        </Dialog>
{/*  <Card style={{margin:'20px 0'}}>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>*/}
    <div className="main-margin"></div>

      </div>
    );
  }
  handleAnimation=()=>{
      let x=document.getElementsByClassName("sonar-wave");
        for(let i=0;i<x.length;i++){
                x[i].addEventListener("webkitAnimationIteration oanimationiteration animationiteration",
                      function(){
                        x[i].css("background-color", 'red');
                      })
          }
  }
  colorize=()=>{
      var hue = Math.random() * 360;
      return "HSL(" + hue + ",100%,50%)";
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  }
  handleInput=(e)=>{
      let bar =this.state.user
          bar[e.target.name]=e.target.value
          this.setState({user:bar})
  }
  handleErrors=()=>{
      let bar=true
      let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let ph=/^\d{10}$/
      let e=this.state.user
          if(e.name===''||e.email===''||e.phno||!ph.test(e.phno)||!re.test(e.email)){
              this.setState({required:true})
              bar=false
          }
          return bar
  }
  handleSubmit=()=>{
    if(this.handleErrors()){
        this.handleClose()
        console.log(this.state.user)
    }
  }

}

export default Pronite;
