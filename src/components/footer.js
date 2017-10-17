import React, { Component } from 'react';


import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-wrapper">
          <div style={{backgroundColor: '#3B3C36'}}>
              <div className="left-footer">
                  <div className="left-footer-title">Address
                  </div>
                  <div className="left-footer-content">
                      National Institute of Technology Delhi,<br/>
                      A-7, Institutional Area, Near Satyawadi<br/>
                      Raja Harish Chandra Hospital,<br/>
                      Narela, Delhi, 110040,<br/> 
                  </div>
                  <div className="left-footer-title">Contacts
                  </div>
                  <div className="left-footer-content">
                      Email : terratechnica@nitdelhi.ac.in<br/>
                      Phone no. : (0551)-110040 ,  (0551)-673541<br/> 
                  </div>
              </div>
              <div className="right-footer">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.430767469776!2d77.10345928463305!3d28.842982131809055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational+Institute+of+Technology+Delhi!5e0!3m2!1sen!2sin!4v1508233541308" 
                                            width="100%" height="200" 
                                            frameborder="0" 
                                            style={{border:"0"}} 
                                            allowfullscreen
                                    >
                                    </iframe>
              </div>
          </div>
          <div className="footer-follow-cont">
                Follow us On
          </div>
          <div className="copyright">
            Copyright 2018.<br/> Made with {`<3`} by Team ShadowRoot, BootError & dDark 
          </div>
        </div>
    );
  }
}

export default Footer;
