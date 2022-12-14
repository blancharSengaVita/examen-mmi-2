import {Body} from "./Body";
import {direction} from "../Types/direction";
import {settings} from "../settings";
import {Canvas} from "./Canvas";
import {position} from "../Types/position";
import {Apple} from "./Apple";
import {Score} from "./Score";
import {compare} from "../Helpers/compare";

export class Snake extends Canvas {
    private current: { direction: direction };
    public tail: Body[];
    private readonly apples: Apple[];
    private readonly score: Score;
    private readonly replay: (message: string) => void;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, current: { direction: direction }, apples: Apple[], score: Score, replay: (message: string) => void) {
        super(canvas, ctx, {
            x: 0,
            y:0
        });

        this.tail = [];
        this.draw();
    }

    draw(){
        for (let i= 0; i < settings.snake.initialCount; i++){
            this.tail.push(new Body(this.canvas, this.ctx, {
                x: this.position.x - settings.snake.unit * i,
                y: this.position.y
            }))
            console.table(this.tail)
        }

        this.tail.forEach((body)=> {
            body.position.x += this.canvas.width / 2 + 2 * settings.snake.unit;
            body.position.y += this.canvas.height / 2;
            body.draw();
        })
    }


    update() {

    }
    private isGoingOutside() {

    }

    private isEating() {

    }

    private isBitingItsTail() {

    }


    clear() {

    }

    createSnake(){

    }
}
