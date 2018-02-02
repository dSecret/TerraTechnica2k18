import React, { Component } from 'react';


import '../css/FooterMenu.css';

class FooterMenu extends Component {
  render() {
    return (
        <div className="FooterMenu-wrapper">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-google"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-youtube"></a>
            <a href="#" className="fa fa-instagram"></a>
        </div>
    );
  }
}


export default FooterMenu;
