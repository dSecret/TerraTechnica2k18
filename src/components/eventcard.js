import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// css impoorts
import '../css/events.css';

// custom modules import

class EventsCard extends Component {
  render() {
    return (
      <div className="Events">
      		<div className="event-card-cont">
	            <Card>
				    <CardHeader
				      title="URL Avatar"
				      subtitle="Subtitle"
				      avatar={require("../static/manavatar.png")}
				    />
				    <CardMedia
				      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
				    >
				      <img src={require('../static/ece.png')} alt="" />
				    </CardMedia>
				    <CardTitle title="Card title" subtitle="Card subtitle" />
				    <CardText>
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				    </CardText>
				    <CardActions>
				      <FlatButton label="Action1" />
				      <FlatButton label="Action2" />
				    </CardActions>
				</Card>
			</div>
      </div>
    );
  }
}

export default EventsCard;
