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
		var material = new THREE.MeshPhongMaterial({
			color: 0xff00ff,
			specular: 0xfff3f3,
			shininess: 2,
			map: new THREE.TextureLoader().load(earthbg),
			//normalMap: new THREE.TextureLoader().load(earthbg)
		});


		// GEOMERTY

		// Center Sphere
		var geometry = new THREE.SphereGeometry(100, 100, 100);
		var mesh = new THREE.Mesh(geometry, material);
		// mesh.position.z = 100;
		// scene.add(mesh);
		
		let boxSize  = 30
		let boxColor = 0xffffff


		var box1Geom = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
		var box1Material = new THREE.MeshPhongMaterial({
			color: boxColor,
			specular: 0xfff3f3,
			shininess: 2,
			map: new THREE.TextureLoader().load(gear_icon),
			//normalMap: new THREE.TextureLoader().load(earthbg)
		});
		this.box1Mesh = new THREE.Mesh(box1Geom, box1Material);
		this.box1Mesh.position.x = 100;
		this.box1Mesh.position.y = 30;
		this.box1Mesh.position.z = 30;
		scene.add(this.box1Mesh);
		
		var box2Geom = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
		var box2Material = new THREE.MeshPhongMaterial({
			color: boxColor,
			specular: 0xfff3f3,
			shininess: 2,
			map: new THREE.TextureLoader().load(matrix_icon),
			//normalMap: new THREE.TextureLoader().load(earthbg)
		});
		this.box2Mesh = new THREE.Mesh(box2Geom, box2Material);
		this.box2Mesh.position.x = 100;
		this.box2Mesh.position.y = 40;
		this.box2Mesh.position.z = 40;
		scene.add(this.box2Mesh);

		var box3Geom = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
		var box3Material = new THREE.MeshPhongMaterial({
			color: boxColor,
			specular: 0xfff3f3,
			shininess: 2,
			map: new THREE.TextureLoader().load(misc_icon),
			//normalMap: new THREE.TextureLoader().load(earthbg)
		});
		this.box3Mesh = new THREE.Mesh(box3Geom, box3Material);
		this.box3Mesh.position.x = 10;
		this.box3Mesh.position.y = 10;
		this.box3Mesh.position.z = 10;
		scene.add(this.box3Mesh);

		var box4Geom = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
		var box4Material = new THREE.MeshPhongMaterial({
			color: boxColor,
			specular: 0xfff3f3,
			shininess: 2,
			map: new THREE.TextureLoader().load(informal_icon),
			//normalMap: new THREE.TextureLoader().load(earthbg)
		});
		this.box4Mesh = new THREE.Mesh(box4Geom, box4Material);
		this.box4Mesh.position.x = 10;
		this.box4Mesh.position.y = 10;
		this.box4Mesh.position.z = 10;
		scene.add(this.box4Mesh);


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

	orbital(t) {
		let speed = 0.5
		
		this.box1Mesh.position.x = Math.cos(speed * t) * 150
		this.box1Mesh.position.y = Math.cos(speed * t) * 150
		this.box1Mesh.position.z = Math.sin(speed * t) * 150

		this.box1Mesh.rotation.x = t * 0.6;
		this.box1Mesh.rotation.y = t * 0.2;
		
		this.box2Mesh.position.x = Math.cos(speed * t) * 150
		this.box2Mesh.position.y = Math.sin(speed * t) * -150
		this.box2Mesh.position.z = Math.cos(speed * t) * 150
		
		this.box2Mesh.rotation.x = t * 0.2;
		this.box2Mesh.rotation.y = t * 0.6;

		this.box3Mesh.position.x = Math.cos(speed * t) * -150
		this.box3Mesh.position.y = Math.cos(speed * t) * 150
		this.box3Mesh.position.z = Math.sin(speed * t) * 150

		this.box3Mesh.rotation.x = t * 0.5;
		this.box3Mesh.rotation.y = t * 0.4;

		this.box4Mesh.position.x = Math.cos(speed * t) * 150
		this.box4Mesh.position.y = Math.sin(speed * t) * 150
		this.box4Mesh.position.z = Math.cos(speed * t) * -120

		this.box4Mesh.rotation.x = t * 0.2;
		this.box4Mesh.rotation.y = t * 0.2;
	}

	componentWillUnmount() {
		this.stop()
		this.mount.removeChild(this.renderer.domElement)
	}

	start() {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate, 1000/60)
		}
	}

	stop() {
		cancelAnimationFrame(this.frameId)
	}

	animate() {
		this.renderScene()	
		this.orbital(this.clock.getElapsedTime())
		requestAnimationFrame(this.animate, 1000/60)
	}

	renderScene() {
		this.renderer.render(this.scene, this.camera)

	}

	render() {
		return (
			<div
				ref={(mount) => { this.mount = mount }} 
				style={canvasStyle}
			/>
		);
	}
}
