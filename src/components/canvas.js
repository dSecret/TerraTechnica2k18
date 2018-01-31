import React, { Component } from 'react'
import w_logo from '../static/Terra Technica 18 White.png'
import b_logo from '../static/Terra Technica 18 Black.png'

import'../css/canvas.css'

const make_stars = (count, tw, th) => {

    let star = new Path2D();
	for (let i = 0; i < count; i++) {

		let posX = Math.random() * tw;
		let posY = Math.random() * th;
		let radius = Math.random() * 2.5;

		star.rect(posX, posY, radius, radius)
	}

	return star
}
const canvasStyle={"position":"absolute","zIndex":-1,"top":0,"left":0}

export default class backgroundCanvasComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			logo_trans: {
				x: 0,
				y: 0
			},
			stars: new Path2D(),
			// logos: this.loadLogo()
		}
	}

	componentDidMount() {
		
		this.setState({ stars: make_stars(700, this.refs.background_cnvs.width, this.refs.background_cnvs.height) })
		this.updateCanvas();
		
		window.onresize = () => {
			this.refs.background_cnvs.height = window.innerHeight
			this.refs.background_cnvs.width = window.innerWidth
			this.stars = make_stars(700, this.refs.background_cnvs.width, this.refs.background_cnvs.height)
		}

		window.addEventListener('devicemotion', (evt) => {
		
			this.setState({
				logo_trans: {
					x: this.state.logo_trans.x + evt.rotationRate.beta * 0.002,
					y: this.state.logo_trans.y + evt.rotationRate.alpha * 0.002,
				}
			})

		}, false)
	}

	// loadLogo() {
		
	// 	let white_logo = new Image();
	// 	let black_logo = new Image();

	// 	let wh_img_w = 320;
	// 	let wh_img_h = 200;

	// 	let bl_img_w = wh_img_w
	// 	let bl_img_h = wh_img_h

	// 	white_logo.src = w_logo
	// 	black_logo.src = b_logo

	// 	return {
	// 			white: {
	// 				w: wh_img_w,
	// 				h: wh_img_h,
	// 				img: white_logo
	// 			},
	// 			black: {
	// 				w: bl_img_w,
	// 				h: bl_img_h,
	// 				img: black_logo
	// 			}
	// 		}
	// }

	updateCanvas() {
		const ctx = this.refs.background_cnvs.getContext("2d");
		ctx.fillStyle = 'black'
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
		ctx.fillStyle = "white"
		ctx.fill(this.state.stars)

		// const wl = this.state.logos.white
		// ctx.drawImage(wl.img, 
		// 		window.innerWidth/2 - wl.w/2, 
		// 		window.innerHeight/4 - wl.h/2, 
		// 		wl.w, wl.h
		// );

		/* const bl = this.state.logos.black
		ctx.drawImage(bl.img, 
				this.state.logo_trans.x + window.innerWidth/2 - bl.w/2, 
				this.state.logo_trans.y + window.innerHeight/2 - bl.h/2, 
				bl.w, bl.h
		);*/
		// ctx.translate(this.state.logo_trans.x, this.state.logo_trans.y)
		window.requestAnimationFrame(() => { this.updateCanvas() }, 1000/30)
	}

	render() {
		return (
			<canvas
				className="backgnd_cnvs"
				ref="background_cnvs" 
				width={window.outerWidth}
				height={window.outerHeight}
				style={canvasStyle}
			/>
		);
	}
}
