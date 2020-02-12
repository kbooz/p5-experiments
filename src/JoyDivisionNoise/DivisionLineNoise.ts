/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import P5, { Vector } from "p5";

export default class DivisionLineNoise {
  p: P5;

  points: Array<[number, number, number, number]> = [];

  constructor(p: P5, height: number, xSteps: number) {
    this.p = p;

    const step = p.width / xSteps;
    for (let x = 0; x <= step; x++) {
      const xPos = x * xSteps;
      const distanceToCenter = Math.abs(xPos - p.width / 2); // 0 -> nearest to center
      const variance = Math.max(p.width / 2 - step - distanceToCenter, 0); // Highest value near the center, creates mountain
      this.points.push([xPos, this.p.height / 2, variance, height]);
    }
  }

  show(xoff: number) {
    this.p.stroke(255);
    this.p.strokeWeight(1);
    this.p.fill(51);

    this.p.beginShape();
    this.points.forEach(([x, y, z, a]) => {
      const distortion = this.p.noise(xoff, z, a) * z - z;
      this.p.curveVertex(x, y + distortion);
    });
    this.p.endShape();
  }
}
