import P5, { Vector } from "p5";

export default class Snake {
  p: P5;

  dimension: Vector;

  body: Vector[] = [];

  dir: Vector;

  constructor(p: P5, dimension: Vector) {
    this.p = p;
    this.body[0] = p.createVector(0, 0);
    this.dir = p.createVector(0, 0);
    this.dimension = dimension;
  }

  update() {
    const head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.add(this.dir);
    this.body.push(head);
    this.loopBody(head);
  }

  show() {
    const { p } = this;

    this.body.forEach(body => {
      p.fill(0);
      p.rect(body.x, body.y, 1, 1);
    });
  }

  grow() {
    const last = this.body[this.body.length - 1].copy();
    this.body.push(last);
  }

  eat(pos: Vector) {
    const head = this.body[this.body.length - 1];
    if (head.equals(pos)) {
      this.grow();
      return true;
    }
    return false;
  }

  loopBody(body: P5.Vector) {
    const { dimension } = this;

    if (body.x > dimension.x + 1) {
      body.x = 0;
    } else if (body.x < -1) {
      body.x = dimension.x;
    }

    if (body.y > dimension.y) {
      body.y = 0;
    } else if (body.y < -1) {
      body.y = dimension.y;
    }
  }

  setDirection(x: number, y: number) {
    this.dir.x = x;
    this.dir.y = y;
  }

  watchKeys() {
    const { p } = this;
    switch (p.keyCode) {
      case p.UP_ARROW:
        this.setDirection(0, -1);
        break;
      case p.DOWN_ARROW:
        this.setDirection(0, 1);
        break;
      case p.RIGHT_ARROW:
        this.setDirection(1, 0);
        break;
      case p.LEFT_ARROW:
        this.setDirection(-1, 0);
        break;
      default:
        break;
    }
  }
}
