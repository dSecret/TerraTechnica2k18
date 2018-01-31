import React, { Component } from 'react';


import '../css/FooterMenu.css';

class FooterMenu extends Component {
  render() {
    return (
        <div className="FooterMenu-wrapper">
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


export default FooterMenu;
