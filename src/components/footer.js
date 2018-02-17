import React, { Component } from 'react';


import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-wrapper">
            <a href="https://www.facebook.com/terratechnica/" className="fa fa-facebook"></a>
            <a href="https://www.youtube.com/watch?v=mDUVf8YUVnQ" className="fa fa-youtube"></a>
            <a href="https://www.instagram.com/terratechnica/" className="fa fa-instagram"></a>
        </div>
    );
  }
}

export default Footer;
