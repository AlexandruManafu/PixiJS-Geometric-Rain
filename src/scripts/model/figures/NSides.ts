import { Figure } from "../Figure";
import { FiveSides } from "./FiveSides";
import { IPoint } from "../interfaces/IPoint";
import { Triangle } from "./Triangle";
import { PolygonPathBuilder } from "../../creational/PolygonPathBuilder";
import { Polygon } from "../interfaces/Polygon";
import { FourSides } from "./FourSides";

export class NSides extends Figure implements Polygon{

    private area = 0
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

        computeArea()
        {
            this.computeAreaRecursive(this.path)
            let area = this.area
            this.area = 0
            return area
        }

        private computeAreaRecursive(points : IPoint[]): void {
            
            let copy = JSON.parse(JSON.stringify(points))
            if(copy.length > 5)
            {
                let firstHalf = copy.slice(0,(copy.length+1)/2)
                let secondHalf = copy.slice((copy.length+1)/2 - 1,copy.length)
                secondHalf.push(copy[0])
                this.computeAreaRecursive(firstHalf)
                this.computeAreaRecursive(secondHalf)
            }
            else if(copy.length == 5)
            {
                let p = new FiveSides()
                p.setPoints(
                    copy
                )
                this.area += p.computeArea()
            }
            else if(copy.length == 4)
            {
                let p = new FourSides()
                p.setPoints(
                    copy
                )
                this.area += p.computeArea()
            }
            else if(copy.length == 3)
            {
                let p = new Triangle()
                p.setPoints(
                    copy
                )
                this.area += p.computeArea()
            }

        }

        setPoints(points : IPoint[])
        {
            this.path = points
        }

        getPoints(): IPoint[] {
            return this.path
        }
}