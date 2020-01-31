import P5, { Vector } from "p5";

export default class Snake {
  p: P5;

  body: Vector[] = [];

  dir: Vector;

  constructor(p: P5) {
    this.p = p;
    this.body[0] = p.createVector(0, 0);
    this.dir = p.createVector(0, 0);
  }

  draw() {
    this.body[0].add(this.dir);
  }

  show() {
    const { p } = this;

    const [body] = this.body;

    p.fill(0);
    p.rect(body.x, body.y, 1, 1);
  }

  setDirection(x: number, y: number) {
    this.dir.x = x;
    this.dir.y = y;
  }
}
