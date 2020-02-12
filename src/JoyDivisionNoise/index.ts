import P5 from "p5";
import DivisionLineNoise from "./DivisionLineNoise";

export default function JoyDivisonNoise(p: P5) {
  const lines = [];
  const space = 15;
  const topMargin = 100;
  const bottomMargin = 50;
  const xSteps = 15;
  let xoff = 0;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(51);

    // lines.push(new DivisionLineNoise(p, 100, xSteps));

    for (let y = topMargin; y < p.height - bottomMargin; y += space) {
      lines.push(new DivisionLineNoise(p, y, xSteps));
    }
  };

  p.draw = () => {
    lines.forEach(line => line.show(xoff));
    xoff += 0.1;
  };
}
