import React, { Component } from 'react'
// import threelib from 'three-js'
import earthbg from './../static/cat2.jpg'
import * as THREE from 'three'

import matrix_icon from '../static/matrix.png'
import gear_icon from '../static/gear.png'
import misc_icon from '../static/misc.png'
import informal_icon from '../static/informal_icon.png'

// let THREE = threelib();

const canvasStyle={}

export default class backgroundCanvasComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			deg1: 0,
			deg2: 0,
			mouseDown: false
		}
		this.t = 0
		this.start = this.start.bind(this)
		this.stop = this.stop.bind(this)
		this.animate = this.animate.bind(this)
	
	}

	componentDidMount() {
		
		const width = this.mount.clientWidth
		const height = this.mount.clientHeight
	
		this.clock = new THREE.Clock()

		// RENDERER
		var renderer = new THREE.WebGLRenderer({
			canvas: this.refs.globe_canvas,
			antialias: true
		});
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		// CAMERA
		var cameraDistFromCenter = 1000;
		this.cameraDistFromCenter = cameraDistFromCenter
		var camera = new THREE.PerspectiveCamera(
			35, window.innerWidth / window.innerHeight, 0.1, 5000
		);
		camera.position.z = cameraDistFromCenter;
		camera.position.y = 0;

		//SCENE
		var scene = new THREE.Scene();

		//LIGHTS
		var light = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(light);

		var lightPoint = new THREE.PointLight(0xffffff, 0.5);
		scene.add(lightPoint);


		// MATERIAL

		// GEOMERTY
		var particleCount = 4000;
		var particleProps = [
			{
				dist: 3000,
				color: 0xffffff
			},
			{
				dist: 3500,
				color: 0x2f2f2f
			}
		];
		var particleSize = 3;
		for (var i = 0; i < particleCount; i++) {
		
			particleProps.forEach(prop => {
				var geom = new THREE.SphereGeometry(0.1 + (Math.random() * particleSize));
				var mate = new THREE.MeshPhongMaterial({
					color: prop.color,
					specular: 0xffffff,
					shininess: 100
				});
				var mesh2 = new THREE.Mesh(geom, mate);
				var rdeg = 2 * Math.PI * Math.random()
				mesh2.position.x = prop.dist * Math.cos((180/Math.PI) * rdeg);
				mesh2.position.z = prop.dist * Math.sin((180/Math.PI) * rdeg);
				var maxHeight = window.innerHeight* 2;
				mesh2.position.y = Math.random() * (maxHeight * 2) - maxHeight;
				scene.add(mesh2);
			})
		}

		this.renderer = renderer;
		this.scene = scene;
		this.camera = camera;


		this.mount.appendChild(this.renderer.domElement)
		this.start()

	}

	setMouseEventListeners() {
	
		this.mousePos = new THREE.Vector3();

		this.refs.globe_canvas.addEventListener('mousemove', (e) => {
			
			e.preventDefault()

			// this.mousePos.x = e.clientX
			// this.mousePos.y = e.clientY

			this.mousePos.x = 2 * ( e.clientX /   this.refs.globe_canvas.width ) - 1
			this.mousePos.y = 1 - 2 * ( e.clientY / this.refs.globe_canvas.height )

		}, false)

		window.addEventListener('mousedown', e => {
			console.log(this.mousePos)
			this.clickEvents2d()
		})
	}

	componentWillUnmount() {
		this.stop()
		this.mount.removeChild(this.renderer.domElement)
	}

	start() {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate, 1000/60)
		}
		console.log(this.mount)
	}

	stop() {
		cancelAnimationFrame(this.frameId)
	}

	animate() {
		this.renderScene()	
		this.frameId = requestAnimationFrame(this.animate, 1000/60)
	}

	renderScene() {
		this.renderer.render(this.scene, this.camera)

	}

	render() {
		return (
			<div
				ref={(mount) => { this.mount = mount }} 
				style={canvasStyle}
			>
				<canvas
					style={canvasStyle}
					ref="globe_canvas"
				/>
			</div>
		);
	}
}
