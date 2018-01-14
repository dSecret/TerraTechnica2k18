import React, { Component } from 'react';
import {Link} from 'react-router'

// components imports
// css imports
import '../../css/contact.css';


class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
        prevIndex:0
      };
    }
  render() {
    return (
     <div className="Contact">
          <div className="cmnContact">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.430767469776!2d77.10345928463305!3d28.842982131809055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational+Institute+of+Technology+Delhi!5e0!3m2!1sen!2sin!4v1508233541308" 
                     width="100%" height="250" 
                     frameborder="0" 
                     style={{border:"0"}} 
                     allowfullscreen
              >
              </iframe>
          </div>
          <div className="cmnContact addContact">
                    <h3>Address</h3>
                    <p> National Institute of Technology Delhi,<br/>
                      A-7, Institutional Area, Near Satyawadi<br/>
                      Raja Harish Chandra Hospital,<br/>
                      Narela, Delhi, 110040,<br/> </p>
          </div>    
          <div className="cmnContact addContact">
              <h3>Contact</h3>
             <p> Email : terratechnica@nitdelhi.ac.in<br/>
              Phone no. : (0551)-11004  0 ,  (0551)-673541<br/>
              </p>
          </div> 
      </div>
    );
  }
}

export default Contact;
