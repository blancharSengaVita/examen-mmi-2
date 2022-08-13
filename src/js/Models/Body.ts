import {settings} from "../settings";
import {Canvas} from "./Canvas";
import {position} from "../Types/position";

export class Body extends Canvas {
    protected color: string;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: position) {
        super(canvas, ctx, position);
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = settings.snake.color;
        this.ctx.rect(this.position.x, this.position.y, settings.snake.unit, settings.snake.unit);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath()
    }

    clear() {
        this.ctx.clearRect(this.position.x, this.position.y, settings.snake.unit, settings.snake.unit)
    }
}