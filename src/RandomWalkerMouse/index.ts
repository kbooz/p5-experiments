import P5 from "p5";
import RandomBall from "./RandomBall";

export default function RandomWalkerMouse (p: P5) {
    let walker: RandomBall;

    p.setup = function() {
        p.createCanvas(700, 410);
        walker = new RandomBall(p);
    };

    p.draw = function() {
        p.background(51);
        walker.draw();
    };
}