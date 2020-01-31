import P5 from "p5";
import Snake from "./Snake";

export default function RandomWalkerWithParticle(p: P5) {
  let snake: Snake;
  let xoff = 0;

  p.setup = function() {
    p.createCanvas(700, 410);
    snake = new Snake(p);
  };

  p.draw = function() {
    p.background(51);
    snake.draw(xoff);
    xoff += 1;
  };
}
