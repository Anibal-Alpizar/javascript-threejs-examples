import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  10
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// create sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// set initial position and velocity
sphere.position.y = 1;
let velocityY = -0.01;

renderer.render(scene, camera);

function bouncingSphere() {
  requestAnimationFrame(bouncingSphere);
  renderer.render(scene, camera);
  
  // update position and velocity
  sphere.position.y += velocityY;
  velocityY += 0.0001; // simulate gravity
  
  // check for bounce
  if (sphere.position.y < -1) {
    sphere.position.y = -1;
    velocityY *= -0.9; // reverse velocity with some damping
  }
}

bouncingSphere();
