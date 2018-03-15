import React, { Component } from 'react';
import '../../../css/registered.css';
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
      			<div className="main-tit" style={{color:'red'}}>Oops! Something went wrong.</div>
      			<div className="sub-tit">
      					<ul>
      						<li>Try again.</li>
      						<li>Try using Firefox browser or Chrome browser</li>
      					</ul>
      			</div>
		  		<div className="goback">
		  			<div className="firstdiv">Go back</div>
		          <Link to={this.props.location.query.req}>
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
