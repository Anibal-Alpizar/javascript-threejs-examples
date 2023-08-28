import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { sun } from "./planets/sun.js";
import { earth } from "./planets/earth.js";

const scene = new Scene();
const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 10;

const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(sun);
scene.add(earth);

const animate = (time) => {
  requestAnimationFrame(animate);

  earth.position.x = Math.cos(time * 0.005) * 5;
  earth.position.z = Math.sin(time * 0.005) * 5;

  renderer.render(scene, camera);
};

animate(0);
