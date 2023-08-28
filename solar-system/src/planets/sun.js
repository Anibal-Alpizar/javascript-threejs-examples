import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";

const geometry = new SphereGeometry();
const material = new MeshBasicMaterial({ color: 0xffa500 });
const sphere = new Mesh(geometry, material);
sphere.position.x = 0;
sphere.position.y = 0;

export const sun = sphere;
