import P5, { Vector } from 'p5';
import Particle from './Particle';

export default class Snake {
    p: P5;
    pos: Vector;
    vel: Vector;
    trail: Particle[];

    constructor(p: P5) {
        this.p = p;
        this.pos = p.createVector(p.width/2, p.height/2);
        this.trail = new Array(5).fill(0).map((_, index) => new Particle(p)))
    }

    draw(xoff: number = 0) {
        const {p} = this;
        this.trail.forEach((trail, index) => trail.draw(this.calculateSectionPos(this.pos, index, xoff)))
        this.pos.sub(0, 1);
        // p.fill(255);
        // p.ellipse(this.pos.x, this.pos.y, 10);
    }

    calculateSectionPos(pos: Vector, index: number, xoff: number): Vector {
        const {p} = this;
        return Vector.sub(pos, p.createVector(0, index * 2));
    }
}