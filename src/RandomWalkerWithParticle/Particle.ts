import P5, { Vector } from "p5";

export default class Particle {
  p: P5;

  constructor(p: P5) {
    this.p = p;
  }

  draw(pos: Vector) {
    const { p } = this;
    p.fill(255);
    p.strokeWeight(0);
    p.ellipse(pos.x, pos.y, 10);
  }
}
