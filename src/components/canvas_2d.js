import React, { Component } from 'react'

// icons
import matrix_icon from '../static/matrix.png'
import gear_icon from '../static/gear.png'
import misc_icon from '../static/misc.png'
import informal_icon from '../static/informal_icon.png'

const canvasStyle = {
	position: 'absolute',
	zIndex: -1,
	top: 0,
	left: 0
}

class Particle {
	constructor(props) {
		this.stars = []
		this.decel = 2
	}

	genStars(vals) {
		for (let i = 0; i < vals.count; i++) {
			let size = Math.random() * 1.2 + 0.2
			this.stars.push({
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				size: size,
				vel: {
					x: Math.random() * 0.5 + 0.1,
					y: Math.random() * 0.5 + 0.1
				},
				bubble: false,
				minSize: size
			})
		}
	}

	pushAllStars(pushVector) {
		this.stars.map(s => {
			s.vel = pushVector
		})
	}

	newStars(startPos, count) {
		for (let i = 0; i < count; i++) {
			let size = Math.random() * 1.2 + 0.2
			let deg = Math.random() * (2 * Math.PI)
			this.stars.push({
				x: startPos.x,
				y: startPos.y,
				size: size * 3,
				vel: {
					x: (Math.random() * 4 + 1) * Math.cos(deg),
					y: (Math.random() * 4 + 1) * Math.sin(deg)
				},
				bubble: false,
				minSize: size
			})
		}
	}

	bubbleStar(mousePos, range) {
		this.stars = this.stars.map(s => {
			if (Math.sqrt(Math.pow(mousePos.x - s.x, 2) + Math.pow(mousePos.y - s.y, 2)) < range) {
				s.bubble = true
			} else {
				s.bubble = false
			}

			return s
		})
	}

	breathStar(maxVal) {
		this.stars = this.stars.map(s => {
			if (s.bubble) {
				s.size = s.size < maxVal ? s.size + s.minSize : maxVal
			} else {
				s.size = s.size > s.minSize ? s.size - s.minSize : s.minSize
			}

			return s
		})
	}

	draw(ctx) {
		this.stars.forEach(s => {
			ctx.beginPath()
			ctx.arc(s.x, s.y, s.size, 0, 2 * Math.PI)
			ctx.fill()
		})
		this.breathStar(5)
		this.stars.map(s => {
			s.x += s.vel.x
			s.y += s.vel.y
			s.x %= window.innerWidth
			s.y %= window.innerHeight
			if (s.x < 0) {
				s.x = window.innerWidth
			}
			if (s.y < 0) {
				s.y = window.innerHeight
			}
			if (s.vel.x > 0) {
				s.vel.x -= this.decel
			}
			if (s.vel.y > 0) {
				s.vel.y -= this.decel
			}
			s.bubble = false
		})
	}

	removeExcess(threshold) {
		if (this.stars.length > threshold) {
			for (let i = 0; i < this.stars.length - threshold; i++) {
				this.stars.shift()
			}
		}
	}
}

export default class backgroundCanvasComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			prevPushVector: {
				x: Math.random() * 2 + 1,
				y: Math.random() * 2 - 1
			}
		}
		this.updateCanvas = this.updateCanvas.bind(this)
		this.Particle = new Particle()

		let centralOffset = 70
	}

	componentDidMount() {
		this.updateCanvas()
		this.Particle.genStars({ count: window.innerWidth * window.innerHeight / 1e4 })
		// TODO Logic for stars interact with mouse

		window.addEventListener(
			'touchstart',
			e => {
				this.Particle.newStars({ x: e.touches[0].clientX, y: e.touches[0].clientY }, 10)
			},
			false
		)

		window.addEventListener('mousedown', e => {
			this.Particle.newStars({ x: e.clientX, y: e.clientY }, 50)
		})



		window.addEventListener('mousemove', e => {
			this.Particle.bubbleStar({x: e.clientX, y: e.clientY}, 150)
		}, false)

		window.addEventListener('resize', () => {
			this.refs.globe_canvas.width  = window.innerWidth;
			this.refs.globe_canvas.height = window.innerHeight;
			this.Particle.stars = []
			this.Particle.genStars({ count: 900 })
			const ctx = this.refs.globe_canvas.getContext('2d');	
			ctx.fillStyle = '#000'
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
		}, false)
	}

	updateCanvas() {
		const ctx = this.refs.globe_canvas.getContext('2d')
		ctx.fillStyle = '#000'
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
		ctx.fillStyle = '#f2f2f2'
		this.Particle.draw(ctx)
		this.Particle.removeExcess(900)

		window.requestAnimationFrame(this.updateCanvas, 1000 / 60)
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
		)
	}
}
