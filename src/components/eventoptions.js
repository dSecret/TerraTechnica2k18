import React, { Component } from 'react';
import '../css/eventoptions.css';
import { Link} from 'react-router'



class EventsOptions extends Component {
      constructor(props) {
      super(props);
      this.state = {

      };
    }

  render() {

    return (
              <div class="layer1-options-cont">
                  <div class="layer1-ic-wrap">
                      <img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="Cardicon"/>
                  </div>
                  <div class="layer1-content-back"></div>
                  <Link to={'/events/'+this.props.type+'/'+this.props.options}>
                    <div class="layer1-content-wrap comEC">
                        <div>{this.props.options}</div>               
                    </div>
                  </Link>
              </div>
    );
  }
}

export default EventsOptions;
