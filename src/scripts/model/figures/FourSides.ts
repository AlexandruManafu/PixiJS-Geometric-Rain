import { PolygonPathBuilder } from "../../creational/PolygonPathBuilder";
import { Figure } from "../Figure";
import { IPoint } from "../interfaces/IPoint";
import { Polygon } from "../interfaces/Polygon";
import { Triangle } from "./Triangle";
export class FourSides extends Figure implements Polygon{
    
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
            //Split intro triangles
            if(this.path.length > 3)
            {
                let p = this.path
                let t1 = new Triangle()
                t1.setPoints([p[0],p[1],p[3]])
                let t2 = new Triangle()
                t2.setPoints([p[1],p[2],p[3]])

                return t1.computeArea() + t2.computeArea()
            }
            return 0
        }

        setPoints(points : IPoint[])
        {
            if(points.length > 3)
            {
                this.path = points
            }
        }

        getPoints(): IPoint[] {
            return this.path
        }


    


}