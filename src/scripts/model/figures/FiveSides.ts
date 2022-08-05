import { PolygonPathBuilder } from "../../creational/PolygonPathBuilder";
import { Figure } from "../Figure";
import { IPoint } from "../interfaces/IPoint";
import { Polygon } from "../interfaces/Polygon";
import { FourSides } from "./FourSides";
import { Triangle } from "./Triangle";

export class FiveSides extends Figure implements Polygon{
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

        computeArea(): number {
            //Split intro triangle and Quad
            let p = this.path
            let t = new Triangle()
            t.setPoints([p[0],p[1],p[2]])
            let q = new FourSides()
            q.setPoints([p[2],p[3],p[4],p[0]])
            return q.computeArea() + t.computeArea()
        }

        setPoints(points : IPoint[])
        {
            if(points.length > 4)
            {
                this.path = points
            }
        }

        getPoints(): IPoint[] {
            return this.path
        }
}