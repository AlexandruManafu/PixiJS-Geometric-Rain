import { FigureView } from "./FigureView";
import { Polygon } from "../model/interfaces/Polygon";
import { Figure } from "../model/Figure";
export class PolygonView extends FigureView
{

    constructor(protected data : Figure & Polygon)
    {
        super(data)
        this.initGraphics()
    }   

    protected initGraphics()
    {
        this.graphics.beginFill(this.data.getColor())
        .drawPolygon(
            Figure.getPointsAsArray(this.data.getPoints())
        )
        .endFill()
        this.graphics.name = this.data.getId()!
        this.graphics.interactive = true
    }
}