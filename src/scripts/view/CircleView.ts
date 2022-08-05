import { FigureView } from "./FigureView";
import { Circle } from "../model/figures/Circle";
export class CircleView extends FigureView
{
    constructor(protected data : Circle)
    {
        super(data)
        this.initGraphics()
    }

    protected initGraphics()
    {
        this.graphics.beginFill(this.data.getColor())
        .drawCircle(
            this.data.getX(),
            this.data.getY(),
            this.data.getRadius()
        )
        .endFill()
        this.graphics.name = this.data.getId()!
        this.graphics.interactive = true
    }
        

    getGraphics(): PIXI.Graphics {
        return this.graphics
    }
}