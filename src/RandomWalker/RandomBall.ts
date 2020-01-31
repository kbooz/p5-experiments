import P5, { Vector } from "p5";

export default class RandomBall {
  p: P5;
  pos: Vector;
  vel: Vector;
  acc: Vector;

  constructor(p: P5) {
    this.p = p;
    this.pos = p.createVector(p.width / 2, p.height / 2);
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
  }

  draw() {
    const { p } = this;
    p.fill(255);
    p.ellipse(this.pos.x, this.pos.y, 100, 100);
    this.update();
  }

  update() {
    const { p } = this;
    const mouse = p.createVector(p.mouseX, p.mouseY);

    const randomness = p.createVector(p.random(-1, 1), p.random(-1, 1));
    randomness.limit(0.5);

    this.acc = P5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.1);
    this.vel.add(this.acc);
    this.vel.add(randomness);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }
}
