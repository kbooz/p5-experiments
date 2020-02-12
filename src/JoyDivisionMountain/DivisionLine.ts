/* eslint-disable @typescript-eslint/no-unused-vars */
import P5, { Vector } from "p5";

export default class DivisionLine {
  p: P5;

  points: Vector[] = [];

  constructor(p: P5, height: number, xSteps: number) {
    this.p = p;

    const step = p.width / xSteps;
    for (let x = 0; x <= step; x++) {
      const xPos = x * xSteps;
      const distanceToCenter = Math.abs(xPos - p.width / 2); // 0 -> nearest to center
      const variance = Math.max(p.width / 2 - step - distanceToCenter, 0); // Highest value near the center, creates mountain
      const random = ((Math.random() * variance) / 2) * -1;
      this.points.push(p.createVector(xPos, height + random, variance));
    }
  }

  show(_xoff?: number) {
    this.p.stroke(255);
    this.p.strokeWeight(1);
    this.p.fill(51);

    this.p.beginShape();
    this.points.forEach(point => {
      this.p.curveVertex(point.x, point.y);
    });
    this.p.endShape();
  }
}
