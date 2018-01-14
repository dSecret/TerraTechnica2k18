import React, { Component } from 'react';

// css impoorts
import '../css/eventscard.css';
import Background from '../static/images3.jpg';
import { Link} from 'react-router'

// custom modules import
var sectionStyle={
  backgroundImage:`url(${Background}`
}


class EventsCard extends Component {
  render() {
    return (
      <Link to={this.props.lin}>
        <div className="EventsCard comEC" style={sectionStyle}>
            <div className="icon-wrap comEC">
              <div className="comEC">
                <div className="comEC animDiv">
                  <img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="Cardicon"/>
                </div>
              </div>
            </div>
            <div className="title-wrap comEC">
                {this.props.title}
            </div>
        </div>
      </Link>
    );

  }
}

export default EventsCard;
