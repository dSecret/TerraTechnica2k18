import React, { Component } from 'react';
import { Link} from 'react-router'

// components imports
import Profilecard from '../../components/profilecard.js'
// css imports
import '../../css/customcard.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowDown from 'material-ui/svg-icons/maps/near-me';
// custom modules import

const style = {
};

const iconStyle={
  paddingTop:"1px"
}

class Team extends Component {
    constructor(props) {
      super(props);
      this.state = {
        team:[
            'General Administration',
            'Public Relations',
            'Marketing',
            'Event Management',
            'General Welfare',
            'Design',
            'IT Support',
            'Logistics'
        ]
      };
    }

  render() {
    const team=this.state.team.map(e=>{
                return (
                    <div className="team-type" align="center">
                      {e}
                      <Link to={'team/'+e}>
                        <FloatingActionButton style={style} 
                                              mini={true} 
                                              iconStyle={iconStyle} 
                                              zDepth={1}
                                              >
                               <ArrowDown />
                        </FloatingActionButton>
                      </Link>
                    </div>
                  )
    })
    return (
     <div className="team">
          {team}
      </div>
    );
  }
}

export default Team;
