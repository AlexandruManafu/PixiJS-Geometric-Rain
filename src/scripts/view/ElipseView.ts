import { Elipse } from "../model/figures/Elipse";
import { FigureView } from "./FigureView";

export class ElipseView extends FigureView{

    constructor(protected data : Elipse)
    {
        super(data)
        this.initGraphics()
    }

    protected initGraphics()
    {
        this.graphics.beginFill(this.data.getColor())
        .drawEllipse(
            this.data.getX(),
            this.data.getY(),
            this.data.getWidth(),
            this.data.getHeight()
        ).endFill()
        this.graphics.name = this.data.getId()!
        this.graphics.interactive = true
    }
}