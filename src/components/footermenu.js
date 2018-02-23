import React, { Component } from 'react';


import '../css/FooterMenu.css';

class FooterMenu extends Component {
  render() {
    return (
        <div className="FooterMenu-wrapper">
            <a target="_blank" href="https://www.facebook.com/terratechnica/" className="fa fa-facebook"></a>
            <a target="_blank" href="https://www.twitter.com/terra_technica" className="fa fa-twitter"></a>
            <a target="_blank" href="https://www.youtube.com/watch?v=mDUVf8YUVnQ" className="fa fa-youtube"></a>
            <a target="_blank" href="https://www.instagram.com/terratechnica/" className="fa fa-instagram"></a>
        </div>
    );
  }
}


export default FooterMenu;
