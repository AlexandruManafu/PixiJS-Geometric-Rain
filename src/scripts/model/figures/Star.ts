import { IPoint } from "../interfaces/IPoint"
import { Figure } from "../Figure"

export class Star extends Figure{

    constructor(
        private origin : IPoint,
        private numberPoints : number,
        private radius : number, 
        protected color? : number, 
        protected id? : string)
    {
        super(color,id)
    }

    getX()
    {
        return this.origin.x
    }

    getY()
    {
        return this.origin.y
    }

    getRadius()
    {
        return this.radius
    }

    getPoints()
    {
        return this.numberPoints
    }

    computeArea(): number {
        return 0
    }
}