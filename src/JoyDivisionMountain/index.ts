/* eslint-disable no-plusplus */
import P5 from "p5";
import DivisionLine from "./DivisionLine";

export default function JoyDivisonMountain(p: P5) {
  const lines = [];
  const space = 15;
  const topMargin = 100;
  const bottomMargin = 50;
  const xSteps = 15;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(51);

    // lines.push(new DivisionLine(p, 100, xSteps));

    for (let y = topMargin; y < p.height - bottomMargin; y += space) {
      lines.push(new DivisionLine(p, y, xSteps));
    }
  };

  p.draw = () => {
    lines.forEach(line => line.show());
  };
}
