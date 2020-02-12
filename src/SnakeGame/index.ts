import P5 from "p5";
import Snake from "./Snake";
import Food from "./Food";

// https://www.youtube.com/watch?v=OMoVcohRgZA 12:55

export default function SnakeGame(p: P5) {
  let snake: Snake;
  const res = 20;
  let dimensions: P5.Vector;
  let food: Food;

  p.setup = () => {
    p.createCanvas(400, 400);
    dimensions = p.createVector(p.width / res, p.height / res);
    p.frameRate(5);
    snake = new Snake(p, dimensions);
    food = new Food(p, dimensions);
  };

  p.keyPressed = () => {
    snake.watchKeys();
  };

  p.draw = () => {
    p.background(51);
    p.scale(res);
    if (snake.eat(food.pos)) {
      food = new Food(p, dimensions);
    }
    snake.update();
    snake.show();
    food.show();
  };
}
