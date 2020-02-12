import P5, { Vector } from "p5";

export default class Food {
  p: P5;

  pos: Vector;

  constructor(p: P5, dimension: Vector) {
    this.p = p;
    this.pos = p.createVector(
      p.floor(p.random(dimension.x)),
      p.floor(p.random(dimension.y))
    );
  }

  show() {
    const { p, pos } = this;
    p.noStroke();
    p.fill(255, 0, 0);
    p.rect(pos.x, pos.y, 1, 1);
  }
}
