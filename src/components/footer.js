import React, { Component } from 'react';


import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-wrapper">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
    );
  }
}

export default Footer;
