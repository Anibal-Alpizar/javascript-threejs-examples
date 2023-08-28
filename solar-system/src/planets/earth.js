import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";

const geometry = new SphereGeometry();
const material = new MeshBasicMaterial({ color: 0x0077be });
const sphere = new Mesh(geometry, material);
sphere.position.x = -3;
sphere.position.y = 0;

export const earth = sphere;
