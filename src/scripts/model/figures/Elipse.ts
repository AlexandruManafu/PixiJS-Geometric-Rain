import { Figure } from "../Figure";
import { IPoint } from "../interfaces/IPoint";
export class Elipse extends Figure{
    constructor(
        private origin : IPoint,
        private width : number,
        private height: number,
        protected color? : number,
        protected id?:string)
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

    getWidth()
    {
        return this.width
    }

    getHeight()
    {
        return this.height
    }

    computeArea(): number {
        return Math.PI * this.height * this.width
    }
}