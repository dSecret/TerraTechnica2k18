import React, { Component } from 'react';
import '../../css/lectures.css';
// import '../../static/build/tracking-min.js'
import Logo from '../../static/faces.png'
import 'tracking'
import 'tracking/build/data/face'

class Lectures extends Component {
  render () {
    return (
      <div >
          <div className="demo-frame">
            <div className="demo-container">
              <span id="photo"><img id="imgi" src={Logo} /></span>
            </div>
          </div>
      </div>
    )
  }
  componentDidMount () {
    var tracker = new window.tracking.ObjectTracker('face')
   
    var img=document.getElementById('imgi');

    window.tracking.track(img, tracker)

    tracker.on('track', event => {
        event.data.forEach(function(rect) {
          plotRectangle(rect.x, rect.y, rect.width, rect.height);
        });
    })
    var friends = [ 'Thomas Middleditch', 'Martin Starr', 'Zach Woods' ];
    var plotRectangle = function(x, y, w, h) {
        var rect = document.createElement('div');
        var arrow = document.createElement('div');
        var input = document.createElement('input');
        input.value = friends.pop();
        rect.onclick = function name() {
          input.select();
        };
        arrow.classList.add('arrow');
        rect.classList.add('rect');
        rect.appendChild(input);
        rect.appendChild(arrow);
        document.getElementById('photo').appendChild(rect);
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
    };
}

}

export default Lectures;
