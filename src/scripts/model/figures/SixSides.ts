import { Figure } from "../Figure";
import { FiveSides } from "./FiveSides";
import { IPoint } from "../interfaces/IPoint";
import { Triangle } from "./Triangle";
import { PolygonPathBuilder } from "../../creational/PolygonPathBuilder";
import { Polygon } from "../interfaces/Polygon";

export class SixSides extends Figure implements Polygon{
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
            //Split intro triangle and FiveSides
            let p = this.path
            let t = new Triangle()
            t.setPoints([p[0],p[1],p[2]])
            let q = new FiveSides()
            q.setPoints([p[2],p[3],p[4],p[5],p[0]])

            return q.computeArea() + t.computeArea()
        }

        setPoints(points : IPoint[])
        {
            if(points.length > 5)
            {
                this.path = points
            }
        }

        getPoints(): IPoint[] {
            return this.path
        }
}