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

const deg = {
	NINETY: Math.PI/2,
	ONEEIGHTY: Math.PI
}

const transformations = {
	rotate: (coords, deg) => {
		return {
			x: (coords.x * Math.cos(deg)) - (coords.y * Math.sin(deg)),
			y: (coords.y * Math.sin(deg)) + (coords.x * Math.cos(deg))
		}
	},
	translate: (coords, h, k) => {
		return {
			x: coords.x + h,
			y: coords.y + k
		}
	}
}

console.log(transformations.rotate({x: 1, y: 0}, deg.ONEEIGHTY))

class Orbit {
	
	constructor(a, b, rot, moveRate, image_src, offset) {
	
		this.params = {
			a: a,
			b: b,
			moveRate: moveRate,
			rot: rot
		}
		this.deg = offset

		this.image = new Image()
		this.image.src = image_src
	}

	plotEllipse(deg) {
		return {
			x: this.params.a * Math.cos(deg),
			y: this.params.b * Math.sin(deg)
		}
	}

	draw(ctx) {
	
		let coords = transformations.translate(
				this.plotEllipse(this.deg),
			window.innerWidth/2 - 25,
			window.innerHeight/2 - 25
		)
		
		/*
		ctx.fillStyle = this.fillStyle
		ctx.beginPath()
		ctx.arc(
			coords.x, 
			coords.y, 
			10, 
			0, 
			2 * Math.PI
		)
		ctx.fill()
		*/

		ctx.drawImage(this.image, coords.x, coords.y, 50, 50)


		this.deg += this.params.moveRate
		this.deg %= 2 * Math.PI
	}
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
				size: Math.random() * 2 + 0.2,
				vel: {
					x: 0,
					y: 2
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
				x: 0,
				y: 0
			}
		}
		this.updateCanvas = this.updateCanvas.bind(this)
		this.Particle = new Particle()

		let centralOffset = 70
		this.orbit1 = new Orbit(100 + centralOffset, 100 + centralOffset, 0, Math.PI/400, matrix_icon, 0)
		this.orbit2 = new Orbit(150 + centralOffset, 150 + centralOffset, deg.NINETY/2, Math.PI/500, misc_icon, deg.NINETY)
		this.orbit3 = new Orbit(200 + centralOffset, 200 + centralOffset, 20, Math.PI/700, informal_icon, 0)
		this.orbit4 = new Orbit(250 + centralOffset, 250 + centralOffset, 90, Math.PI/900, gear_icon, deg.NINETY/2)
	}

	componentDidMount() {
		this.updateCanvas()
		this.Particle.genStars({count: 200})
		// TODO Logic for stars interact with mouse
		/*
		 * window.addEventListener('mousemove', e => {
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
		this.orbit1.draw(ctx)
		this.orbit2.draw(ctx)
		this.orbit3.draw(ctx)
		this.orbit4.draw(ctx)
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
