import { IPoint } from "../interfaces/IPoint"
import { Figure } from "../Figure"

export class Circle extends Figure{

    constructor(
        private origin : IPoint, 
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

    computeArea(): number {
        return Math.PI * (this.radius ** 2)
    }
}