import React, { Component } from 'react';
import '../css/eventoptions.css';
import { Link} from 'react-router'


class EventsOptions extends Component {
      constructor(props) {
      super(props);
      this.state = {
        animate:false
      };
    }
  // componentWillReceiveProps(){
  //         this.setState({ animate: false },()=>{
  //       this.setState({ animate: true })
  //   });
  // }
  render() {
    return (
              <div className="layer1-options-cont">
                  <div className="layer1-ic-wrap">
                      <img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="Cardicon"/>
                  </div>
                  <div className="layer1-content-back"></div>
                  <Link to={'/events/'+this.props.type+'/'+this.props.options}>
                    <div className="layer1-content-wrap comEC">
                        <div className={this.state.animate?'layer1-content-wrap-div':''}>
                            {this.props.options}
                        </div>               
                    </div>
                  </Link>
              </div>
    );
  }
  componentWillMount() {
    this.setState({ animate: false },()=>{
        this.setState({ animate: true })
    });
  }
  // componentDidUnmount() {
  //   this.setState({ animate: false });
  // }
}

export default EventsOptions;
