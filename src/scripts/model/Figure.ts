import { IPoint } from "./interfaces/IPoint"

export  abstract class Figure{

    constructor(protected color? : number, protected id? : string)
    {}

    abstract computeArea() : number

    setColor(color:number)
    {
        this.color = color
    }
    getColor()
    {
        return this.color
    }

    getId()
    {
        return this.id
    }

    public static computeDistance(p1 : IPoint, p2 : IPoint)
    {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
    }

    public static getPointsAsArray(path : IPoint[])
    {
        let res = []
        for(let i = 0;i<path.length;i++)
        {
            res.push(path[i].x)
            res.push(path[i].y)
        }
        return res
    }
}