import { FigureView } from "./FigureView";
import { Star } from "../model/figures/Star";
export class StarView extends FigureView
{

    constructor(protected data : Star)
    {
        super(data)
        this.initGraphics()
    }   

    protected initGraphics()
    {
        let d = this.data
        this.graphics.beginFill(this.data.getColor())
        .drawStar(
            d.getX(),
            d.getY(),
            d.getPoints(),
            d.getRadius()
        )
        .endFill()
        this.graphics.name = this.data.getId()!
        this.graphics.interactive = true
    }
    
    getGraphics(): PIXI.Graphics {
        return this.graphics
    }
}