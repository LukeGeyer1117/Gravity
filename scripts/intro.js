import * as THREE from 'three';
import { Body } from './body.js';

// Initialize scene, camera, and renderer.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Store a list of bodies in the simulation that can be updated 
// progressively with new bodies. Plain array will work for now.

let bodies = [
    [10000000,150000]
]

for (let i = 0; i< bodies.length; i ++) {
    const mass = bodies[i][0];
    const volume = bodies[i][1];

    console.log(`Mass: ${mass}, Volume: ${volume}`)

    const sphere = CreateBody(mass, volume);
    scene.add(sphere);
}

camera.position.z = 1000;

function animate() {
    renderer.render( scene, camera );
}

function CreateBody(mass, volume, x, y, z) {
    const body = new Body (mass, volume, x, y, z);

    // Create sphere geometry, add material and renderable sphere.
    const geometry = new THREE.SphereGeometry( body.calcRadius(), 32, 16 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const sphere = new THREE.Mesh( geometry, material );

    return sphere;
}

renderer.setAnimationLoop( animate );