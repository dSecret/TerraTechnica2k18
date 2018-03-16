import React, { Component } from 'react';

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
          <div className="cmnContact addContact cmnnContact">
                <div className="cmnnContact">
                    <h3>Address</h3>
                    <p className="cmnnContact"> National Institute of Technology Delhi,<br/>
                      A-7, Institutional Area, <br/>Near - Satyawadi
                      Raja Harish Chandra Hospital,<br/>
                      Narela, New Delhi,<br/> 110040.<br/> </p>
                </div>
          <div  id="iframewrap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.430767469776!2d77.10345928463305!3d28.842982131809055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational+Institute+of+Technology+Delhi!5e0!3m2!1sen!2sin!4v1508233541308" 
                     width="100%" height="100%" 
                     frameBorder="0" 
                     style={{border:"0"}} 
                     allowFullscreen
              >
              </iframe>
          </div>
          </div>    
          <div className="cmnContact addContact">
            <div className="cmnnContact">
                <h3>Contact</h3>
               <p> 
                Phone no. : <br/>
                  <ul>
                    <li>General Info.<br/>(+91)-87430 68185 ,</li>
                    <li>Sponsorships<br/>(+91)-91581 21986</li>
                    <li>Robotics<br/>(+91)-72890 17595</li>
                    <li>Coding<br/>(+91)-88022 20624</li>
                    <br/>
                  </ul>
                Email : 
               <ul>
                    <li>General Info.<br/>terratechnica@nitdelhi.ac.in ,</li>
                    <li>Sponsorships<br/>sponsorships@nitdelhi.ac.in ,</li>
                    <li>Workshops & Student Queries<br/>campusrelations@nitdelhi.ac.in ,</li>
                    <br/>
                  </ul>
               
                </p>
            </div>
          </div> 

      </div>
    );
  }
}

export default Contact;
