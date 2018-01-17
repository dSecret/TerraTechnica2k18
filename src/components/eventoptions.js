import React, { Component } from 'react';
import '../css/eventoptions.css';



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
                  <div class="layer1-content-wrap comEC">
                      <div>{this.props.options}</div>               
                  </div>
              </div>
    );
  }
}

export default EventsOptions;
