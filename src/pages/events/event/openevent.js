import React, { Component } from 'react';

import'../../../css/openevent.css'
import Db from '../../../static/content.js'
// import Background from '../../../static/opBack.png';
import RaisedButton from 'material-ui/RaisedButton';
import { Link} from 'react-router'

// Parent Component
var sectionStyle={
  // backgroundImage:`url(${Background}`
}
const style = {
  margin: 12,
};
class OpenEvent extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
		  d:{},
      category:''
  	};
  }
  // var foo=Db.this.props.params.id
  render() {

    var foo=this.props.params.id
    var bar=Db[foo]
    var options=bar.rules1.map((item,index)=>{
            return(
                            <li key={index} dangerouslySetInnerHTML={{__html:item}}/>
              )
    })
    var ps=null;
    if(bar.ps!==''){
      ps =<div className="rules" >
                  <div>Problem Statement :</div>
                  <div dangerouslySetInnerHTML={{__html:bar.ps}}/>
          </div>
    }
    var round1=null;
    var round2=null;
    var options2=null;
    if(bar.rules2.length){
      round1=<div className="round">Round 1</div>
      round2=<div className="round">Round 2</div>
      var foo=bar.rules2.map((item,index)=>{
              return(
                            <li key={index}dangerouslySetInnerHTML={{__html:item}}/>
                )
      })
      var options2=<div>
                    <ul>
                     {foo}
                    </ul>  
                  </div>
    }
    var introoptions=null;
    if(bar.intropoints.length){
      var foo=bar.intropoints.map((item,index)=>{
          return(<li key={index} dangerouslySetInnerHTML={{__html:item}}/>)
      })
      introoptions=<div className="introoptions">
                        <ul>
                          {foo}
                        </ul>
                    </div>
    }
    return (
      <div className="OpenEvent" style={sectionStyle}>
             <div className="title comOE">{this.props.params.id}</div>
             <div className="img-cont comOE">
                <img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="icon"/>
              </div>
             <div className="intro comOE">{bar.intro}</div>
              {introoptions}
              {ps}
             <div className="rules">
                  {bar.rules1.length ?
                    <div>Rules :</div>
                    :''
                  }
                  {round1}
                  <div>
                    <ul>
                     {options}
                    </ul>  
                  </div>
                  {round2}
                  {options2}

             </div>
             {this.props.params.id!=='PAINTBALL'&&this.props.params.id!=='BULL RIDE'?
               <div className="rules">
                  <div>Registration Fee :</div>
                  <div className="fee"> <b>₹</b>  <span>{bar.fee}</span></div>
               </div>
               :''
            }
             { bar.win ?
               <div className="rules">
                    <div>Criteria for victory :</div>
                    <div>{bar.win}</div>
               </div>
               :''
             }
             <div className="alert">
                **In case of any ambiguity or controversy, 
                the decision of the coordinating committee shall be binding to all.
             </div>
             <div className="reg-cont">
                { this.props.location.pathname!=='/events/CODING/HACKATHON'?
                  <Link to={{pathname:'/register',query:{event:this.props.params.id,category:this.state.category}}}>
                    <RaisedButton 
                      label="Register" 
                      primary={true} 
                      style={style} 
                      />
                </Link>
                :
                <a href="http://www.tatainnoverse.com/tatacruciblehackathon/index.php">
                  <RaisedButton 
                        label="Register" 
                        primary={true} 
                        style={style} 
                  />
                </a>
                }
             </div>
             {/*<div>{this.state.data.title}</div>*/}
      </div>
    );
  }
  componentDidMount(){
  	this.fetchData()
    let str=this.props.location.pathname
    str=str.substring(str.lastIndexOf("/events/")+8,str.lastIndexOf("/"))
    this.setState({category:str})
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
