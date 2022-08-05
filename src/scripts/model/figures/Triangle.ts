import { PolygonPathBuilder } from "../../creational/PolygonPathBuilder"
import { Figure } from "../Figure"
import { IPoint } from "../interfaces/IPoint"
import { Polygon } from "../interfaces/Polygon"

export class Triangle extends Figure implements Polygon{

    private path : IPoint[] = []
    constructor(
        private builder? : PolygonPathBuilder,
        protected color? : number,
        protected id? : string
    )
    {
        super(color,id)
        if(builder != undefined)
            this.setPoints(this.builder!.path)
    }

    private getLengths()
    {
        return [Figure.computeDistance(this.path[0],this.path[1]),
                Figure.computeDistance(this.path[1],this.path[2]), 
                Figure.computeDistance(this.path[0],this.path[2])]
    }

    computeArea(): number {
        if(this.path.length > 2)
        {
            let lengths = this.getLengths()
            let s = (lengths[0] + lengths [1] + lengths[2])/2
            return Math.sqrt( s * (s-lengths[0]) * (s-lengths[1]) * (s-lengths[2]) )
        }
        return 0
    }

    setPoints(points : IPoint[])
    {
        if(points.length >= 3)
        {
            this.path = points
        }
    }

    getPoints(): IPoint[] {
        return this.path
    }
}