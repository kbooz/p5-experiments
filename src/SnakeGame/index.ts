import P5 from "p5";
import Snake from "./Snake";

export default function SnakeGame(p: P5) {
  let snake: Snake;
  const res = 10;

  p.setup = () => {
    p.createCanvas(500, 500);
    snake = new Snake(p);
  };

  p.keyPressed = () => {
    switch (p.keyCode) {
      case p.UP_ARROW:
        snake.setDirection(0, -1);
        break;
      case p.DOWN_ARROW:
        snake.setDirection(0, 1);
        break;
      case p.RIGHT_ARROW:
        snake.setDirection(1, 0);
        break;
      case p.LEFT_ARROW:
        snake.setDirection(-1, 0);
        break;
      default:
        break;
    }
  };

  p.draw = () => {
    p.background(51);
    p.scale(res);
    snake.draw();
    snake.show();
  };
}
