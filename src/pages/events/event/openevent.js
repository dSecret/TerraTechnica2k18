import React, { Component } from 'react';
import axios from 'axios'
import'../../../css/openevent.css'
// Parent Component
class OpenEvent extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
		data:{}
  	};
  }
  render() {
    return (
      <div className="OpenEvent">
             <div>{this.props.params.id}</div>
             <div>{this.state.data.title}</div>
      </div>
    );
  }
  componentDidMount(){
  	this.fetchData()
  }
  fetchData(){
  	const base = 'https://jsonplaceholder.typicode.com';
		axios.get(base+'/posts/1').then((res)=>{
			console.log(res.data)
			this.setState({data:res.data})
		})
  }
}

export default OpenEvent;
