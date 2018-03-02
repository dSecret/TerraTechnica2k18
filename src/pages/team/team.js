import React, { Component } from 'react';
import { Link} from 'react-router'

// components imports
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/customcard.css';


class Team extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

  render() {
    return (
     <div className="team">
          <div className="main-title">Admininstration</div>
          <Link to="team/General Administration">Administration</Link>
      </div>
    );
  }
}

export default Team;
