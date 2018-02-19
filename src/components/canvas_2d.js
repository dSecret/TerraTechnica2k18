import React, { Component } from 'react'

// icons
import matrix_icon from '../static/matrix.png'
import gear_icon from '../static/gear.png'
import misc_icon from '../static/misc.png'
import informal_icon from '../static/informal_icon.png'

const canvasStyle = {
	"position": "absolute",
	"zIndex": -1,
	"top": 0,
	"left": 0
}

class Particle {
	
	constructor(props) {
		this.stars = []
		this.decel = 2
	}

	genStars(vals) {
		for(let i = 0; i < vals.count; i++) {
			this.stars.push({
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				size: Math.random() * 1.2 + 0.2,
				vel: {
					x: Math.random() * 2 + 1,
					y: Math.random() * 2 + 1,
				}
			});
		}
	}

	pushAllStars(pushVector) {

		this.stars.map(s => {
			s.vel = pushVector;
		})
		
	}

	draw(ctx) {
		this.stars.forEach(s => {
			ctx.beginPath()
			ctx.arc(s.x, s.y, s.size, 0, 2 * Math.PI)
			ctx.fill()
		})
		this.stars.map(s => {
			s.x += s.vel.x
			s.y += s.vel.y
			s.x %= window.innerWidth
			s.y %= window.innerHeight
			if (s.x < 0) { s.x = window.innerWidth }
			if (s.y < 0) { s.y = window.innerHeight }
			if (s.vel.x > 0 ) { s.vel.x -= this.decel }
			if (s.vel.y > 0 ) { s.vel.y -= this.decel }
		})
	}
}

export default class backgroundCanvasComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			prevPushVector: {
				x: Math.random() * 2 + 1,
				y: Math.random() * 2 - 1,
			}
		}
		this.updateCanvas = this.updateCanvas.bind(this)
		this.Particle = new Particle()

		let centralOffset = 70
	}

	componentDidMount() {
		this.updateCanvas()
		this.Particle.genStars({count: 900})
		// TODO Logic for stars interact with mouse
		
		/* window.addEventListener('mousemove', e => {
			let distVec = {
				x: (e.clientX - this.state.prevPushVector.x),
				y: (e.clientY - this.state.prevPushVector.y)
			}
			let pushVelocity = {
				x: Math.sqrt(2 * 3 * Math.abs(distVec.x)),
				y: Math.sqrt(2 * 3 * Math.abs(distVec.y))
			}
			this.Particle.pushAllStars(pushVelocity)
			this.setState({
				prevPushVector: {
					x: e.clientX,
					y: e.clientY
				}
			})
			console.log(pushVelocity)
		}, false)
		*/
		window.addEventListener('resize', () => {
			this.Particle.stars = []
			this.Particle.genStars({ count: 200 })
			const ctx = this.refs.globe_canvas.getContext('2d');	
			ctx.fillStyle = '#000'
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

		}, false)
	}

	updateCanvas() {
		const ctx = this.refs.globe_canvas.getContext('2d');	
		ctx.fillStyle = '#000'
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
		ctx.fillStyle = '#f2f2f2'
		this.Particle.draw(ctx)
		window.requestAnimationFrame(this.updateCanvas, 1000/60)
	}

	render() {
		return (
			<canvas
				className="globe_canvas"
				ref="globe_canvas" 
				width={window.innerWidth}
				height={window.innerHeight}
				style={canvasStyle}
			/>
		);
	}
}
