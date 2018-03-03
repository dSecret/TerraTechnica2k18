import React, { Component } from 'react';
import '../../../css/registered.css';
// import '../../static/build/tracking-min.js'
import {Link} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowDown from 'material-ui/svg-icons/maps/near-me';

const style = {
};

const iconStyle={
  paddingTop:"1px"
}

class Registered extends Component {
  render () {
    return (
      <div className="Registered">
      		<div className="wrap-register">
      			<div className="main-tit">Registration Successful !!</div>
      			<div className="sub-tit">Category : {this.props.location.query.category}</div>
      			<div className="sub-tit">Event : {this.props.location.query.event}</div>
		  		<div className="goback">
		  			<div className="firstdiv">Go back to events</div>
		          <Link to="/events">
		            <FloatingActionButton style={style} 
		                                  mini={true} 
		                                  iconStyle={iconStyle} 
		                                  zDepth={1}
		                                  >
		                   <ArrowDown />
		            </FloatingActionButton>
		          </Link>
		  		</div>
      		</div>

      </div>
    )
  }

}

export default Registered;
