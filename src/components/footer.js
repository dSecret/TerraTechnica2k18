import React, { Component } from 'react';

import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-wrapper">
            <a target="_blank" href="https://www.facebook.com/terratechnica/" className="fa fa-facebook"></a>
            <a target="_blank" href="https://www.twitter.com/terra_technica" className="fa fa-twitter"></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCu_VU5msojoy4qL46y03hDQ" className="fa fa-youtube"></a>
            <a target="_blank" href="https://www.instagram.com/terratechnica/" className="fa fa-instagram"></a>
        </div>
    );
  }
}

export default Footer;
